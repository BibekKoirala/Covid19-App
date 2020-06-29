import React, { Component } from 'react';
import Axios from 'axios';
import TableStyle from './Stylesheets/table.module.css'
import OneDayCountry from './OneDayCountry';
import { Link } from 'react-router-dom';


class SpecificCountry extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             countrySlug : "",
             countryDataFromDayOne: [],
             countryName : ""
        }
    }
    
    static getDerivedStateFromProps(prop,state){
        if(prop.country){
            return{
                countrySlug : prop.country 
            }
        }
        return null;
    }

    componentDidMount(){
        Axios.get(`https://api.covid19api.com/dayone/country/${this.state.countrySlug}`)
        .then(response=>{
            this.setState({
                countryDataFromDayOne : response.data,
                countryName : response.data[0].Country
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        
        const OneDay = this.state.countryDataFromDayOne.map((info , index)=>{
            return <OneDayCountry OneDayInfo = {info} day={index+1} key={info.Date.slice(0,10)}/> 
        })

        const forNepal = ()=>{
            if(this.props.country === 'nepal'){
                return <Link to="/nepal/district"><button>View By District</button></Link>
            }
        };


        return (
        <div className="App">
        <Link to="/"><button>All Countries</button></Link>
        {forNepal()}
        <br />
        <h3>Data of {this.state.countryName}</h3>
        <table className={TableStyle.table2}>
            <thead>
            <tr>
                <th className={TableStyle.tablehead}>Day</th>
                <th className={TableStyle.tablehead}>Date</th>
                <th className={TableStyle.tablehead}>ConfirmedCases</th>
                <th className={TableStyle.tablehead}>Deaths</th>
                <th className={TableStyle.tablehead}>Recovered</th>
                <th className={TableStyle.tablehead}>Active</th>
                <th className={TableStyle.tablehead}>NewCases</th>
            </tr>
            </thead> 
            {OneDay}
      </table>
      </div>
        );
    }
}

export default SpecificCountry;