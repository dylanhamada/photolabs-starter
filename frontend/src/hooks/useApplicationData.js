import { useState } from 'react';

import photos from 'mocks/photos';

const useApplicationData = () => {
  const [state, setState] = useState({
    favPhotos: [],
    modal: false,
    modalData: {}
  });
  
  // work on updateToFavPhotoIds
  const updateToFavPhotoIds = (newFav) => {
    const favExists = state.favPhotos.includes(newFav);

    if (favExists) {
      const updatedFav = state.favPhotos.filter(fav => fav !== newFav);
      console.log('updateToFavPhotoIds, calling setState to remove favorite');
      setState({
        ...state,
        favPhotos: updatedFav
      });
    } else {
      const newFavPhotosArray = [...state.favPhotos, newFav];
      
      console.log('updateToFavPhotoIds, calling setState to add favorite');
      setState({
        ...state,
        favPhotos: newFavPhotosArray
      });
    }
  }
  
  // work on onClosePhotoDetailsModal
  const onClosePhotoDetailsModal = () => {
    setState({
      ...state,
      modal: false
    });
  };

  // work on setPhotoSelected
  const setPhotoSelected = (photoId) => {
    const findPhoto = (id) => {
      return photos.find(photo => {
        return photo.id === id;
      });
    };

    const modalPhoto = findPhoto(photoId);

    setState({
      ...state,
      modal: true,
      modalData: modalPhoto
    });
  };

  return {
    state, 
    updateToFavPhotoIds, 
    onClosePhotoDetailsModal, 
    setPhotoSelected
  };
};

export default useApplicationData;