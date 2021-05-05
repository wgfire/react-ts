import React from "react";
import {Pstyle} from "../style/base";
import styled from 'styled-components'
interface textProps {
  text?: String;

}
const PstyleHover = styled(Pstyle)`
&:hover {
  font-size:20px
}
color:#178bc0;
transition:all ease-in .3s;
`
const baseText: React.FC<textProps> = (props) => {
  return (
    <div>
      <Pstyle color="#61dafb" fontsize="16px" className="xx">
      {props.text}
    </Pstyle>
    <PstyleHover color="#61dafb" fontsize="16px">
      {props.text}
    </PstyleHover>
    </div>
  );
};
baseText.defaultProps = {
  text: "hello React",
};

export default baseText;
