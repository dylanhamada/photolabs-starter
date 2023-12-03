import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const handleClick = () => {
    props.setPhotoSelected(props.photoData.id);
  };

  const modalClass = props.modal ? 'photo-details-modal__images' : '';

  return (
    <div className={`photo-list__item ${modalClass}`} onClick={handleClick}>
      <div>
        <PhotoFavButton 
          favorite={props.favorite} 
          updateToFavPhotoIds={props.updateToFavPhotoIds}
          id={props.photoData.id} 
        />
        <img src={props.photoData.urls.full} className='photo-list__image' />
      </div>
      <div className='photo-list__user-details'>
        <img src={props.photoData.user.profile} className='photo-list__user-profile' />
        <div>
          <p className='photo-list__user-info'>{props.photoData.user.name}</p>
          <p className='photo-list__user-info photo-list__user-location'>{props.photoData.location.city}, {props.photoData.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
