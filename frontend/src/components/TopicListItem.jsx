import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span onClick={() => props.loadPhotosByTopic(props.topicData.id)}>{props.topicData.title}</span>
    </div>
  );
};

export default TopicListItem;
