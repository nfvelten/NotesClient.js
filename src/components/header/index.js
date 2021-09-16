import React, { useState } from "react";
import { Navbar, Column, Container } from "rbx";
import LogoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";
import { Link } from "react-router-dom";
// import { faList } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img alt={LogoImage} src={LogoImage} />
          </Link>
          <Navbar.Burger
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu
          active={openMenu.toString()}
          onClick={() => setOpenMenu(!openMenu)}
          id="navbar-menu"
        >
          <Navbar.Segment
            as="div"
            className="navbar-item navbar-end"
            align="right"
          >
            <Column.Group>
              <Column>
                <Link
                  to="/notes"
                  className="button is-white has-text-custom-purple"
                >
                  Notes
                </Link>
              </Column>
              <Column>
                <Link
                  to="/users/edit"
                  className="button is-white has-text-custom-purple"
                >
                  Edit account
                </Link>
              </Column>
              <Column>
                <Link
                  to="/register"
                  className="button is-white has-text-custom-purple"
                >
                  Register
                </Link>
              </Column>
              <Column>
                <Link
                  to="/login"
                  className="button is-outlined is-custom-purple"
                >
                  Login
                </Link>
              </Column>
            </Column.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default Header;
