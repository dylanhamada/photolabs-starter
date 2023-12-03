import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const photoListArray = [];
  for (const photo in props.modalData.similar_photos) {
    photoListArray.push(props.modalData.similar_photos[photo]);
  }

  let favorite = props.favPhotos.includes(props.modalData.id);
  
  return (
    <div className="photo-details-modal" style={{zIndex: 1}}>
      <button className="photo-details-modal__close-button" onClick={props.onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton 
        favorite={favorite} 
        updateToFavPhotoIds={props.updateToFavPhotoIds}
        id={props.modalData.id} 
      />
      <img src={props.modalData.urls.full} className='photo-details-modal__image' />
      <div className='photo-details-modal__photographer-details'>
        <img src={props.modalData.user.profile} className='photo-details-modal__photographer-profile' />
        <div>
          <p className='photo-details-modal__photographer-info'>{props.modalData.user.name}</p>
          <p className='photo-details-modal__photographer-info photo-details-modal__photographer-location'>{props.modalData.location.city}, {props.modalData.location.country}</p>
        </div>
      </div>
      <h3 className='photo-details-modal__header'>Similar Photos</h3>
      <PhotoList 
        modal
        photos={photoListArray} 
        favPhotos={props.favPhotos}
        checkFav={props.checkFav}
        setPhotoSelected={props.setPhotoSelected}
      />
    </div>
  )
};

export default PhotoDetailsModal;
