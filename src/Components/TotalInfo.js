import React, { Component } from 'react';


class TotalInfo extends Component {   

    render() {
        const {NewConfirmed , NewDeaths , NewRecovered , TotalConfirmed , TotalDeaths , TotalRecovered } = this.props.data
        return (
            <div className="TotalInfo">
                <div className="NewConfirmed">NewConfirmed : {NewConfirmed}</div>
                <div className="NewDeaths">NewDeaths : {NewDeaths}</div>
                <div className="NewRecovered">NewRecovered : {NewRecovered}</div>
                <div className="TotalConfirmed">TotalConfirmed : {TotalConfirmed}</div>
                <div className="TotalDeaths">TotalDeaths : {TotalDeaths}</div>
                <div className="TotalRecovered">TotalRecovered : {TotalRecovered}</div>
            </div>
        );
    }
}

export default TotalInfo;