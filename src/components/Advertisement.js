import React, {Component} from 'react';
import './Advertisement.css';
import Card from './Card';
import player from '../images/player.png';

class Advertisement extends Component{
    state = {
        userName: "USERNAME12345",
        freeCash: "20",
        referralCode: "ABCD12",
    }
    render(){
        const {userName, freeCash, referralCode} = this.state;
        return(
            <div className="Advertisement">
                {/* <img className="Field" src={field} alt="Invitation poster" /> */}
                <div className="InviteText">
                    <div className="UserName">{userName}</div>
                    <div className="PlayText">invited you to play Mobile Premier League!</div>
                </div>
                <Card freeCash={freeCash} referralCode={referralCode}/>
                <img className="Player" src={player} alt="player image" />
            </div>
        );
    }
}

export default Advertisement;