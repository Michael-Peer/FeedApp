
import { useState } from 'react';
import './ActionButton.css'

type ActionButtonProps = {
    icon: string;
    label: string;
    onClick?: () => void;
    didLike?: boolean
  }


const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, didLike }) => {
    const [isLike, setIsLike] = useState(didLike)

    const onLike = () => {
        setIsLike((isLike) => !isLike)
    }
    return (
      <div className="l-c" onClick={onClick}>
        <img className={label.toLowerCase()} src={icon} alt={`${label} button`} style={{ width: '16px', height: '16px' }} />
        <span onClick={onLike}  className={isLike? 'liked' : ''}>{label}</span>
      </div>
    );
  }
  export default ActionButton