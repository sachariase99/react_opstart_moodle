import React from 'react';
import '../styles/favoriteList/favorite.css'

const FavoriteList = (props) => {
  const { items, title } = props;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
