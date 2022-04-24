import React, {Component} from 'react';
import { useParams } from 'react-router-dom'

export default function MessageDetail (){
    const params = useParams()
        console.log(params)
        return (
            <ul>
                <li>id: { params.id }</li>
                <li>TITLE:MESSAGE1</li>
                <li>CONTENT: 我爱你中国</li>
            </ul>
        );
}
