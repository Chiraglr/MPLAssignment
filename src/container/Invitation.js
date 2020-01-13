import React, {Component} from 'react';
import './Invitation.css';
import Download from '../components/Download.js'
import Advertisement from '../components/Advertisement';

class Invitation extends Component {
    render() {
      return (
          <div className="Invitation">
            <Advertisement />
            <Download />
          </div>
      );
    }
  }

  export default Invitation;