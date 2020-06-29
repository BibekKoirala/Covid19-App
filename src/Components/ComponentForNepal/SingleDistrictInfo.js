import React, { Component } from 'react';
import TableStyle from '../Stylesheets/table.module.css'
import Axios from 'axios';
import DataOfIndividuals from './DataOfIndividuals';

class SingleDistrictInfo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             districtName : "",
             covidCases : [],
             municipality : []
        }
    }
    
    componentDidMount(){
        Axios.get(`https://data.nepalcorona.info/api/v1/districts/${this.props.districtId}`)
        .then(response=>{
            this.setState({
                districtName: response.data.title,
                covidCases : response.data.covid_cases,
                municipality: response.data.municipalities
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {

        const IndividualData = this.state.covidCases.map((value, index)=>{
            const len = this.state.covidCases.length 
            for (let index = 0; index < len; index++) {
                if(value.municipality === this.state.municipality[index].id){
                    return <DataOfIndividuals District={this.state.districtName}
                    MunEng={this.state.municipality[index].title}
                    MunNep={this.state.municipality[index].title_ne}
                    covidInfo={value} />
                }
            }
        })

        return (
            <div className="App">
              <h4>More Info of Individuals of {this.state.districtName}</h4>  
               <table className={TableStyle.table}>
                <thead>
                <tr>
                    <th className={TableStyle.tablehead}>Municipality</th>
                    <th className={TableStyle.tablehead}>नगरपालिका</th>
                    <th className={TableStyle.tablehead}>Reported On</th>
                    <th className={TableStyle.tablehead}>Status</th>
                    <th className={TableStyle.tablehead}>Gender</th>
                    <th className={TableStyle.tablehead}>Age</th>
                    <th className={TableStyle.tablehead}>Recovered On</th>
                    <th className={TableStyle.tablehead}>Death On</th>
                </tr>
                </thead> 
                    {IndividualData}
                </table>
            </div>
        );
    }
}

export default SingleDistrictInfo;