import React from "react";
import {ButtonStyle} from "../style/base";
interface textProps {
    text?: String;
  }

const Button: React.FC<textProps> = (props) => {
  return (
    <div>
      <ButtonStyle btnType="prim">
      {props.text}
    </ButtonStyle>
    </div>
    

  );
};
ButtonStyle.defaultProps = {
  text: "hello React",
};

export default Button;


