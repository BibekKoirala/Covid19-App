import React, { Component } from 'react';
import TableStyle from './Stylesheets/table.module.css'
import { Link } from 'react-router-dom';

class Country extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             inGreenZone : false
        }
    }

    componentDidMount(){
        const TotalConfirmed = this.props.countryData.TotalConfirmed,
         TotalDeaths = this.props.countryData.TotalDeaths,
         TotalRecovered = this.props.countryData.TotalRecovered;

         if(TotalConfirmed === TotalDeaths + TotalRecovered){
            this.setState({
                inGreenZone : true
            })
        }
         
    }
    

    render() {

        const Country = this.props.countryData.Country  ,
         NewConfirmed = this.props.countryData.NewConfirmed , 
         NewDeaths = this.props.countryData.NewDeaths,
         NewRecovered = this.props.countryData.NewRecovered, 
         TotalConfirmed = this.props.countryData.TotalConfirmed,
         TotalDeaths = this.props.countryData.TotalDeaths,
         TotalRecovered = this.props.countryData.TotalRecovered,
         CountrySlug = this.props.countryData.Slug;

         

        return (
            <tbody>
             <tr>
                 <td className={ this.state.inGreenZone?TableStyle.tabledatagreen:TableStyle.tabledata}><Link to={'/'+CountrySlug}>{Country}</Link></td>
                 <td className={ this.state.inGreenZone?TableStyle.tabledatagreen:TableStyle.tabledata}>{NewConfirmed}</td>
                 <td className={ this.state.inGreenZone?TableStyle.tabledatagreen:TableStyle.tabledata}>{NewDeaths}</td>
                 <td className={ this.state.inGreenZone?TableStyle.tabledatagreen:TableStyle.tabledata}>{NewRecovered}</td>
                 <td className={ this.state.inGreenZone?TableStyle.tabledatagreen:TableStyle.tabledata}>{TotalConfirmed}</td>
                 <td className={ this.state.inGreenZone?TableStyle.tabledatagreen:TableStyle.tabledata}>{TotalDeaths}</td>
                 <td className={ this.state.inGreenZone?TableStyle.tabledatagreen:TableStyle.tabledata}>{TotalRecovered}</td>
             </tr>   
            </tbody>
        );
    }
}

export default Country;