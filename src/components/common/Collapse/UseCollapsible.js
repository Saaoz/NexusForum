import { useState } from 'react';

const useCollapsible = () => {
  const [isOpen, setIsOpen] = useState({
    a: true,
    b: true,
    c: true,
  });

  const onToggle = (key) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return { isOpen, onToggle };
};

export default useCollapsible;
