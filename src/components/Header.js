import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <div>
      <Container>
        <a>
          <img src="./images/logo.svg" />
        </a>
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
        </Menu>

        <RightMenu>
          <a href="#">Shop </a>
          <a href="#">Tesla account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav view={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cyber Truck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">xyz</a>
          </li>
          <li>
            <a href="#">xyz</a>
          </li>
          <li>
            <a href="#">xyz</a>
          </li>
          <li>
            <a href="#">xyz</a>
          </li>
        </BurgerNav>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  display: flex;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: start;
  padding: 20px;
  transform: ${(props) => (props.view ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
