import React, {Component} from 'react';
import { useParams } from 'react-router-dom'
import { getValueById, getDataList } from './data'

export default function MessageDetail (){
    const params = useParams()
    console.log(params)
     let result = getValueById( parseInt(params.id, 10))
    console.log(result)
    return (
            <ul>
                {/*<li>{ result }</li>*/}
                <li>id: { result.id }</li>
                <li>{ result.title }</li>
                <li>{ result.content }</li>
                {
                    // this.dataArr.filter(item=> {
                    //     return
                    // })
                }
            </ul>
        );
}
