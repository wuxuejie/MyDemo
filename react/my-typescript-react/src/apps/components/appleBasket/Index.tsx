import * as React from 'react';
import AppleItem from './AppleItem';
import { Apple, IndexProps } from './type';

class AppleBusket extends React.Component<IndexProps> {
    constructor(props: IndexProps) {
        super(props);
    }
    /**
     * 计算当前已吃和未吃苹果的状态.
     * @returns {Object} status.
     * @memberof AppleBusket.
     */
    calculateStatus() {
        let status = {
            appleNow: {
                quantity: 0,
                weight: 0
            },
            appleEaten: {
                quantity: 0,
                weight: 0
            }
        };
        this.props.appleBasket.apples.forEach(apple => {
            let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
            status[selector].quantity++;
            status[selector].weight += apple.weight;
        });
        return status;
    }

    /**
     * 获取未吃苹果的组件数组.
     * @param {array} apples apples.
     * @returns {array} all.
     * @memberof AppleBusket.
     */
    getAppleItem(apples: Apple[]) {
        let data: JSX.Element[] = [], actions = this.props.actions;
        apples.forEach(apple => {
            if (!apple.isEaten) {
                data.push(<AppleItem apple={apple} eatApple={actions.eatApple} key={apple.id} />)
            }
        });

        if (!data.length) data.push(<div className="empty-tip" key="empty">苹果篮子空空如也</div>);

        return data;
    }

    render() {

        let { appleBasket, actions } = this.props;
        let { apples, isPicking } = appleBasket;
        let status = this.calculateStatus();
        let {
            appleNow: { quantity: notEatenQuantity, weight: notEatenWeight },
            appleEaten: { quantity: EatenQuantity, weight: EatenWeight }
        } = status;


        return (
            <div className='appleBasket'>
                <div className="title">苹果篮子</div>

                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">{notEatenQuantity}个苹果，{notEatenWeight}克
                        </div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">{EatenQuantity}个苹果，{EatenWeight}克</div>
                    </div>
                </div>

                <div className="appleList">
                    {this.getAppleItem(apples)}
                </div>

                <div className="btn-div">
                    <button className={isPicking ? 'disabled' : ''} onClick={actions.pickApple} >摘苹果</button>
                </div>
            </div>
        );
    }
}
export default AppleBusket;