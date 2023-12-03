import React from "react";

import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photoListItemArray = props.photos.map(data => {
    let favorite = props.favPhotos.includes(data.id);
    
    return (
      <PhotoListItem 
        key={data.id} 
        photoData={data}
        favorite={favorite}
        updateToFavPhotoIds={props.updateToFavPhotoIds}
        setPhotoSelected={props.setPhotoSelected}
        modal={props.modal}
      />
    );
  });
  
  return (
    <ul className="photo-list">
      {photoListItemArray}
    </ul>
  );
};

export default PhotoList;
