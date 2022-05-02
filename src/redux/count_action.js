/*
* 该文件专门为reduxText 组件生成action 对象
* */
import  { DECREMENT, INCREMENT} from './constant'

export const createIncrementAction= data=> ({ type:'INCREMENT', data})

export const createDecrementAction = data=> ({ type: 'DECREMENT', data})

export const createIncrementAsyncAction = (data, time)=> {
    return ()=> {
        setTimeout(()=> {
            return ({ type: 'INCREMENT', data: data})
        },time)
    }
}