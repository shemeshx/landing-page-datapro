import React,{useEffect, useState} from 'react'
import {Form,Button, Row,Col} from 'react-bootstrap'
import './adminLogin.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'
export default function AdminLogin(props) {
    const{register,handleSubmit} = useForm();
    const dispatch = useDispatch(props);
    const isLogged = useSelector(state=>state.isLogged)
    const [myData,setMyData] = useState([]);
    const onSubmit = (data) =>{
        axios.post('http://localhost:3000/login',{username:data.username,password:data.password}).then((res)=>{ 
        if(res.status===200){
            dispatch({type:'SET_USER',payload:{isLogged:true}})
        }
        else{
            alert('Error');
        }
        }).catch((e)=>{
            alert('Error'+e.message);
        })
    }
    

    
    useEffect(()=>{
        dispatch({type:'SET_USER',payload:{isLogged:false}})
    },[])
    
    return !isLogged?(
        <div style={{position:'absolute',width:'50%',justifyContent:'center',top:'30%',left:'50%',transform:'translate(-50%,0)'}}>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control name="username" placeholder="Enter Username" ref={register}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control name="password" type="password" placeholder="Enter Password" ref={register}/>
                </Col>
            </Form.Group>
            <Button block size="lg" type="submit">Enter</Button>
        </Form>
        </div>
    ):
    (
        <Redirect to={{pathname:"/admin/dashboard",state:{data:myData}}} />
    )
}
