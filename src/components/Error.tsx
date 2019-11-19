import React from "react";
import styled, { StyledComponent } from "styled-components";

const Errors: StyledComponent<"div", any, {}, never> = styled.div`
  font-size: 30px;
  color: red;
`;

interface Props {
  isError: boolean;
}

const Error: React.FC<Props> = ({ isError }): React.ReactElement => {
  return (
    <React.Fragment>
      {isError && <Errors>Something went wrong with your request ...</Errors>}
    </React.Fragment>
  );
};

export default Error;
