import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon" onClick={() => props.updateToFavPhotoIds(props.id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;