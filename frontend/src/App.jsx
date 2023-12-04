import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'components/PhotoDetailsModal';

import './App.scss';

import topics from './mocks/topics';
import { useApplicationData } from 'hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    dispatch,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected
  } = useApplicationData();

  useEffect(() => {
    axios.get('/api/photos')
      .then(res => {
        dispatch({
          type: 'SET_PHOTO_DATA',
          payload: res.data
        });
      });

    axios.get('/api/topics')
    .then(res => {
      dispatch({
        type: 'SET_TOPIC_DATA',
        payload: res.data
      });
    });
  }, []);

  return (
    <div className="App">
      {state.modal && 
        <PhotoDetailsModal 
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          modalData={state.modalData} 
          favPhotos={state.favPhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          setPhotoSelected={setPhotoSelected}
        />
      }
      <HomeRoute 
        photos={state.photoData} 
        topics={state.topicData} 
        setPhotoSelected={setPhotoSelected}
        favPhotos={state.favPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
    </div>
  );
};

export default App;
