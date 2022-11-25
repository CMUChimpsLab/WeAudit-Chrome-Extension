import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header';
import image from './image_173.png';

class GreetingComponent extends Component {
  state = {
    notice: this.props.notice,
  };

  render() {
    document.body.style.height = '580px';
    document.body.style.width = '400px';
    return (
      <div className="App">
        <Header notice={this.state.notice} setPage={this.props.setPage} />
        <div className="e7705_10042">
          <span className="e7646_9844">
            <b>Dall-E</b>
          </span>
          <div
            className="e7646_9846"
            onClick={() => {
              chrome.tabs.create({
                url: 'https://labs.openai.com/',
                active: true,
              });
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.70825 3.79232C2.56459 3.79232 2.42682 3.84939 2.32524 3.95097C2.22365 4.05255 2.16659 4.19033 2.16659 4.33398V10.2923C2.16659 10.436 2.22365 10.5738 2.32524 10.6753C2.42682 10.7769 2.56459 10.834 2.70825 10.834H8.66659C8.81025 10.834 8.94802 10.7769 9.0496 10.6753C9.15119 10.5738 9.20825 10.436 9.20825 10.2923V7.04232C9.20825 6.74316 9.45077 6.50065 9.74992 6.50065C10.0491 6.50065 10.2916 6.74316 10.2916 7.04232V10.2923C10.2916 10.7233 10.1204 11.1366 9.81563 11.4414C9.51089 11.7461 9.09756 11.9173 8.66659 11.9173H2.70825C2.27728 11.9173 1.86395 11.7461 1.5592 11.4414C1.25446 11.1366 1.08325 10.7233 1.08325 10.2923V4.33398C1.08325 3.90301 1.25446 3.48968 1.5592 3.18494C1.86395 2.88019 2.27728 2.70898 2.70825 2.70898H5.95825C6.25741 2.70898 6.49992 2.9515 6.49992 3.25065C6.49992 3.54981 6.25741 3.79232 5.95825 3.79232H2.70825Z"
                fill="#128F6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.58325 1.62565C7.58325 1.3265 7.82576 1.08398 8.12492 1.08398H11.3749C11.6741 1.08398 11.9166 1.3265 11.9166 1.62565V4.87565C11.9166 5.17481 11.6741 5.41732 11.3749 5.41732C11.0758 5.41732 10.8333 5.17481 10.8333 4.87565V2.16732H8.12492C7.82576 2.16732 7.58325 1.92481 7.58325 1.62565Z"
                fill="#128F6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.758 1.24263C11.9696 1.45417 11.9696 1.79713 11.758 2.00867L5.79968 7.967C5.58815 8.17854 5.24518 8.17854 5.03365 7.967C4.82212 7.75547 4.82212 7.4125 5.03365 7.20097L10.992 1.24263C11.2035 1.0311 11.5465 1.0311 11.758 1.24263Z"
                fill="#128F6E"
              />
            </svg>
          </div>
          <img src={image} alt="demo" className="e7646_9850"></img>
          <div
            className="e7646_9851"
            onClick={() => {
              this.props.setPage('Home');
            }}
          >
            <span className="e7646_9852">Start auditing</span>
          </div>
          <span
            className="e7646_9853"
            onClick={() => {
              this.props.setPage('HomeNotice');
            }}
          >
            <u>Go back to onboarding</u>
          </span>
          <span className="e7646_9886">
            <b style={{ fontWeight: 600 }}>
              Dall-E has been recognized to have a potentially biased algorithm.{' '}
            </b>
          </span>
          <span className="e7646_9887">
            Our users has reported multiple terms or phases whose generated
            results may lead to <b>harmful discrimination</b>.
            <br />
            <br />
            <b style={{ fontWeight: 700 }}>We’d like to invite you</b> to check
            if there are potential cases of biases or harmful discrimination
            generated in the way when a certain term or phase is searched.{' '}
          </span>
        </div>
      </div>
    );
  }
}

export default GreetingComponent;
