import React, { Component } from 'react';
import TableStyle from '../Stylesheets/table.module.css'
import Axios from 'axios';
import DataOfIndividuals from './DataOfIndividuals';
import { Link } from 'react-router-dom';
import FilterIndividuals from '../FilterIndividuals';

class SingleDistrictInfo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             districtName : "",
             covidCases : [],
             permanentData : [],
             municipality : []
        }
    }
    
    componentDidMount(){
        Axios.get(`https://data.nepalcorona.info/api/v1/districts/${this.props.districtId}`)
        .then(response=>{
            this.setState({
                districtName: response.data.title,
                covidCases : response.data.covid_cases,
                permanentData : response.data.covid_cases,
                municipality: response.data.municipalities
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    filterByGender=(gender)=>{
        var newList =[]
        this.setState({
        covidCases : this.state.permanentData
        },()=>{
        newList = this.state.covidCases.filter((cas)=>{
            if(gender === "both"){
                return true
            }
            else if(cas.gender === null){
                return true
            }
            else{
            return cas.gender.toLowerCase() === gender
            }
        })
        this.setState({
            covidCases : newList
        })
        })
    }

    filterByStatus=(status)=>{
        var newList =[]
        this.setState({
        covidCases : this.state.permanentData
        },()=>{
        newList = this.state.covidCases.filter((cas)=>{
            if(status === "All Cases"){
                return true
            }
            else if(cas.currentState === null){
                return true
            }
            else{
            return cas.currentState.toLowerCase() === status
            }
        })
        this.setState({
            covidCases : newList
        })
        })
    }

    render() {

        const IndividualData = this.state.covidCases.map((value,ind)=>{
            const len = this.state.covidCases.length 
            for (let index = 0; index < len; index++) {
                if(value.municipality === this.state.municipality[index].id){
                    return <DataOfIndividuals District={this.state.districtName}
                    MunEng={this.state.municipality[index].title}
                    MunNep={this.state.municipality[index].title_ne}
                    covidInfo={value} key={ind} />
                }
            }
            return null;
        })

        return (
            <div className="App">
                <Link to="/nepal/district" ><button>All Districts</button></Link>
                <Link to="/" ><button>All Country</button></Link>
              <h4>More Info of Individuals of {this.state.districtName}</h4>  
              <FilterIndividuals filterByGender = {this.filterByGender}
               filterByStatus = {this.filterByStatus} />
              <br />
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