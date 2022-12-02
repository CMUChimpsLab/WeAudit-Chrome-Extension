const fetch = require('node-fetch');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const cors = require('cors');
const stream = require('stream');

const { google } = require('googleapis');
const { file } = require('googleapis/build/src/apis/file');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const WEAUDIT_BASE_URL = 'https://forum.weaudit.org';
const WEAUDIT_HEADERS = {
  'Api-Key': process.env.WEAUDIT_API_KEY,
  'Api-Username': 'CMUweaudit-admin',
  'Content-Type': 'application/json',
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

/**
 * It takes a file object, uploads it to Google Drive, and returns a link to the
 * uploaded file
 * @param fileObject - The file object that is passed to the upload function.
 * @returns The webViewLink is being returned.
 */
async function uploadBasic(fileObject,name) {
  const service = google.drive({ version: 'v3', auth: oauth2Client });
  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  try {
    const file = await service.files.create({
      media: {
        mimeType: fileObject.mimeType,
        body: bufferStream,
      },
      requestBody: {
        name: name,
        parents: ['10gosnIiPffmnAKva4_Nc2lMGouCjja5p'],
      },
      fields: 'id,name',
    });
    await service.permissions.create({
      fileId: file.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });
    const webViewLink = await service.files
      .get({
        fileId: file.data.id,
        fields: 'webViewLink',
      })
      .then((response) => response.data.webViewLink);

    return webViewLink;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
}

async function create(title) {
  const service = google.sheets({ version: 'v4', auth: oauth2Client });
  const resource = {
    properties: {
      title,
    },
  };
  try {
    const spreadsheet = await service.spreadsheets.create({
      resource,
      fields: 'spreadsheetId',
    });
    console.log(`Spreadsheet ID: ${spreadsheet.data.spreadsheetId}`);
    return spreadsheet.data.spreadsheetId;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}

async function appendValues(spreadsheetId, values, range) {
  const service = google.sheets({ version: 'v4', auth: oauth2Client });
  try {
    values.unshift(new Date().toISOString());
    const result = await service.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [values],
      },
    });
    return result;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}

async function getValues(spreadsheetId, range) {
  const service = google.sheets({ version: 'v4', auth: oauth2Client });
  try {
    const result = await service.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
    });
    return result.data.values;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}

const port = 5000;
const app = express();

app.use(cors());

// Configuring body parser middleware

/* This is a route that is listening for a GET request to the root of the server.
When it receives a GET request, it will run the code inside the function. In
this case, it will get the values from the spreadsheet and send them back to the
client. */
app.get('/', upload.none(), async (req, res) => {
  let vals = await getValues(SPREADSHEET_ID, 'NewFormUploadData');
  res.send(JSON.stringify(vals));
});

/* This is a route that is listening for a POST request to the root of the server.
When it receives a POST request, it will run the code inside the function. In
this case, it will append the values from the spreadsheet and send them back to
the
client. */
app.post('/append', upload.none(), async (req, res) => {
  await appendValues(
    SPREADSHEET_ID,
    JSON.parse(req.body.values),
    'FormAuditData'
  );
  res.send('appended');
});

app.post('/post-discourse', upload.none(), async (req, res) => {
  console.log(req.body.values);
  let data = JSON.parse(req.body.values);
  console.log(data)
  await fetch(`${WEAUDIT_BASE_URL}/posts.json`, {
    method: 'POST',
    headers: WEAUDIT_HEADERS,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      console.log('finally');
    });
  res.send('added post');
});

/* This is a route that is listening for a POST request to the root of the server.
When it receives a POST request, it will run the code inside the function. In
this case, it will append the values from the spreadsheet and send them back to
the
client. */
app.post('/image', upload.single('image'), async (req, res) => {
  console.log(req);
  let link = await uploadBasic(req.file,req.body.name);
  //console.log(JSON.stringify({link:link}));
  res.send(JSON.stringify({link:link}));
});

app.listen(process.env.PORT || port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${port}`);
});

/*appendValues('1K6jfthqwbZuLzUqTTmTrPzbf7pGbGMIDZae2YafQj9o', [
  'test',
  'test',
  'test',
  'https://test.com',
]);*/
//1K6jfthqwbZuLzUqTTmTrPzbf7pGbGMIDZae2YafQj9o
//uploadBasic();
//create('crowdAudit');
