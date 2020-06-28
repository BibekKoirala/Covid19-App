import React from 'react';
import '../App.css';
import TotalInfo from './TotalInfo';
import Axios from 'axios';
import Country from './Country';
import TableStyle from './Stylesheets/table.module.css'
import SearchBar from './SearchBar';


class AllCountryData extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       forWorld : {},
       forEachCountry : [],
       permanentData : []
    }
  }

  filterByCountry=(letters)=>{

    var newList =[]
    this.setState({
      forEachCountry : this.state.permanentData
    },()=>{
      newList = this.state.forEachCountry.filter((country)=>{
        return country.Country.includes(letters)
      })
      this.setState({
        forEachCountry : newList
      })
    })
  }
    
  componentDidMount(){
    Axios.get('https://api.covid19api.com/summary')
    .then(response=>{
      this.setState({
        forWorld : response.data.Global,
        forEachCountry : response.data.Countries,
        permanentData : response.data.Countries
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }

  render() {

    const countryList = this.state.forEachCountry.map((country)=>{
      return <Country key={country.CountryCode} countryData = {country} />
    })
    return (
      <div className="App">

      <TotalInfo data = {this.state.forWorld}/>
      <br />
      <SearchBar search = { this.filterByCountry } />
      <br />
      <table className={TableStyle.table}>
      <thead>
      <tr>
        <th className={TableStyle.tablehead}>Country</th>
        <th className={TableStyle.tablehead}>NewConfirmed</th>
        <th className={TableStyle.tablehead}>NewDeaths</th>
        <th className={TableStyle.tablehead}>NewRecovered</th>
        <th className={TableStyle.tablehead}>TotalConfirmed</th>
        <th className={TableStyle.tablehead}>TotalDeaths</th>
        <th className={TableStyle.tablehead}>TotalRecovered</th>
      </tr>
      </thead> 
        {countryList}
      </table>
    </div>
    );
  }
}

export default AllCountryData;