import React from 'react';

class BeerComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLiked: false,
    }
  }

  likeButton = (id) => {
    console.log(`${id} clicked`);
    this.setState({
      isLiked: true
    })
  }

  render() {
    return (
      <div>
        <ul>{this.props.beers.map((beer) => {
          return (
            <li key={beer.id}>
              {beer.name}
              <button onClick={() => this.likeButton(beer.id)}>Like</button>
            </li>
          )})}
        </ul>
      </div>
    )
  }
}

export default BeerComponent;