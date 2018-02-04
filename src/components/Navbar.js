import React from "react";
import Scroll from "react-scroll";
import Logo from "./logo";

import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

let Link = Scroll.Link;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Navbar className="navbar" fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <div id="headerLogo">
              <Logo
                alt="Michael Burton Logo"
                responsive
                onClick={this.scrollToTop}
              />
            </div>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse id="navBarRightDesktop">
          <Nav pullRight>
            <NavDropdown title="Projects">
              <Link
                className="scrollLink"
                to="mobileEnerlytics"
                spy
                smooth
                duration={500}
                offset={-100}
              >
              Mobile Enerltyics
              </Link>
              <Link
                className="scrollLink"
                to="truckHunt"
                spy
                smooth
                duration={500}
                offset={-100}
              >
                Truck Hunt
              </Link>
              <Link
                className="scrollLink"
                to="wizardsChess"
                spy
                smooth
                duration={500}
                offset={-150}
              >
                Wizards Chess
              </Link>
            </NavDropdown>
            <NavItem>
              <Link
                className="scrollLink"
                to="weddings"
                spy
                smooth
                duration={500}
                offset={-150}
              >
                Photography 
              </Link>
            </NavItem>
            <NavItem>
              <Link className="scrollLink" to="music" spy smooth duration={700}>
                Music
              </Link>
            </NavItem>
            <NavItem>
              <Link className="scrollLink" to="about" spy smooth duration={900}>
                About
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navBarRightMobile">
          <Nav pullRight>
            <NavItem>{/* TODO: ADD MOBILE MENU */}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
