import React, {Component} from 'react'
import './index.css'
import AMapLoader from '@amap/amap-jsapi-loader';
import { holeList } from './data'
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
// import axios from 'axios'
import request  from './api'


class Amap extends Component{
    state = {
        dataList: []
    }
    // 2.dom渲染成功后进行map对象的创建
    componentDidMount(){
        window._AMapSecurityConfig = { securityJsCode: '0295a40cdfa87f135af49203300acc42' };
        AMapLoader.load({
            key:"adf74d4d0b2c6ba04589f1e79183c3e4",                     // 申请好的Web端开发者Key，首次调用 load 时必填
            version:"2.0",              // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins:['AMap.AutoComplete'],               // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap)=>{
            this.map = new AMap.Map("amapContainer",{ //设置地图容器id
                viewMode:"3D",         //是否为3D地图模式
                zoom:12,                //初始化地图级别
                center:[119.614192, 30.626411], //初始化地图中心点位置
                mapStyle: "amap://styles/c6d24a1278128af5853718598c0cf48e"
            });
            // 地图添加点
            let markerList = []
            holeList.forEach(item=> {
                let marker = new AMap.Marker({
                    position: [item.lng, item.lat],
                    offset: new AMap.Pixel(0,0)
                })
                markerList.push(marker)
            })
            this.map.add(markerList)

            // 添加搜索插件
            this.map.plugin(['AMap.AutoComplete','AMap.PlaceSearch'],function(){
                var autoOptions = {
                    // 城市，默认全国
                    city: "北京",
                    // 使用联想输入的input的id
                    input: "B000A83U0P"
                }
                var autocomplete= new AMap.AutoComplete(autoOptions)

                var placeSearch = new AMap.PlaceSearch({
                    city:'北京',
                    map: this.map
                })
                autocomplete.on('select', function(e){
                    // TODO 针对选中的poi实现自己的功能
                    placeSearch.search(e.poi.name)
                })
            })
        }).catch(e=>{
            console.log(e);
        })
    }
    // 搜索按钮
    onSearch= (value)=> {
        console.log(value)
        request({
            url: 'https://restapi.amap.com/v3/place/text?parameters',
            params: {
                key: '3e048f55eda37fb4a0f694bda76f162c',
                keywords: value,
                types: '',
                city: 'city',
                page: 1,
                offset: 20,

            }
        }).then(res=> {
            console.log('res',res)
            this.state.dataList = res.data.pois[0]
        })
    }
    render() {
        const { Search } = Input;
        // const onSearch = (value) => console.log(value);
        const { pname } = this.state.dataList
        return (
            <div className="amap-box">
                <div class="components">
                    <Search className="input" placeholder="input search text" onSearch={ this.onSearch } />
                </div>
                {/*<div>*/}
                {/*    <ul>*/}
                {/*        <li></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div id="amapContainer"></div>
            </div>
        )
    }
}

export default Amap