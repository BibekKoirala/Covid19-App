import React, { Component } from 'react';
import Axios from 'axios';
import TableStyle from '../Stylesheets/table.module.css'
import {Link} from 'react-router-dom'

class forDistrict extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             districtId: 0,
             DistrictEng : "",
             DistrictNep : "",
             Province : "",
             TotalCases: 0,
             ActiveCases : 0,
             Recovered : 0,
             Deaths : 0                          
        }
    }
    
    componentDidMount(){
        Axios.get(`https://data.nepalcorona.info/api/v1/districts/${this.props.id}`)
        .then(response=>{
            this.setState({
                districtId : response.data.id,
                DistrictEng : response.data.title,
                DistrictNep : response.data.title_ne,
                Province : response.data.province,
                TotalCases : response.data.covid_summary.cases,
                ActiveCases : response.data.covid_summary.active,
                Recovered : response.data.covid_summary.recovered,
                Deaths : response.data.covid_summary.death
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {


        return (
            <tbody>
                <tr>
                <td className={TableStyle.tabledata2}><Link to= {`/nepal/district/${this.state.districtId}`}>{this.state.DistrictEng}</Link></td>
                <td className={TableStyle.tabledata2}>{this.state.DistrictNep}</td>
                <td className={TableStyle.tabledata2}>{this.state.Province}</td>
                <td className={TableStyle.tabledata2}>{this.state.TotalCases}</td>
                <td className={TableStyle.tabledata2}>{this.state.ActiveCases}</td>
                <td className={TableStyle.tabledata2}>{this.state.Deaths}</td>
                <td className={TableStyle.tabledata2}>{this.state.Recovered}</td>
                </tr>
            </tbody>
        );
    }
}

export default forDistrict;