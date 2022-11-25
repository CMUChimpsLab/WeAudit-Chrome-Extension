import React, { useState, useEffect } from 'react';
import Start from '../../containers/Start';
import Home from '../../containers/Home';
import Form from '../../containers/Form';
import Follow from '../../containers/Follow';
import Learn from '../../containers/Learn';
import './Popup.css';

//https://labs.openai.com/collection
//https://labs.openai.com/e/*
//https://labs.openai.com/

const Popup = (props) => {
  const [page, setPage] = useState('');
  const [url, setURL] = useState('');
  const [start, setStart] = useState(true);
  const [home, setHome] = useState(true);
  const [filterwebsites, setFilterwebsites] = useState([]);
  useEffect(() => {
    const queryURL = (f) => {
      if (props && props.contentScript) {
        f([{ url: 'example.com' }]);
      } else {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, f);
      }
    };

    queryURL((tabs) => {
      console.log(tabs);
      let url = tabs[0].url;
      setURL(url);
      if (url.startsWith('https://labs.openai.com/collection')) {
        setPage('FormSingle');
      } else if (url.startsWith('https://labs.openai.com/e')) {
        setPage('Form');
      } else if (url.startsWith('https://labs.openai.com')) {
        setPage('Start');
      } else {
        setPage('Home');
      }
      chrome.storage.sync.get(['notice', 'filterwebsites'], (result) => {
        if (result.notice) {
          setHome(false);
        }
        if (result.filterwebsites) {
          if (result.filterwebsites && result.filterwebsites.includes(url)) {
            setStart(false);
          } else {
            setFilterwebsites(result.filterwebsites);
          }
        }
      });
    });
  }, []);

  switch (page) {
    case 'Home':
      return <Home setPage={setPage} notice={false} />;
    case 'Learn':
      return <Learn setPage={setPage} />;
    case 'HomeNotice':
      return <Home setPage={setPage} notice={home} />;
    case 'Follow':
      return <Follow setPage={setPage} />;
    case 'Start':
      if (!start) return <Home setPage={setPage} notice={home} />;
      return (
        <Start setPage={setPage} url={url} filterwebsites={filterwebsites} />
      );
    case 'Form':
      return (
        <Form
          setPage={setPage}
          message={'dalle'}
          contentScript={props && props.contentScript}
        />
      );
    case 'FormSingle':
      return (
        <Form
          setPage={setPage}
          message={'dalle connection'}
          contentScript={props && props.contentScript}
        />
      );
    default:
      return <Home setPage={setPage} />;
  }
};

export default Popup;
