import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

// 图书管理员
const defaultState = {
  inputValue: 'Write Something',
  list:[
    '11111',
    '22222',
    '33333',
    '44444',
    '55555',
  ],
};

export default (state = defaultState, action) => {
  // Reducer 里面只能接受state，不能改变state
  if (action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // 返回给 store仓库
    return newState;
  }
  if (action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue !== '') newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_ITEM){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }

  return state;
}