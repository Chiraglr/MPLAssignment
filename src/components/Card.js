import React, {Component} from 'react';
import './Card.css';

class Card extends Component{
    render(){
        const {freeCash, referralCode} = this.props;
        return(
            <div className="Card">
                <div className="Text1">Get FREE Cash</div>
                <div className="Text2">₹{freeCash}</div>
                <div className="Text3">Use Referral Code</div>
                <div className="Text4">{referralCode}</div>
            </div>
        );
    }
}

export default Card;