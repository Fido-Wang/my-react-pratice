/*
* 该文件专门为reduxText 组件生成action 对象
* */
import  { DECREMENT, INCREMENT} from './constant'

// function createIncrementAction(data) {
//     return { type: 'increment', data: data}
// }

export const createIncrementAction= data=> ({ type:'INCREMENT', data})

export const createDecrementAction = data=> ({ type: 'DECREMENT', data})