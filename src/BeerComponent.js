import React from 'react';
import beersLikeIcon from './beers-like-icon.png';

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
    const beersIcon = <img src={beersLikeIcon} alt="beers icon" style={{height: '30px'}}/>
    return (
      <div>
        <ul>{this.props.beers.map((beer) => {
          return (
            <li key={beer.id}>
              {beer.name}
              <button onClick={() => this.likeButton(beer.id)}>like</button>
              <div>
                {this.state.isLiked ? beersIcon : null}
              </div>
            </li>
          )})}
        </ul>
      </div>
    )
  }
}

export default BeerComponent;

//<img src={beersLikeIcon} alt="beers icon" style={{height: '30px'}}/>