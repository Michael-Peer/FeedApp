import React from 'react';
import Like from '../../assets/thumb-up.png'
import Comment from '../../assets/comment.png'
import ActionButton from '../buttons/ActionButton';
import './ActionsContainer.css'

interface ActionsContainerProps  {
//   onLike: () => void;
didLike: boolean
}

const ActionsContainer: React.FC<ActionsContainerProps> = ({didLike}) => {

    const onLike = () => {

    }

  return (
    <div className="actions-container">
      <ActionButton icon={Like} label="Like" onClick={onLike} didLike={didLike} />
      <ActionButton icon={Comment} label="Comment"  />
    </div>
  );
}





export default ActionsContainer