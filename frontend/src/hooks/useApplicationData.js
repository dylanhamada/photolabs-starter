import { useEffect, useReducer } from 'react';
import axios from 'axios';

import photos from 'mocks/photos';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const initialState = {
  photoData: [],
  topicData: [],
  favPhotos: [],
  modal: false,
  modalData: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotos: [...state.favPhotos, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favPhotos: state.favPhotos.filter((fav) => fav !== action.payload) };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, modal: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SELECT_PHOTO:
      const modalPhoto = photos.find((photo) => photo.id === action.payload);
      return { ...state, modalData: modalPhoto };
    default:
      return state;
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (newFav) => {
    const favExists = state.favPhotos.includes(newFav);

    if (favExists) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: newFav });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: newFav });
    }
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  const setPhotoSelected = (photoId) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoId });
  };

  const loadPhotosByTopic = (topicId) => {
    axios.get(`api/topics/photos/${topicId}`)
      .then(res => {
        dispatch({
          type: 'SET_PHOTO_DATA',
          payload:res.data
        });
      });
  };

  return {
    state,
    dispatch,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    loadPhotosByTopic
  };
};