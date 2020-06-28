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
            console.log(this.state.letters)
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
                 placeholder="Country"></input>
            </div>
        );
    }
}

export default SearchBar;