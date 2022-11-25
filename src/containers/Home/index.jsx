import React, { Component } from 'react';
import './index.css';
import Notice from '../Notice';
import Header from '../../components/Header';

class GreetingComponent extends Component {
  state = {
    audits: [
      /*{
        title: 'Cute Baby',
        time: '2d 12h',
      },*/
      {
        title: 'Audit Dall-E',
        time: 'indefinite',
      },
    ],
    notice: this.props.notice,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.notice && !this.state.notice && this.props.notice) {
      this.setState({ notice: true });
    }
  }

  render() {
    document.body.style.height = '580px';
    document.body.style.width = '400px';
    return (
      <div className="App">
        <div
          style={
            this.state.notice
              ? { position: 'fixed', top: '0px', left: '0px' }
              : { top: '0px', left: '0px' }
          }
        >
          <Header notice={this.state.notice} setPage={this.props.setPage} />
          {this.state.audits.map((val, i) => {
            return (
              <div
                style={{
                  position: 'absolute',
                  top: 145 + 80 * i + 'px',
                  left: '0px',
                }}
                key={i}
              >
                <div className="e5479_22301">
                  <div className="e5479_22302" />
                </div>
                <span className="e5479_22303">
                  {val.title}{' '}
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    transform="translate(4,2)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {' '}
                    {/* Copy */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.12191 1.58006C1.19041 1.49787 1.26166 1.47461 1.3119 1.47461H4.96548C5.01572 1.47461 5.08697 1.49787 5.15547 1.58006C5.22618 1.66492 5.27738 1.79661 5.27738 1.9489V2.43604C5.27738 2.71218 5.50124 2.93604 5.77738 2.93604C6.05352 2.93604 6.27738 2.71218 6.27738 2.43604V1.9489C6.27738 1.58438 6.1575 1.22045 5.92369 0.939879C5.68767 0.656649 5.34589 0.474609 4.96548 0.474609H1.3119C0.931487 0.474609 0.589716 0.656649 0.353691 0.939879C0.119882 1.22045 0 1.58438 0 1.9489V6.33318C0 6.69769 0.119882 7.06163 0.353691 7.3422C0.589715 7.62543 0.931487 7.80747 1.3119 7.80747H1.71786C1.994 7.80747 2.21786 7.58361 2.21786 7.30747C2.21786 7.03132 1.994 6.80747 1.71786 6.80747H1.3119C1.26166 6.80747 1.19041 6.78421 1.12191 6.70201C1.0512 6.61715 1 6.48546 1 6.33318V1.9489C1 1.79661 1.0512 1.66492 1.12191 1.58006ZM3.8418 5.35905C3.8418 5.00788 4.06293 4.88477 4.1537 4.88477H7.80727C7.89805 4.88477 8.11918 5.00788 8.11918 5.35905V9.74334C8.11918 10.0945 7.89805 10.2176 7.80727 10.2176H4.1537C4.06293 10.2176 3.8418 10.0945 3.8418 9.74334V5.35905ZM4.1537 3.88477C3.34767 3.88477 2.8418 4.63406 2.8418 5.35905V9.74334C2.8418 10.4683 3.34767 11.2176 4.1537 11.2176H7.80727C8.61331 11.2176 9.11918 10.4683 9.11918 9.74334V5.35905C9.11918 4.63406 8.61331 3.88477 7.80727 3.88477H4.1537Z"
                      fill="#222222"
                    />
                  </svg>
                </span>
                <div
                  className="e5479_22306"
                  onClick={() => {
                    chrome.tabs.query(
                      { active: true, lastFocusedWindow: true },
                      (tabs) => {
                        let url = tabs[0].url;
                        // use `url` here inside the callback because it's asynchronous!
                        console.log(val.title);
                        if (url.startsWith('https://labs.openai.com')) {
                          if (
                            url !== 'https://labs.openai.com' ||
                            url !== 'https://labs.openai.com/'
                          ) {
                            chrome.tabs.update(undefined, {
                              url: 'https://labs.openai.com/',
                            });
                          }
                        } else {
                          chrome.storage.sync.set({ audit: val.title }, () => {
                            this.props.setPage('Form');
                          });
                          chrome.tabs.create({
                            url: 'https://labs.openai.com/',
                            active: true,
                          });
                        }
                      }
                    );
                  }}
                >
                  <span className="e5479_22307">Audit</span>
                </div>
                <span className="e5479_22312" style={{ width: '200px' }}>
                  Time remaining: {val.time}
                </span>
              </div>
            );
          })}
          {/* #F7FCFA */}
          <div className="e5479_22322">
            <div className="e5479_22323" />
            <div className="e5479_22324" />
          </div>
          <div className="f5479_22322"></div>
          <div className="e5479_22325">
            <span className="e5479_22326">Suggestions for Weaudit</span>
          </div>
          <span className="e5479_22327">
            <b>Found a biased search term?</b>
          </span>
          <span className="e5479_22328" style={{ width: '146px' }}>
            Bring it to the community.
          </span>
          <span
            className="e5479_22329"
            style={{ width: '100px' }}
            onClick={() => {
              this.setState({ notice: true });
            }}
          >
            How does this work?
          </span>
        </div>
        {this.state.notice ? <div className="dimmer" /> : null}
        {this.state.notice ? (
          <div className="notice">
            <Notice
              setPage={this.props.setPage}
              showComponent={(val) => {
                if (val) {
                  chrome.storage.sync.set({ notice: true });
                }
                this.setState({ notice: false });
              }}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default GreetingComponent;
