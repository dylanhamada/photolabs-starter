import React, { useState } from 'react';

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div>
      <TopNavigation 
        topics={props.topics} 
        favPhotos={props.favPhotos} 
        loadPhotosByTopic={props.loadPhotosByTopic}
      />
      <PhotoList 
        photos={props.photos}
        favPhotos={props.favPhotos}
        updateToFavPhotoIds={props.updateToFavPhotoIds}
        setPhotoSelected={props.setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;