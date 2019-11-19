import React from "react";
import PicturesInfoItem from "./PicturesInfoItem";

interface Props {
  currentDetails: any;
}

const PicturesInfo: React.FC<Props> = ({
  currentDetails
}): React.ReactElement => {
  return (
    <React.Fragment>
      <PicturesInfoItem currentDetails={currentDetails} />
    </React.Fragment>
  );
};

export default PicturesInfo;
