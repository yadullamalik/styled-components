import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  background: ${(props) => (props.primary === "primary" ? "#2490ff" : "none")};
  color: ${(props) =>
    props.link === "link"
      ? "#2490ff"
      : props.primary === "primary"
      ? "white"
      : "none"};
  margin: 5px;
  border-radius: 4px;
  margin-top: 20px;
  border: ${(props) =>
    props.def === "default"
      ? "1px solid grey"
      : props.dashed === "dashed"
      ? "1px dashed grey"
      : ""};
  &:hover {
    background: ${(props) =>
      props.primary === "primary" ? "#479ef5" : "none"};
    color: ${(props) =>
      props.def === "default" ||
      props.dashed === "dashed" ||
      props.link === "link"
        ? "#479ef5"
        : ""};
    border: ${(props) =>
      props.def === "default"
        ? "1px solid #479ef5"
        : props.dashed === "dashed"
        ? "1px dashed #479ef5"
        : ""};
  }
`;
