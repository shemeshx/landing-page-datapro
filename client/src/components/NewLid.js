import React, { useState } from 'react'
import './newLid.css'
import hebData from "../data/heb.json"; 
import LidForm from './LidForm';
import Finish from './Finish';


export default function NewLid() {
    const [isFinish,setFinish]=useState(false);
    const data = hebData;
    return (
        <div className="page text-right">
            <div className="headerPage">
            </div>
            <div className="mainPage ">
                <div className="imgRecepie"></div>
                <div className="recepie" dir='rtl'>
                    <div className="bigtitle">{data['title']}</div>
                    <div className="text1">{data['author']}</div>
                    <div className="subtitle">{data['sub_ingrediantes']}</div>
                    {data['ingrediantes'].map((ele)=>{
                        return (
                            <span className="text1">{ele}</span>
                        )
                    })}
                    <span style={{display:"inline"}} className="subtitle">{data['sub_order']}</span>
                    <ul style={{display:"inline"}}>
                    {data['order'].map((ele)=>{
                        return (
                            <li className="text2">{ele}</li>
                        )
                    })}
                    </ul>
                    <span style={{display:"inline"}} className="subtitle">{data['sub_nut']}</span>
                    <br/>
                    <div style={{direction:'rtl'}}>
                        <ul className="list">
                        
                        {data['nut_vals'].map((ele,i)=>{
                            console.log(i)
                            return  i===data['nut_vals'].length-1?(
                                <li className="text2 horizontal empty">{ele}</li>
                            ):
                            (
                                <li className="text2 horizontal">{ele}</li>
                            );
                        })}
                        </ul>
                    </div>
                </div>
                <div className="lidForm">
                    {!isFinish && <LidForm setFinish={setFinish}/>}
                    {isFinish && <Finish/>}
                </div>
            </div>
            <div className="footerPage">
                <footer className="footerBackground">
                    <img className="MaccabiLogo" src={process.env.PUBLIC_URL + "/logo.png"} alt="maccabi logo"/>
                </footer>
            </div>
        </div>
    )
}
