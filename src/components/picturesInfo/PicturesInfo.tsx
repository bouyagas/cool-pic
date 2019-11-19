import React from "react";
import PicturesInfoItem from "./PicturesInfoItem";
import { Picture } from "../../App";

interface Props {
  currentDetails: Picture;
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
