const fs = require('fs');
const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const cors = require('cors');
const stream = require('stream');

const { google } = require('googleapis');
const { file } = require('googleapis/build/src/apis/file');

const CLIENT_ID =
  '485227666509-i2sjc6932chu22s82il29veiodlea6sv.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04wm_dWslS1edCgYIARAAGAQSNwF-L9IrTeLac9DF2Zkzi1LZlYDc5o_TIRwAH-x3oJsGm6lggFre-tO7LVKcHI5zAM1r8H6YXHo';
const SPREADSHEET_ID = '1uAISnsBgqj4SZaNahfD2V26-d3-5JvNC_ar9Sa1KkeY';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function uploadBasic(fileObject) {
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
        name: fileObject.originalname,
        //parents: ['DRIVE_FOLDER_ID'],
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

app.get('/', upload.none(), async (req, res) => {
  let vals = await getValues(SPREADSHEET_ID, 'NewFormUploadData');
  res.send(JSON.stringify(vals));
});

app.post('/append', upload.none(), async (req, res) => {
  await appendValues(
    SPREADSHEET_ID,
    JSON.parse(req.body.values),
    'FormAuditData'
  );
  res.send('appended');
});

app.post('/image', upload.single('image'), async (req, res) => {
  let link = await uploadBasic(req.file);
  console.log(link);
  res.send(link);
});

app.listen(port, () => {
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
