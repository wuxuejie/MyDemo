import * as React from 'react';
import AppleItem from './AppleItem';
import LableInput from '../../components/form/LableInput';
import { IndexProps, SampleFormData } from '../../storeType/appleBasket';
import { reduxForm } from 'redux-form';

class AppleBusket extends React.Component<IndexProps> {
    componentWillReceiveProps(nextProps: IndexProps) {
        console.log('componentWillReceiveProps')
    }
    
    render() {
        const { apples,
            isPicking,
            notEatenQuantity,
            notEatenWeight,
            EatenQuantity,
            EatenWeight,
            actions } = this.props;
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
                    {apples.map(apple => apple.isEaten ? '' :
                        <AppleItem apple={apple} eatApple={actions.eatApple} key={apple.id} />)
                    }
                    {apples.filter(p => !p.isEaten).length == 0 ?
                        <div className="empty-tip" key="empty">苹果篮子空空如也</div> : ''}
                </div>
                <div className="btn-div">
                    <LableInput name="pickingName" component={LableInput} placeholder="Name" maxLength={5} />
                    <LableInput name="pickingNumber" component={LableInput} placeholder="Number" maxLength={5} />
                    <button className={isPicking ? 'disabled' : ''} onClick={actions.pickApple} >摘苹果</button>
                </div>
            </div>
        );
    }
}

export default reduxForm<SampleFormData>({
    form: 'simple'
})(AppleBusket)
