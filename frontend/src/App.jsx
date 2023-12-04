import React, { useEffect } from 'react';
import axios from 'axios';

import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'components/PhotoDetailsModal';

import './App.scss';

import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    dispatch,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    loadPhotosByTopic
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
        loadPhotosByTopic={loadPhotosByTopic}
      />
    </div>
  );
};

export default App;
