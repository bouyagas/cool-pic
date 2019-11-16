import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledComponent/Wrapper';
import { IconImage } from '../../styledComponent/IconImage';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border-radius: 30px 30px 30px 30px;
  height: 570px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img.attrs({
  alt: 'raw',
})`
  min-width: 400px;
  width: 887px;
  height: 500px;
  object-fit: cover;
  border-radius: 60px 60px 60px 60px;
`;

const Container = styled.div`
  padding: 2px 16px;
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: black;
`;

const FlipCardBack = styled.div`
  border-radius: 60px 60px 60px 60px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: black;
  color: white;
  transform: rotateY(180deg);
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

const FlipCard = styled.div`
  border-radius: 60px 60px 60px 60px;
  z-index: 1;
  position: absolute;
  top: 78px;
  left: 285px;
  width: 887px;
  height: 500px;
  perspective: 1000px;
  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

const PicturesInfoItem = ({ currentDetails }) => {
  const { user, alt_description, urls } = currentDetails;
  return (
    <>
      <Wrapper mt='50px'>
        <Card>
          <Link to='/pictures'>
            <IconImage
              mr='1175px'
              w='55px'
              src='https://icon.now.sh/close/5fa8d3'
            />
          </Link>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <CardImage src={urls.small} />
              </FlipCardFront>
              <FlipCardBack>
                <Container>
                  <h1>Author: {user.name}</h1>
                  <p>{user.bio}</p>
                  <p>Picture's description: {alt_description}</p>
                  <p>Total number of likes {user.total_photos}</p>
                </Container>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Card>
      </Wrapper>
    </>
  );
};

export default PicturesInfoItem;
