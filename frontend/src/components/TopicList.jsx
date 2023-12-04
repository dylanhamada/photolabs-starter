import React from "react";

import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  const topicListItemArray = props.topics.map(data => {
    return (
      <TopicListItem 
        key={data.id} 
        topicData={data} 
        loadPhotosByTopic={props.loadPhotosByTopic}
      />
    );
  });
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicListItemArray}
    </div>
  );
};

export default TopicList;
