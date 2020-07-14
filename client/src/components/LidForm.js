import React, { useState } from "react";
import { useForm } from "react-hook-form";
import hebData from "../data/heb.json"; 
import './LidForm.css'
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required(),
  city:yup.string().required(),
});

export default function LidForm(props) {
    const data = hebData;
    const [isMaccabi,setIsMaccabi] = useState(false);
    const [news,setNews] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:3000/lids/add',{data}).then(res=>{
            if(res.status===200)
              {
                props.setFinish(true);
              }
        }).catch((e)=>{
            console.log(e);
        })
    };
    
    return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <div className="title">
            <div style={{fontWeight:'bolder',fontSize:'1rem'}}>{data['more']}</div>
            <div style={{fontSize:'0.6rem'}}>{data['to_get']}</div>
        </div>
        <div className="form"> 
            <table>
              <tbody>
                  <tr>
                      <td><input name="name" type="text" placeholder={data['name']} ref={register}></input>
                      <input name="email" type="text" placeholder={data['email']} ref={register}></input></td>
                  </tr>
                  <tr>
                    <td><input name="phone" type="text" placeholder={data['phone']} ref={register}></input>
                    <input name="city" type="text" placeholder={data['city']} ref={register}></input></td>
                  </tr>
                  <tr>
                      <td className="tdCheckbox"><div>
                      <input
                        className="checkbox"
                        type="checkbox"
                        checked={isMaccabi}
                        onChange={(e)=>{setIsMaccabi(e.target.checked)}}
                        name="member"
                        ref={register}
                      />
                      <label className="checkboxStyle" for="maccabi">{data['maccabi']}</label>
                      </div></td>
                  </tr>
                  <tr>
                    <td className="tdCheckbox"><div>
                        <input
                          className="checkbox"
                          type="checkbox"
                          checked={news}
                          onChange={(e)=>{setNews(e.target.checked)}}
                          name="delivry"
                          ref={register}
                        />
                        <label className="checkboxStyle" for="news">{data['agree']}</label>
                        </div></td>
                  </tr>
            <tr><td>
            <button className="send" type="submit">{data['send']}</button>
            </td></tr>
            </tbody>
          </table>
      </div>
    </form>
       
    )
}
