import React from 'react';
import BeerComponent from './BeerComponent';

const ListBeer = (props) => {
  return (
    <div>
      <ul>{props.beers.map((beer) => <BeerComponent key={beer.id} beer={beer} />)}</ul>
    </div>
  )
}

export default ListBeer;