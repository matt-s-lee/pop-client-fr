import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactComponent from "../assets/headerLogo.png";

const Navbar = () => {
  return (
    <>
      <Notif>
        Besoin d'un soutien immédiat en cas de crise ? Appelez le 911 si vous ou
        quelqu'un que vous connaissez êtes en danger immédiat ou avez besoin de
        soins médicaux urgents.
      </Notif>
      <Nav>
        <Ul>
          <Header to="/">
            <StyledLogo src={ReactComponent} />
          </Header>
        </Ul>
        <Ul>
          <ClickLi>
            <EnglishSite href="https://poweroverpaincanada.portal.gs/">
              EN
            </EnglishSite>
          </ClickLi>
          <ClickLi>FR</ClickLi>
        </Ul>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;
  padding: 15px;
  margin: 5px;
  z-index: 10;

  @media only screen and (min-width: 600px) {
  }
`;

const Notif = styled.nav`
  background-color: #0a69b5;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 1em;
`;

const StyledLogo = styled.img`
  height: 60px;
`;

const Ul = styled.nav`
  display: flex;
  margin-right: 1.5em;
  align-items: center;
  list-style-type: none;
  & > * {
    margin-left: 1.5em;
  }
`;

const Header = styled(Link)`
  font-size: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 20px;
  color: var(--clr-primary);
`;

const ClickLi = styled.li`
  color: #666666;
  font-size: 15px;
  font-weight: 700;
`;

const EnglishSite = styled.a`
  color: #666666;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;
