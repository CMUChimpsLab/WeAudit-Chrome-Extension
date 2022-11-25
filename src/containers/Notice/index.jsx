import React, { Component } from 'react';
import './index.css';

class Notice extends Component {
  state = { checked: false };

  handleChange = () => {
    console.log(this.state.checked);
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div className="e6175_25399">
        <div className="e6175_25284" />
        <div
          className="e6175_25285"
          onClick={() => {
            this.props.showComponent(this.state.checked);
          }}
        >
          <span className="e6175_25286">Start auditing</span>
        </div>
        <div className="e6175_25287">
          <span className="e6175_25288">1</span>
        </div>
        <div className="e6175_25289">
          <span className="e6175_25290">2</span>
        </div>
        <div className="e6175_25291">
          <span className="e6175_25292">3</span>
        </div>
        <span className="e6175_25293">How to audit</span>
        <div
          className="e6175_25294"
          onClick={() => {
            this.props.showComponent(this.state.checked);
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.9825 3.03687C13.4788 2.54052 13.4788 1.73579 12.9825 1.23945C12.4861 0.743101 11.6814 0.743101 11.185 1.23945L6.78815 5.63633L2.8147 1.66288C2.31836 1.16654 1.51362 1.16654 1.01728 1.66288C0.520933 2.15923 0.520933 2.96396 1.01728 3.4603L4.99073 7.43376L1.01728 11.4072C0.520933 11.9036 0.520933 12.7083 1.01728 13.2046C1.51362 13.701 2.31836 13.701 2.8147 13.2046L6.78815 9.23118L11.185 13.6281C11.6814 14.1244 12.4861 14.1244 12.9825 13.6281C13.4788 13.1317 13.4788 12.327 12.9825 11.8306L8.58558 7.43376L12.9825 3.03687Z"
              fill="black"
            />
          </svg>
        </div>
        <span className="e6175_25297">
          Press the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; icon to copy the search
          phrase to your clipboard and search for it on Google.
        </span>
        <span className="e6175_25298">
          If you suspect the search result might be considered discriminatory or
          biased to anyone, fill out the form to report.
        </span>
        <span className="e6175_25299">
          Submit the screenshot along with the context of what you're seeing and
          why you think it might be discriminatory or biased.
        </span>
        <div className="e6175_25300">
          {' '}
          {/*copy*/}
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.61402 1.59035C1.71257 1.47209 1.81507 1.43864 1.88735 1.43864H7.14351C7.2158 1.43864 7.3183 1.47209 7.41684 1.59035C7.51858 1.71243 7.59223 1.90188 7.59223 2.12096V2.82178C7.59223 3.21905 7.91428 3.5411 8.31155 3.5411C8.70882 3.5411 9.03087 3.21905 9.03087 2.82178V2.12096C9.03087 1.59656 8.8584 1.07299 8.52203 0.669353C8.18248 0.261889 7.69079 0 7.14351 0H1.88735C1.34007 0 0.848386 0.261888 0.508832 0.669353C0.172467 1.07299 0 1.59656 0 2.12096V8.42835C0 8.95275 0.172467 9.47632 0.508832 9.87996C0.848386 10.2874 1.34007 10.5493 1.88735 10.5493H2.47137C2.86864 10.5493 3.19069 10.2273 3.19069 9.82999C3.19069 9.43273 2.86864 9.11068 2.47137 9.11068H1.88735C1.81507 9.11068 1.71257 9.07722 1.61402 8.95897C1.51229 8.83689 1.43864 8.64743 1.43864 8.42835V2.12096C1.43864 1.90188 1.51229 1.71242 1.61402 1.59035ZM5.52693 7.02709C5.52693 6.52188 5.84505 6.34477 5.97564 6.34477H11.2318C11.3624 6.34477 11.6805 6.52188 11.6805 7.02709V13.3345C11.6805 13.8397 11.3624 14.0168 11.2318 14.0168H5.97564C5.84505 14.0168 5.52693 13.8397 5.52693 13.3345V7.02709ZM5.97564 4.90613C4.81606 4.90613 4.08829 5.98409 4.08829 7.02709V13.3345C4.08829 14.3775 4.81606 15.4554 5.97564 15.4554H11.2318C12.3914 15.4554 13.1192 14.3775 13.1192 13.3345V7.02709C13.1192 5.98409 12.3914 4.90613 11.2318 4.90613H5.97564Z"
              fill="#222222"
            />
          </svg>
        </div>
        <div className="e6175_25303" />
        <div className="e6175_25304" />
        <div className="e6175_25305" />
        <div className="e6175_25306">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="11.5"
              stroke="#19835D"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        <span className="e6175_25307">
          <svg
            width="17"
            height="25"
            viewBox="0 0 17 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6175_25307)">
              <path
                d="M12.7969 13.3906C13.3828 13.3906 13.7344 12.6094 13.2656 12.1406L2.17188 0.734375C1.74219 0.265625 1 0.578125 1 1.24219V18C1 18.625 1.70312 18.9766 2.17188 18.5078L5.53125 15.0312L7.60156 20.0703C7.75781 20.4219 8.1875 20.6172 8.53906 20.4609L10.4531 19.6406C10.8047 19.4844 10.9609 19.0547 10.8047 18.7031L8.65625 13.3906H12.7969Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_6175_25307"
                x="0"
                y="0.265625"
                width="16.7344"
                height="24.3516"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_6175_25307"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_6175_25307"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <div className="e6175_25308" />
        <span className="e6175_25309">Do not show this again</span>
        <div className="e6175_25310">
          <input
            className="checkbox"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
        </div>
        <div className="e6175_25311" />
        <span className="e6175_25312">
          <svg
            width="17"
            height="25"
            viewBox="0 0 17 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6175_25307)">
              <path
                d="M12.7969 13.3906C13.3828 13.3906 13.7344 12.6094 13.2656 12.1406L2.17188 0.734375C1.74219 0.265625 1 0.578125 1 1.24219V18C1 18.625 1.70312 18.9766 2.17188 18.5078L5.53125 15.0312L7.60156 20.0703C7.75781 20.4219 8.1875 20.6172 8.53906 20.4609L10.4531 19.6406C10.8047 19.4844 10.9609 19.0547 10.8047 18.7031L8.65625 13.3906H12.7969Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_6175_25307"
                x="0"
                y="0.265625"
                width="16.7344"
                height="24.3516"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_6175_25307"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_6175_25307"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span
          className="e6175_25313"
          onClick={() => {
            this.props.setPage('Learn');
          }}
        >
          Learn more about the Dall-E Project
        </span>
      </div>
    );
  }
}

export default Notice;
