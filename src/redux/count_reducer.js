/*
* 该文件是用于创建一个为 countRedux 组件服务的reducer，reducer的本质就是一个函数
* reducer函数会接受到两个参数 分别为： 之前的状态（ preState） 动作对象（ action ）
* */
import { INCREMENT, DECREMENT} from './constant'
const init = 999 // 初始化状态
function countReducer(preState=init, action) {
    console.log(preState, action, '1212121')
    if(preState === undefined) preState =0
    const { type, data } = action
    switch (type) {
        case 'INCREMENT':
            return preState + data;
        case 'DECREMENT':
            return preState - data;
        default:
            return preState
    }

}

export default countReducer