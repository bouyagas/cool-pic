import React from 'react';
import styled from 'styled-components';

const Errors = styled.div`
  font-size: 30px;
  color: red;
`;

const Error = ({ isError }) => {
  return <>{isError && <Errors>Something went wrong with your request ...</Errors>}</>;
};

export default Error;
