import styled, { css, StyledComponent } from "styled-components";

export interface StyledWrapper {
  mt: string;
  ctr: any;
}

export const Wrapper: StyledComponent<
  "div",
  any,
  {
    ctr?: any;
    mt?: any;
  },
  never
> = styled.div`
  margin-top: ${(props: StyledWrapper) => (props.mt ? props.mt : "")};
  ${(props: StyledWrapper) =>
    props.ctr &&
    css`
      text-align: center;
    `};
`;
