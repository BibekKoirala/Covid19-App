import React, { Component } from 'react';
import TableStyle from '../Stylesheets/table.module.css'

class DataOfIndividuals extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             active: false,
             recovered: false,
             death: false
        }
    }
    
    static getDerivedStateFromProps(prop,state){
        if(prop.covidInfo.currentState === "active"){
            return{
                active : true 
            }
        }
        else if(prop.covidInfo.currentState === "recovered"){
            return{
                recovered : true
            }
        }
        else if(prop.covidInfo.currentState === "death"){
            return{
                death : true
            }
        }
    }



    render() {

        const MunciEng = this.props.MunEng ,
        MunciNep = this.props.MunNep ,
        Reported= this.props.covidInfo.reportedOn,
        Status= this.props.covidInfo.currentState,
        Gender=this.props.covidInfo.gender,
        Age=this.props.covidInfo.age,
        RecoveredOn=this.props.covidInfo.recoveredOn,
        DeathOn=this.props.covidInfo.deathOn;


        return (
            <tbody>
                <tr>
                <td className={TableStyle.tabledata2}>{MunciEng}</td>
                <td className={TableStyle.tabledata2}>{MunciNep}</td>
                <td className={TableStyle.tabledata2}>{Reported}</td>
                <td className={TableStyle.tabledata2}>{Status}</td>
                <td className={TableStyle.tabledata2}>{Gender}</td>
                <td className={TableStyle.tabledata2}>{Age}</td>
                <td className={TableStyle.tabledata2}>{RecoveredOn}</td>
                <td className={TableStyle.tabledata2}>{DeathOn}</td>
                </tr>
            </tbody>
        );
    }
}

export default DataOfIndividuals;