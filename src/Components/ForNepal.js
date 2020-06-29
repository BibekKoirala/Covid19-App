import React, { Component } from 'react';
import Axios from 'axios';
import TableStyle from './Stylesheets/table.module.css'
import ForDistrict from './ComponentForNepal/ForDistrict'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class ForNepal extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             allDistrictData : [],
             permanentData : []
        }
    }

    componentDidMount(){
        Axios.get('https://data.nepalcorona.info/api/v1/districts')
        .then(response=>{
            const list=response.data;
            const len = list.length;
            var temp;
            for (let index = 0; index < len-1; index++) {
                for (let i = 0; i < len-1; i++) {
                    if(list[i].province > list[i+1].province){
                        temp=list[i];
                        list[i]=list[i+1];
                        list[i+1]=temp;
                    }
                    else if(list[i].province === list[i+1].province){
                        if(list[i].id > list[i+1].id){
                            temp=list[i];
                            list[i]=list[i+1];
                            list[i+1]=temp;
                        }
                    }                    
                }               
            }

            this.setState({
                allDistrictData : list,
                permanentData : list
            });
        })
        .catch(error=>{
            console.log(error)
        })
    }

    filterByDistrict=(letters)=>{
        var newList =[]
        this.setState({
          allDistrictData : this.state.permanentData
        },()=>{
          newList = this.state.allDistrictData.filter((district)=>{
            return district.title.includes(letters)
          })
          this.setState({
            allDistrictData : newList
          })
        })
      }
    
    render() {

        const forDistrict = this.state.allDistrictData.map((value)=>{
            return <ForDistrict key={value.id} id={value.id}/>
        }) 

        return (
            <div className="App">
                <Link to="/" ><button>All Country</button></Link>
                <h3>Information Of Districts Of Nepal</h3>       
                <SearchBar search={ this.filterByDistrict } searchFor="District"  />     
                <br /> 
                 <table className={TableStyle.table}>
                <thead>
                <tr>
                    <th className={TableStyle.tablehead}>District</th>
                    <th className={TableStyle.tablehead}>जिल्ला</th>
                    <th className={TableStyle.tablehead}>Province</th>
                    <th className={TableStyle.tablehead}>TotalCases</th>
                    <th className={TableStyle.tablehead}>Active Cases</th>
                    <th className={TableStyle.tablehead}>TotalDeaths</th>
                    <th className={TableStyle.tablehead}>TotalRecovered</th>
                </tr>
                </thead> 
                    {forDistrict}
                </table>
            </div>
        );
    }
}

export default ForNepal;