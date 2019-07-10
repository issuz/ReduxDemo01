import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 改变this指向
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    // 订阅模式 - start
    // 当使用 value={this.state.inputValue} 时，【必须】增加订阅模式，否则报错
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
    // 订阅模式 - end
  }
  render() { 
    return (
      <div style={{ margin:'10px' }}>
        <div>
          <Input 
            placeholder={this.state.inputValue} 
            style={{ width:'250px',marginRight:'10px'}}
            onChange={ this.changeInputValue }
            value={this.state.inputValue}
          />
          <Button 
            type='primary' 
            onClick={this.clickBtn}
          >增加</Button>
        </div>
        <div style={{ margin:'10px',width:'300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
            // renderItem={(item, index) => (<List.Item onClick={(e)=>this.deleteItem(index)}>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }

  // 订阅模式
  storeChange() {
    this.setState(store.getState())
  }

  // 更改-input框内容
  changeInputValue(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action);
  }

  // 增加
  clickBtn(){
    const action = addItemAction();
    store.dispatch(action);
  }

  // 删除
  deleteItem(index){
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}
 
export default TodoList;