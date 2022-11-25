import React, { Component } from 'react';
import './index.css';

class TagInput extends Component {
  state = {
    checkbox: {
      Race: false,
      Religion: false,
      Gender: false,
      Age: false,
      Ethnicity: false,
      Other: false,
    },
    open: true,
    label: '',
    search: '',
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.checkbox &&
      JSON.stringify(prevProps.checkbox) !== JSON.stringify(this.props.checkbox)
    ) {
      this.setState({ checkbox: this.props.checkbox });
    }
  }

  render() {
    let filt = Object.keys(this.state.checkbox).filter((val) => {
      return this.state.checkbox[val];
    });
    if (this.state.open) {
      return (
        <div className="e6399_24572">
          <div className="e6175_25022">
            {' '}
            {/* box */}
            <div style={{ minHeight: '40px' }}>
              {filt.length === 0 ? (
                <div
                  style={{ width: '100%', zIndex: 2 }}
                  onClick={() => {
                    this.setState({ open: !this.state.open });
                  }}
                >
                  <span className="e5479_24735">Add tags...</span>
                </div>
              ) : (
                filt.map((key, index) => {
                  return (
                    <div className="e6175_25023" key={key}>
                      <span className="e6175_25024">{key}</span>
                      <div className="e6175_25025">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ zIndex: 0 }}
                          onClick={() => {
                            let obj = this.state.checkbox;
                            obj[key] = !obj[key];
                            this.props.setAnswer(obj);
                            this.setState({ checkbox: obj });
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.2364 1.98686C9.58787 1.64672 9.58787 1.09524 9.2364 0.755105C8.88492 0.414965 8.31508 0.414965 7.9636 0.755105L4.85006 3.76827L2.0364 1.04532C1.68492 0.705184 1.11508 0.705184 0.763604 1.04532C0.412132 1.38546 0.412132 1.93694 0.763604 2.27708L3.57726 5.00002L0.763604 7.72297C0.412132 8.06311 0.412132 8.61458 0.763604 8.95472C1.11508 9.29486 1.68492 9.29486 2.0364 8.95472L4.85006 6.23178L7.9636 9.24494C8.31508 9.58508 8.88492 9.58508 9.2364 9.24494C9.58787 8.9048 9.58787 8.35332 9.2364 8.01318L6.12285 5.00002L9.2364 1.98686Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="e6175_25033" />
            <div className="e6175_25060">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
                  fill="black"
                />
              </svg>
            </div>
            <input
              className="e6175_25062"
              placeholder="Search..."
              value={this.state.search}
              onChange={(event) => {
                this.setState({ search: event.target.value });
              }}
            ></input>
            <div className="e6175_25034" />
            <div className="e6175_25040">
              <input
                className="e6175_25041"
                placeholder="Add your own label..."
                value={this.state.label}
                onChange={(event) => {
                  this.setState({ label: event.target.value });
                }}
              ></input>
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ zIndex: 0 }}
                onClick={() => {
                  if (this.state.label) {
                    let obj = this.state.checkbox;
                    obj[this.state.label] = true;
                    this.props.setAnswer(obj);
                    this.setState({ label: '', checkbox: obj });
                  }
                }}
              >
                <path
                  d="M13.1876 7.42857H7.58786V13H5.72129V7.42857H0.121582V5.57143H5.72129V0H7.58786V5.57143H13.1876V7.42857Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
            {Object.keys(this.state.checkbox)
              .filter((val) => {
                return (
                  !this.state.search ||
                  val.toLowerCase().startsWith(this.state.search.toLowerCase())
                );
              })
              .map((key, index) => {
                return !this.state.checkbox[key] ? (
                  <div
                    key={key}
                    className="e6175_25035"
                    style={{ zIndex: 0 }}
                    onClick={() => {
                      let obj = this.state.checkbox;
                      obj[key] = !obj[key];
                      this.props.setAnswer(obj);
                      this.setState({ checkbox: obj });
                    }}
                  >
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5172 3.66667V15.3333H3.79134V3.66667H15.5172ZM15.5172 2H3.79134C2.87002 2 2.11621 2.75 2.11621 3.66667V15.3333C2.11621 16.25 2.87002 17 3.79134 17H15.5172C16.4385 17 17.1924 16.25 17.1924 15.3333V3.66667C17.1924 2.75 16.4385 2 15.5172 2Z"
                        fill="#A4ACA8"
                      />
                    </svg>
                    <span className="e6175_25039">{key}</span>
                  </div>
                ) : (
                  <div
                    key={key}
                    className="e6175_25035"
                    style={{ zIndex: 0 }}
                    onClick={() => {
                      let obj = this.state.checkbox;
                      obj[key] = !obj[key];
                      this.props.setAnswer(obj);
                      this.setState({ checkbox: obj });
                    }}
                  >
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1179 2.375H3.97833C3.09512 2.375 2.38696 3.0875 2.38696 3.95833V15.0417C2.38696 15.9125 3.09512 16.625 3.97833 16.625H15.1179C16.0011 16.625 16.7093 15.9125 16.7093 15.0417V3.95833C16.7093 3.0875 16.0011 2.375 15.1179 2.375ZM7.95676 13.4583L3.97833 9.5L5.10025 8.38375L7.95676 11.2179L13.996 5.20917L15.1179 6.33333L7.95676 13.4583Z"
                        fill="#10724F"
                      />
                    </svg>
                    <span className="e6175_25039">{key}</span>
                  </div>
                );
              })}
            <div className="e6175_25061">
              <svg
                style={{ transform: 'rotate(0deg)', zIndex: 0 }}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  this.setState({ open: false });
                }}
              >
                <path
                  d="M9.47208 5.75977L4.73604 0.000506458L0 5.75977L9.47208 5.75977Z"
                  fill="black"
                />
              </svg>
            </div>
            <div style={{ height: '15px', position: 'relative' }} />
          </div>
        </div>
      );
    }
    if (filt.length === 0) {
      return (
        <div className="e6399_24572">
          <div className="e6175_25022">
            <div
              style={{ minHeight: '40px', width: '100%', zIndex: 2 }}
              onClick={() => {
                this.setState({ open: !this.state.open });
              }}
            >
              <span className="e5479_24735">Add tags...</span>
            </div>
            <div className="e6175_25061">
              <svg
                style={{ transform: 'rotate(180deg)', zIndex: 0 }}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  this.setState({ open: true });
                }}
              >
                <path
                  d="M9.47208 5.75977L4.73604 0.000506458L0 5.75977L9.47208 5.75977Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="e6399_24572">
        <div className="e6175_25022">
          <div style={{ minHeight: '40px', width: '100%' }}>
            {filt.map((key, index) => {
              return (
                <div className="e6175_25023" key={key}>
                  <span className="e6175_25024">{key}</span>
                  <div className="e6175_25025">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ zIndex: 0 }}
                      onClick={() => {
                        let obj = this.state.checkbox;
                        obj[key] = !obj[key];
                        this.props.setAnswer(obj);
                        this.setState({ checkbox: obj });
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.2364 1.98686C9.58787 1.64672 9.58787 1.09524 9.2364 0.755105C8.88492 0.414965 8.31508 0.414965 7.9636 0.755105L4.85006 3.76827L2.0364 1.04532C1.68492 0.705184 1.11508 0.705184 0.763604 1.04532C0.412132 1.38546 0.412132 1.93694 0.763604 2.27708L3.57726 5.00002L0.763604 7.72297C0.412132 8.06311 0.412132 8.61458 0.763604 8.95472C1.11508 9.29486 1.68492 9.29486 2.0364 8.95472L4.85006 6.23178L7.9636 9.24494C8.31508 9.58508 8.88492 9.58508 9.2364 9.24494C9.58787 8.9048 9.58787 8.35332 9.2364 8.01318L6.12285 5.00002L9.2364 1.98686Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="e6175_25061">
            <svg
              style={{ transform: 'rotate(180deg)', zIndex: 0 }}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                this.setState({ open: true });
              }}
            >
              <path
                d="M9.47208 5.75977L4.73604 0.000506458L0 5.75977L9.47208 5.75977Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
export default TagInput;
