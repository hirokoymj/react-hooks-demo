import React from 'react';

const EventBubblingDemo = () => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
    alert('Clicked ' + event.currentTarget.id);
  };

  return (
    <div id="parentElement" onClick={handleClick}>
      This is the parent element
      <div id="childElement" onClick={handleClick}>
        This is the child element
      </div>
    </div>
  );
};

export default EventBubblingDemo;
