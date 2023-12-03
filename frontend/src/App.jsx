import React, { useState } from 'react';

import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'components/PhotoDetailsModal';

import './App.scss';

import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected
  } = useApplicationData();

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
        photos={photos} 
        topics={topics} 
        setPhotoSelected={setPhotoSelected}
        favPhotos={state.favPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
    </div>
  );
};

export default App;
