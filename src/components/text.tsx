import React from "react";
import {Pnormal} from "../style/base";
interface textProps {
  text?: String;
}
const baseText: React.FC<textProps> = (props) => {
  return (
    <Pnormal color="#61dafb" fontsize="16px">
      {props.text}
    </Pnormal>
  );
};
baseText.defaultProps = {
  text: "hello React",
};

export default baseText;
