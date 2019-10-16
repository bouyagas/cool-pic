import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledComponent/Wrapper';
import { IconImage } from '../../styledComponent/IconImage';
import { Link } from 'react-router-dom';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img.attrs({
  alt: 'raw',
})`
  margin: -25px 12px 61px 416px;
  min-width: 400px;
  width: 500px;
  height: 500px;
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
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #2980b9;
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
  margin-right: -1300px;
  border-radius: 60px 60px 60px 60px;
  width: 500px;
  height: 500px;
  perspective: 1000px;
  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

const PicturesInfoItem = ({ currentDetails }) => {
  const { id, description, urls } = currentDetails;
  return (
    <>
      <Card>
        <Wrapper mt='50px'>
          <Link to='/pictures'>
            <IconImage src='https://icon.now.sh/close/5fa8d3' />
          </Link>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <CardImage src={urls.small} />
              </FlipCardFront>
              <FlipCardBack>
                <Container>
                  <h1>your user id is {id}</h1>
                  <p>{description}</p>
                </Container>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Wrapper>
      </Card>
    </>
  );
};

export default PicturesInfoItem;
