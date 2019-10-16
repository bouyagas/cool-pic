import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${props => (props.mt ? props.mt : '')};
  ${props =>
    props.ctr &&
    css`
      text-align: center;
    `};
`;
