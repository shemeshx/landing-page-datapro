import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Chart from "react-apexcharts";
import axios from 'axios'
import ChartLids from './ChartLids';
export default function AdminPanel() {
    const [myData,setMyData] = useState([]);
    const [options,setOptions] = useState([]);
    const [series,setSeries] = useState([]);
    const loadData = () =>{
        axios.get('http://localhost:3000/lids/all').then((data)=>{ 
        const lids = data.data.lids
        const temp = myData;
        for(let i=0;i<lids.length;i++){
            const found = temp.find(e=>e['name']===lids[i]['city'])
            if(found && temp.length!=0){
                temp.forEach((e1)=>{
                    if(e1.name===lids[i]['city'])
                        e1['value']++;
                })
            }
            else{
                temp.push({name:lids[i]['city'],value:1});
            }
        }
        setMyData(temp)
        }).catch((e)=>{
            console.log(e.message)
        })
    }
    useEffect(()=>{
        
    },[])
    useEffect(()=>{
    },[myData])
    
    const isLogged = useSelector(state=>state.isLogged)
    
    return isLogged?
             (
            //  <Chart options={options} series={series} type="pie" width={380} />
            <ChartLids/>
            )
    :
    (
        <Redirect to="/admin" />
    )
}
