import { useState, useEffect } from 'react';

// Do not bubble up, prevent form from firing
const preventEnterBubbling = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
};

export const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = (e) => {
      preventEnterBubbling(e);
      if (e.key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = (e) => {
      preventEnterBubbling(e);
      if (e.key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};
