import styled from 'styled-components';

export const IconImage = styled.img.attrs({
  alt: 'icon',
})`
  margin-right: ${props => (props.mr ? props.mr : '1300px')};
  width: ${props => (props.w ? props.w : '50px')};
`;
