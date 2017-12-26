import * as React from 'react';
import { AppleItemProps } from '../../storeType/appleBasket';

const applepng = require('../../static/images/apple.png');

class AppleItem extends React.Component<AppleItemProps> {
    render() {
        let { apple, eatApple } = this.props;

        return (
            <div className="appleItem">
                <div className="apple"><img src={applepng} alt="" /></div>
                <div className="info">
                    <div className="name">红苹果 - {apple.id}号</div>
                    <div className="weight">{apple.weight}克</div>
                </div>
                <div className="btn-div">
                    <button onClick={eatApple.bind(this, apple.id)}> 吃掉 </button>
                </div>
            </div>
        );
    }
}

export default AppleItem;