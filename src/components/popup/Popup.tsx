import { FC, MouseEvent } from 'react';

import './popup.scss';
import { Form } from '../Form/Form';

interface popupProps {
  onClose: () => void;
}

export const Popup: FC<popupProps> = ({ onClose }) => {
  const formTitle = 'About Us';

  const handleBackgroundClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.className === 'popup-overlay') {
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className='popup-overlay' onClick={handleBackgroundClick}>
      <div className='popup-content'>
        <Form isPopup title={formTitle} />
      </div>
    </div>
  );
};
