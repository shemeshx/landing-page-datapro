import React, { Component } from 'react'
import Chart from "react-apexcharts";
import axios from 'axios'

export default class ChartLids extends Component {
    constructor(props) {
        super(props);

        this.state = {
          data:[],
          series: [],
          options: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: [],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        
        };
      }

       loadData(){
        axios.get('http://localhost:3000/lids/all').then((data)=>{ 
        const lids = data.data.lids
        let temp = []
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
        let options = {...this.state.options}
        options.labels = temp.map(e=>e.name)
        let series = temp.map(e=>e.value)
        this.setState({options,series})
        
        }).catch((e)=>{
            console.log(e.message)
        })
    }
    componentDidMount(){
        this.loadData();
    }
      render() {
        
        return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
        </div>
        );
      }
}
