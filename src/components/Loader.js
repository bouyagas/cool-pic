import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  font-size: 30px;
  color: palevioletred;
`;

const Loader = ({ isLoading, query }) => {
  return (
    <>
      {isLoading && (
        <Loading>
          Loading for "<strong>{query}</strong>"...
        </Loading>
      )}
    </>
  );
};

export default Loader;
