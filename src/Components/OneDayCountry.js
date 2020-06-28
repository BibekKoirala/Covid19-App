import React, { Component } from 'react';
import TableStyle from './Stylesheets/table.module.css'

class OneDayCountry extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             wereGreenZone : false
        }
    }


    

    render() {

        const Day = this.props.day,
        Date = this.props.OneDayInfo.Date.slice(0,10),
        ConfirmedCases = this.props.OneDayInfo.Confirmed,
        Deaths = this.props.OneDayInfo.Deaths,
        Recovered = this.props.OneDayInfo.Recovered,
        Active = this.props.OneDayInfo.Active,
        NewCases = "Wait";

        return (
            <tbody>
                <tr>
                <td className={TableStyle.tabledata2}>{Day}</td>
                <td className={TableStyle.tabledata2}>{Date}</td>
                <td className={TableStyle.tabledata2}>{ConfirmedCases}</td>
                <td className={TableStyle.tabledata2}>{Deaths}</td>
                <td className={TableStyle.tabledata2}>{Recovered}</td>
                <td className={TableStyle.tabledata2}>{Active}</td>
                <td className={TableStyle.tabledata2}>{NewCases}</td>
                </tr>
            </tbody>
        );
    }
}

export default OneDayCountry;