import React from 'react'
import './finish.css'
import hebData from "../data/heb.json"; 
export default function Finish() {
    const data = hebData;
    return (
        <div className="finish">
           <img src="v.png" alt="V"/>
           <div className="blessing">{data['thanks'].map((ele)=>{
               return (<span>{ele}</span>)
           })}</div> 
        </div>
    )
}
