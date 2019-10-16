import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Image = styled.img.attrs({
  alt: 'raw',
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

const PicturesItem = ({ picture, handleSelect }) => {
  const { urls } = picture;
  return (
    <>
      <Link to={`/picture/${picture.id}`}>
        <Image src={urls.small} onClick={() => handleSelect(picture)} />
      </Link>
    </>
  );
};

export default PicturesItem;
