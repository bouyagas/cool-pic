import styled, { StyledComponent } from "styled-components";

export interface StyledIcon {
  mr: string;
  w: string;
}

export const IconImage: StyledComponent<
  "img",
  any,
  {
    alt: "icon";
    mr?: any;
    w?: any;
  },
  "alt"
> = styled.img.attrs({
  alt: "icon"
})`
  margin-right: ${(props: StyledIcon) => (props.mr ? props.mr : "1300px")};
  width: ${(props: StyledIcon) => (props.w ? props.w : "50px")};
`;
