import React, { useEffect, useState } from 'react';
import { IFeedItem } from '../../utils/interfaces/FeedItem';
import styles from './FeedItem.module.css';
import './FeedItem.css'
import Like from '../../assets/thumb-up.png'
import Comment from '../../assets/comment.png'
import UserContainer from '../UserContainer/UserContainer';
import Images from '../images/Images';
import LikesContainer from '../LikeContainer/LikesContainer';
import ActionsContainer from '../ActionsContainer/ActionsContainer';


interface FeedItemProps {
  feedItem: IFeedItem;
}

function FeedItem({ feedItem }: FeedItemProps) {

  return (
    <div className="container">
    <UserContainer avatar={feedItem.avatar} shopName={feedItem.shopName} username={feedItem.username} />
      <div className="content">
        {feedItem.text}
      </div>
      <Images images={
      feedItem.images
      }/>

      <LikesContainer likes={feedItem.likes} comments={feedItem.comments}/>
     <ActionsContainer didLike={feedItem.didLike} />
    </div>




  );
}

export default FeedItem;
