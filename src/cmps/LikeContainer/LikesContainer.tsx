import React from 'react';
import Like from '../../assets/thumb-up.png'
import './LikeContainer.css'


interface LikesContainerProps  {
  likes: number;
  comments: number;
}

const LikesContainer: React.FC<LikesContainerProps> = ({ likes, comments }) => {
  return (
    <div className="likes-container">
      <div className="l-c">
        <LikeButton />
        <div className="likes">{likes} likes</div>
      </div>
      <div className="comments">{comments} comments</div>
    </div>
  );
}

const LikeButton: React.FC = () => {
  return (
    <img src={Like} alt="Like button" style={{ width: '12px', height: '12px' }} />
  );
}

export default LikesContainer