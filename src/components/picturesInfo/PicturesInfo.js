import React from 'react';

import PicturesInfoItem from './PicturesInfoItem';

const PicturesInfo = ({ currentDetails }) => {
  return (
    <div>
      <PicturesInfoItem currentDetails={currentDetails} />
    </div>
  );
};

export default PicturesInfo;
