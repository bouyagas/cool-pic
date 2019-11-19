import React from "react";
import styled, { StyledComponent } from "styled-components";

const Loading: StyledComponent<"div", any, {}, never> = styled.div`
  font-size: 30px;
  color: green;
`;

interface Props {
  query: string;
  isLoading: boolean;
}

const Loader: React.FC<Props> = ({ isLoading, query }): React.ReactElement => {
  return (
    <React.Fragment>
      {isLoading && (
        <Loading>
          Loading for "<strong>{query}</strong>"...
        </Loading>
      )}
    </React.Fragment>
  );
};

export default Loader;
