import { printLine } from './modules/print';
import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
//import { ScreenCapture } from 'react-screen-capture';
//import Popup from '../Popup/Popup';

console.log('Content script works!');

/*chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "start" ) {
            start();
        }
    }
);*/

const body = document.querySelector('body');

const app = document.createElement('div');
app.style['z-index'] = 2147483647;
app.style['position'] = 'absolute';
app.id = 'weAuditApp';

// Make sure the element that you want to mount the app to has loaded. You can
// also use `append` or insert the app using another method:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#methods
//
// Also control when the content script is injected from the manifest.json:
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time

function App() {
  const canvasRef = useRef();

  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    var canvas = canvasRef.current,
      ctx = canvas.getContext('2d'),
      rect = {},
      drag = false;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function mouseDown(e) {
      rect.startX = e.pageX - this.offsetLeft;
      rect.startY = e.pageY - this.offsetTop;
      drag = true;
    }

    function mouseUp() {
      drag = false;
      //chrome.storage.sync.set({ rect }, () => {
      console.log('take_screenshot');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let res = chrome.runtime.sendMessage(
        { type: 'take_screenshot', options: rect },
        null,
        async (res) => {
          console.log(res);
        }
      );
      //});
    }
    function mouseMove(e) {
      if (drag) {
        rect.w = e.pageX - this.offsetLeft - rect.startX;
        rect.h = e.pageY - this.offsetTop - rect.startY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
      }
    }

    function draw() {
      ctx.setLineDash([6]);
      ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
    }

    function init() {
      canvas.addEventListener('mousedown', mouseDown, false);
      canvas.addEventListener('mouseup', mouseUp, false);
      canvas.addEventListener('mousemove', mouseMove, false);
    }
    init();
  }, []);

  return (
    <div id="weaudit-selectionArea">
      <canvas ref={canvasRef} />
    </div>
  );
}

render(<App />, app);
/*
function App() {
  const [show, setShow] = useState(false);
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.message === 'start') {
      setShow(true);
    }
  });
  if (show) {
    return (
      <ScreenCapture
        onEndCapture={async (screenCapture) => {
          var formdata = new FormData();
          let blob = await fetch(screenCapture).then((res) => res.blob());
          formdata.append('image', blob, 'test.png');

          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
          };

          fetch('http://localhost:5000/image', requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
          setShow(false);
        }}
      >
        {({ onStartCapture }) => <Overlay onStartCapture={onStartCapture} />}
      </ScreenCapture>
    );
  }
  return <div></div>;
}

render(<App />, app);*/

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('received', request);
  //console.log(document.getElementById('app'));
  if (request.message === 'screenshot') {
    body.append(app);
    console.log('screenshot');
    sendResponse();
    //save edits to storage for pull from popup
    //sendResponse([prompt, urls]);
  }

  if (request.message === 'dalle') {
    let prompt = document.getElementsByClassName('image-prompt-input')[0].value;
    console.log(document);
    let arr = document.getElementsByClassName('generated-image');
    arr = [...arr];
    arr = arr.filter((x) => x.parentElement.className !== 'hist-gen-img');
    let urls = arr.map((x) => x.getElementsByTagName('img')[0].src);
    console.log([prompt, urls]);
    sendResponse([prompt, urls]);
  }

  if (request.message === 'dalle connection') {
    //get first
    let x = document.getElementsByClassName('gen-detail-caption b100')[0];
    console.log(document);
    if (x) {
      let prompt = x.textContent.slice(1, -1);
      let urls = [
        x.parentElement.parentElement.firstChild.firstChild.firstChild.src,
      ];
      sendResponse([prompt, urls]);
    } else {
      let prompt = document.getElementsByClassName('image-prompt-overlay')[0]
        .firstChild.textContent;
      let urls = [
        document.getElementsByClassName('generated-image')[0].firstChild.src,
      ];
      sendResponse([prompt, urls]);
    }
  }
  return true;
});

console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");
