// import React, { useState } from "react";
// import { Navbar, Column, Button, Dropdown } from "rbx";
// import LogoImage from "../../assets/images/logo-white.png";
// import "../../styles/header.scss";
// import UserService from "../../services/users";
// import { Redirect, Link } from "react-router-dom";

// function HeaderLogged(props) {
//   const [redirectToHome, setRedirectToHome] = useState(false);

//   const logOut = async () => {
//     await UserService.logout();
//     setRedirectToHome(true);
//   };

//   if (redirectToHome === true) return <Redirect to={{ pathname: "/" }} />;

//   return (
//     <Navbar color="custom-purple" className="navbar-logged">
//       <Navbar.Brand>
//         <Column.Group>
//           <Column size="11" offset="1">
//             <Link to="/notes">
//               <img alt="logo" src={LogoImage} />
//             </Link>
//           </Column>
//         </Column.Group>
//         <Navbar.Burger
//           className="navbar-burger burger"
//           aria-label="menu"
//           aria-expanded="false"
//           data-target="navbar-menu"
//         >
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//         </Navbar.Burger>
//       </Navbar.Brand>

//       <Navbar.Menu>
//         <Navbar.Segment
//           as="div"
//           className="navbar-item navbar-end"
//           align="right"
//         >
//           <Navbar.Item as="div">
//             <Dropdown>
//               <Dropdown.Trigger>
//                 <Button className="button" color="white" outlined>
//                   <span>Menu ▼</span>
//                 </Button>
//               </Dropdown.Trigger>
//               <Dropdown.Menu>
//                 <Dropdown.Content>
//                   <Dropdown.Item as="div">
//                     <Link to="/users/edit">User Edit</Link>
//                   </Dropdown.Item>
//                   <Dropdown.Divider />
//                   <Dropdown.Item as="div">
//                     <a href="/logOut" onClick={() => logOut()}>
//                       LogOut
//                     </a>
//                   </Dropdown.Item>
//                 </Dropdown.Content>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Navbar.Item>
//         </Navbar.Segment>
//       </Navbar.Menu>
//     </Navbar>
//   );
// }

// export default HeaderLogged;

import React, { useState } from "react";
import { Navbar, Column, Button, Container } from "rbx";
import LogoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";
import { Link } from "react-router-dom";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            className="navbar-item navbar-start"
            align="start"
          >
            <Navbar.Item as="div">
              <Button
                className="open-button"
                color="white"
                outlined
                onClick={() => props.setIsOpen(true)}
              >
                <FontAwesomeIcon icon={faList} />
              </Button>
            </Navbar.Item>
          </Navbar.Segment>
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