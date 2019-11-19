import React from "react";
import styled, { StyledComponent } from "styled-components";
import { Link } from "react-router-dom";
import { Picture } from "../../App";

const Image: StyledComponent<
  "img",
  any,
  {
    alt: "raw";
  },
  "alt"
> = styled.img.attrs({
  alt: "raw"
})`
  width: 400px;
  height: 300px;
  object-fit: cover;
  box-shadow: 10px 10px 6px -6px gray;
  transform: rotate(7deg);
  &:hover {
    cursor: pointer;
    filter: contrast(150%);
    transition: filter 0.5s ease-in-out;
    transform: scale(1.2);
  }
`;

interface Props {
  picture: Picture;
  handleSelect: (pics: Picture) => void;
}

const PicturesItem: React.FC<Props> = ({
  picture,
  handleSelect
}): React.ReactElement => {
  const { urls } = picture;
  return (
    <React.Fragment>
      <Link to={`/picture/${picture.id}`}>
        <Image src={urls.small} onClick={() => handleSelect(picture)} />
      </Link>
    </React.Fragment>
  );
};

export default PicturesItem;
