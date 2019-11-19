import React from "react";
import { Link } from "react-router-dom";
import styled, { StyledComponent } from "styled-components";
import { IconImage } from "../../styledComponent/IconImage";
import PicturesItem from "./PicturesItem";
import { Picture } from "../../App";

const Title: StyledComponent<"h4", any, {}, never> = styled.h4`
  font-size: calc(20px + 2vmin);
  color: #5fa8d3;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

const Grid: StyledComponent<"div", any, {}, never> = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-gap: 70px;
`;

interface Props {
  query: string;
  pictures: Picture[];
  handleSelect: (pics: Picture) => void;
}

const Pictures: React.FC<Props> = ({
  query,
  pictures,
  handleSelect
}): React.ReactElement => {
  const displayPicture: JSX.Element[] = pictures.map((picture: Picture) => (
    <PicturesItem
      key={picture.id}
      picture={picture}
      handleSelect={handleSelect}
    />
  ));

  return (
    <React.Fragment>
      <Link to="/">
        <IconImage src="https://icon.now.sh/home/5fa8d3" />
      </Link>

      <Title>
        {pictures.length} search results for{" "}
        <i>{query.charAt(0).toUpperCase() + query.slice(1)}</i> ...
      </Title>
      <Grid>{displayPicture}</Grid>
    </React.Fragment>
  );
};

export default Pictures;
