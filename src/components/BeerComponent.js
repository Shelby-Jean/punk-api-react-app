import React from 'react';
import beersLikeIcon from '../beers-like-icon.png';

class BeerComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLiked: false,
    }
  }

  likeButton = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    const beersIcon = <img className="beers-icon" src={beersLikeIcon} alt="beers icon"/>
    return (
     <div>
      <ul>
        <li>
          {this.props.beer.name}
          <button className="like-button" onClick={() => this.likeButton()}>{this.state.isLiked ? 'unlike' : 'like'}</button>
          <div>
          {this.state.isLiked ? beersIcon : null}
          </div>
        </li>
      </ul>
    </div>
    )
  }
}

export default BeerComponent;