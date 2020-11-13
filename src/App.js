import React from 'react';
import BeerComponent from './BeerComponent';
import logo from './beer-img.jpg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: [],
    }
  }

  componentDidMount = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => {
        let beers = data.map(beer => beer);
        this.setState({
          beers
        }, () => {console.log(this.state)})
      })
      .catch(error => console.log(`Error, ${error}`))
  }


  render() {
    return (
      <div>
        <header className="App-header">
          <img className="main-logo" src={logo} alt="logo" />
          <BeerComponent beers={this.state.beers}/>
        </header>
      </div>
    )
  }
}

export default App;
