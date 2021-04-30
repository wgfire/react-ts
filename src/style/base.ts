/* eslint-disable no-use-before-define */
/* eslint-disable no-mixed-operators */
import styled from "styled-components";

interface BaseProps {
  fontsize?: String;
  color?: string;
  margin?: string;
  padding?: string;
  [propName: string]: any;
}
let TextObj: BaseProps = {
  fontsize: "14px",
  margin: "0px",
  color: "black",
  padding: "0px",
  width: "max-content",
  height: "auto",
};

const setKey = (props: BaseProps, key: string) => {
  return props[key] ? props[key] : TextObj[key];
};

export const Pnormal = styled.p<BaseProps>`
  width: ${(props) => setKey(props, "width")};
  height: ${(props) => setKey(props, "height")};
  font-size: ${(props) => setKey(props, "fontsize")};
  margin: ${(props) => (props.margin ? props.margin : TextObj.margin)};
  padding: ${(props) => setKey(props, "padding")};
  color: ${(props) => setKey(props, "color")};
`;
// eslint-disable-next-line
export default {
  Pnormal,
};
