import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logo from "../images/dgs-logo.png";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" ></Logo>
        <StyledLink link="/"></StyledLink>
          <Nav />
          
        <MobileMenu />
      </Container>
      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
    padding: 0 15px;
    height: 50px;
    background: rgba(0,0,0,.8);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 90;
`;

const Logo = styled.img`
  width: 37.5px;
  height: 37.5px;
  float: left;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  display: block;
`;



const StyledLink = styled(Link)`
  text-decoration: none;
`;

