import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Container,Row,Col,Button} from 'react-bootstrap'
import ChartLids from './ChartLids';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Axios from 'axios';

export default function AdminPanel() {

    const isLogged = useSelector(state=>state.isLogged)
    const [lids,setLids] = useState([{name:"",email:"",phone:"",city:""}])

    function onAfterSaveCell(row, cellName, cellValue) {
        Axios.post('http://localhost:3000/lids/edit',{lids:lids})
            .then((res)=>{
                LoadData();
            }).catch((e)=>{console.log(e.message);})
    }
      
    function onBeforeSaveCell(row, cellName, cellValue) {
        // You can do any validation on here for editing value,
        // return false for reject the editing
        return true;
    }

    const cellEditProp = {
        mode: 'click',
        blurToSave: true,
        beforeSaveCell: onBeforeSaveCell, 
        afterSaveCell: onAfterSaveCell  
      }; 
    const LoadData=()=>{
        Axios.get('http://localhost:3000/lids/all')
        .then((res)=>{
            setLids(res.data.lids);
        }).catch((e)=>{console.log(e.message);})
    }
    useEffect(()=>{
        
        LoadData();
    },[])
    useEffect(()=>{},[lids])
    return isLogged?
             (
                <Container>
                    <Row>
                        <Col><ChartLids/></Col>
                        <Col>
                        <BootstrapTable data={ lids } cellEdit={ cellEditProp }>
                            <TableHeaderColumn dataField='name' >Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='email' isKey>Email</TableHeaderColumn>
                            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
                            <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
                         </BootstrapTable>
                        </Col>
                    </Row>   
                </Container>
            )
    :
    (
        <Redirect to="/admin" />
    )
}
