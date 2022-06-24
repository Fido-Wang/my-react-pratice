import axios from 'axios'

const request = axios.create({
    baseURL: "https://restapi.amap.com/v3/place/text?parameters",
})

axios.interceptors.response.use(res =>{
    return res.data
},err =>{
    if(err && err.response){
        switch (err.response.status){
            case 400:
                console.log('请求错误')
                break;
            case 401:
                console.log('未授权访问')
                break
            default:
                console.log('其他错误信息')
        }
    }
    return err
})

export default request