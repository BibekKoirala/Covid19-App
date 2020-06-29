import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             letters:''
        }
        this.ref = React.createRef()
    }
    
    changeHandler = (event)=>{
        this.setState({
            letters : event.target.value
        }, ()=>{
                this.props.search(this.state.letters);
        })

    }

    componentDidMount(){
        this.ref.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text"
                 value={this.state.letters}
                 onChange={ this.changeHandler } 
                 ref={this.ref}
                 placeholder={ this.props.searchFor}></input>
            </div>
        );
    }
}

export default SearchBar;