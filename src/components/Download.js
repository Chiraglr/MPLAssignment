import React, {Component} from 'react';
import './Download.css';
import ctaandroid from '../images/cta-android.png';
// import 

class Download extends Component {
    render() {
      return (
          <div className="Download">
              {/* <button className="DownloadButton"></button> */}
              <div className="InstallDirections">Install the MPL App & Get 20 MPL Tokens Free!</div>
              <button className="DownloadButton"><img className="DownloadImage" src={ctaandroid} alt="download android app" /></button>
          </div>
      );
    }
  }

  export default Download;