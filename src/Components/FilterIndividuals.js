import React, { Component } from 'react';

class FilterIndividuals extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             gender : "both",
             status : "All Cases"
        }
    }
    
    selectHandlerForGender = (e)=>{
        this.setState({
                gender : e.target.value,
                status : "All Cases"
        },()=>{
            this.props.filterByGender(this.state.gender)
        }) 
    }

    selectHandlerForStatus = (e)=>{
        this.setState({
                gender : "both",
                status : e.target.value
        },()=>{
            this.props.filterByStatus(this.state.status)
        }) 
    }

    render() {
        return (
            <div>
                <label htmlFor="gender">Filter By gender:</label>
                <select name="gender" id="gender" value={this.state.gender} onChange = {this.selectHandlerForGender}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="both">both</option>
                </select>
                <label htmlFor="status">Filter By Status:</label>
                <select name="status" id="status" value={this.state.status} onChange = {this.selectHandlerForStatus}>
                    <option value="All Cases">All Cases</option>
                    <option value="active">active</option>
                    <option value="recovered">recovered</option>
                    <option value="death">death</option>
                </select>
            </div>
        );
    }
}

export default FilterIndividuals;