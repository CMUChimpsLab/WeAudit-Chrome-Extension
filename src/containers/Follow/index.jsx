import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header';
import google_svg from './google.svg';
import netflix_svg from './netflix.svg';
import dalle_svg from './dalle.svg';
import craiyon_img from '../../components/Header/craiyon.png';

export default class Follow extends Component {
  state = {
    following: [{ name: 'Dall-E', img: dalle_svg, following: '20.4k' }],
  };
  render() {
    document.body.style.height = '580px';
    document.body.style.width = '400px';
    return (
      <div className="e5479_22547">
        <div className="e5479_22548" />
        <span className="e5479_22549">All Projects</span>
        <span className="e5479_22550">Following</span>
        <span className="e5479_22551">Report Issues</span>
        <div className="e5479_22552" />
        {this.state.following.map((obj, i) => {
          return (
            <div style={{ position: 'absolute', marginTop: 110 * i }}>
              <div className="e5479_22553">
                <div className="e5479_22554" />
              </div>
              <div className="e5479_22559">
                <span className="e5479_22560">Following </span>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="e5479_22568">{obj['following']} Auditors</span>
              <div className="e5479_22571">
                {' '}
                {/* image */}
                <img
                  style={{ width: 60, height: 60 }}
                  src={obj['img']}
                  alt={obj['name']}
                />
              </div>
              <span
                className="e5479_22574"
                onClick={() => {
                  this.props.setPage('Home');
                }}
              >
                {obj['name']}{' '}
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
                    d="M2.70898 3.79134C2.56533 3.79134 2.42755 3.84841 2.32597 3.94999C2.22439 4.05157 2.16732 4.18935 2.16732 4.33301V10.2913C2.16732 10.435 2.22439 10.5728 2.32597 10.6744C2.42755 10.7759 2.56533 10.833 2.70898 10.833H8.66732C8.81098 10.833 8.94875 10.7759 9.05033 10.6744C9.15192 10.5728 9.20899 10.435 9.20899 10.2913V7.04134C9.20899 6.74219 9.4515 6.49967 9.75065 6.49967C10.0498 6.49967 10.2923 6.74219 10.2923 7.04134V10.2913C10.2923 10.7223 10.1211 11.1356 9.81637 11.4404C9.51162 11.7451 9.0983 11.9163 8.66732 11.9163H2.70898C2.27801 11.9163 1.86468 11.7451 1.55994 11.4404C1.25519 11.1356 1.08398 10.7223 1.08398 10.2913V4.33301C1.08398 3.90203 1.25519 3.48871 1.55994 3.18396C1.86468 2.87921 2.27801 2.70801 2.70898 2.70801H5.95899C6.25814 2.70801 6.50065 2.95052 6.50065 3.24967C6.50065 3.54883 6.25814 3.79134 5.95899 3.79134H2.70898Z"
                    fill="#222222"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.58398 1.62467C7.58398 1.32552 7.8265 1.08301 8.12565 1.08301H11.3757C11.6748 1.08301 11.9173 1.32552 11.9173 1.62467V4.87467C11.9173 5.17383 11.6748 5.41634 11.3757 5.41634C11.0765 5.41634 10.834 5.17383 10.834 4.87467V2.16634H8.12565C7.8265 2.16634 7.58398 1.92383 7.58398 1.62467Z"
                    fill="#222222"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.758 1.24166C11.9696 1.45319 11.9696 1.79616 11.758 2.00769L5.79968 7.96602C5.58815 8.17756 5.24518 8.17756 5.03365 7.96602C4.82212 7.75449 4.82212 7.41153 5.03365 7.19999L10.992 1.24166C11.2035 1.03012 11.5465 1.03012 11.758 1.24166Z"
                    fill="#222222"
                  />
                </svg>
              </span>
              <div className="e5479_22589">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5 2.49976C7.5 3.88065 6.38066 5 4.99976 5C3.61934 5 2.5 3.88065 2.5 2.49976C2.5 1.11934 3.61934 0 4.99976 0C6.38066 0 7.5 1.11934 7.5 2.49976ZM10 8.61093V10H0V8.61093C0 7.87448 0.263433 7.16771 0.732191 6.64687C1.20095 6.12604 1.83705 5.83333 2.49987 5.83333H7.50013C8.16295 5.83333 8.79905 6.12604 9.26781 6.64687C9.73657 7.16771 10 7.87448 10 8.61093Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </div>
            </div>
          );
        })}
        <div className="e5479_22600">
          <Header setPage={this.props.setPage} lower={true} />
        </div>
      </div>
    );
  }
}
