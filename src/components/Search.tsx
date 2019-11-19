import React from "react";
import styled, { StyledComponent } from "styled-components";

const Form: StyledComponent<"form", any, {}, never> = styled.form`
  width: 50%;
  position: relative;
  height: 50px;
  overflow: hidden;
`;

const Label: StyledComponent<"label", any, {}, never> = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #5fa8d3;

  :after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #595f6e;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`;

const Span: StyledComponent<"span", any, {}, never> = styled.span`
  font-size: 22px;
  position: absolute;
  bottom: 5px;
  left: 0px;
  color: #5fa8d3;
  transition: all 0.3s ease;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.2);
`;

const SearchBar: StyledComponent<
  "input",
  any,
  {
    type: "text";
    name: "name";
  },
  "name" | "type"
> = styled.input.attrs({
  type: "text",
  name: "name"
})`
  font-size: 26px;
  width: 100%;
  height: 100%;
  color: #595f6e;
  padding-top: 10px;
  outline: none;
  border: none;
  &:focus + ${Label} ${Span}, &:valid ${Label} ${Span} {
    transform: translateY(-150%);
    font-size: 14px;
    color: #595f6e;
  }
  &:focus + ${Label}:after, &:valid + ${Label}:after {
    transform: translateX(0%);
  }
`;

type fromE = React.FormEvent<HTMLFormElement>;
type changeE = React.ChangeEvent<HTMLInputElement>;

interface Props {
  query: string;
  handleSubmit: (event: fromE) => void;
  handleOnChange: (event: changeE) => void;
}

const Search: React.FC<Props> = ({
  query,
  handleSubmit,
  handleOnChange
}): React.ReactElement => {
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <SearchBar
          value={query}
          onChange={handleOnChange}
          required
          autoComplete="off"
        />
        <Label>
          <Span>Enter your search term here...</Span>
        </Label>
      </Form>
    </React.Fragment>
  );
};
export default Search;
