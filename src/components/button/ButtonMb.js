import styled from "styled-components";
import { TiThMenuOutline } from "react-icons/ti";
import { AiFillCloseCircle } from "react-icons/ai";
const ButtonStyles = styled.div`
  display: none;

  @media screen and (max-width: 1023px) {
    display: block;
    padding-right: 10px;
  }

  .icon {
    font-size: 30px;
    cursor: pointer;
  }
`;

const ButtonMb = ({ showmenu = true, onClick = () => {}, ...props }) => {
  return (
    <ButtonStyles>
      <div className="icon" onClick={onClick}>
        {showmenu ? <TiThMenuOutline /> : <AiFillCloseCircle />}
      </div>
    </ButtonStyles>
  );
};

export default ButtonMb;
