import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Components/Header';
import AllCountryData from './Components/AllCountryData';
import SpecificCountry from './Components/SpecificCountry';
import ForNepal from './Components/ForNepal';
import SingleDistrictInfo from './Components/ComponentForNepal/SingleDistrictInfo';


class App extends React.Component {

constructor(props) {
  super(props)

  this.state = {
     districtName : "",
  }
}


render() {
  return (
    <Router>
      <Header className="App"/>
      <Switch>
        <Route path="/" exact={true} component={AllCountryData} />
        <Route path="/:Country" exact={true} render={({match})=>{
          return <SpecificCountry country={match.params.Country}/>
        }} />
        <Route path="/nepal/district" exact={true} component={ForNepal} />
        <Route path="/nepal/district/:id"  render={({match})=>{
          return <SingleDistrictInfo districtId={match.params.id} />
        }} />
      </Switch>
    </Router>
  )
}
}

export default App;
