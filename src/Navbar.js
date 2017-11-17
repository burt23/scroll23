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
      <Navbar
        style={{ height: "5vh" }}
        className="white"
        fixedTop
        collapseOnSelect
      >
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
            <NavDropdown eventKey={1} title="Code" id="basic-nav-dropdown">
              <Link
                className="scrollLink"
                style={{ display: "block", padding: "0.5em" }}
                to="truckHunt"
                spy
                smooth
                duration={500}
                offset={-100}
              >
                truckHunt
              </Link>
              <Link
                className="scrollLink"
                style={{ display: "block", padding: "0.5em" }}
                to="wizardsChess"
                spy
                smooth
                duration={500}
                offset={-150}
              >
                wizardsChess
              </Link>
              <Link
                className="scrollLink"
                style={{ display: "block", padding: "0.5em" }}
                to="privateList"
                spy
                smooth
                duration={500}
                offset={-100}
              >
                privateList
              </Link>
            </NavDropdown>
            <NavDropdown
              eventKey={1}
              title="Photography"
              id="basic-nav-dropdown"
            >
              <Link
                className="scrollLink"
                style={{ display: "block", padding: "0.5em" }}
                to="weddings"
                spy
                smooth
                duration={500}
                offset={-150}
              >
                Weddings
              </Link>
              <Link
                className="scrollLink"
                style={{ display: "block", padding: "0.5em" }}
                to="testimonials"
                spy
                smooth
                duration={500}
                offset={-100}
              >
                Testimonials
              </Link>
            </NavDropdown>
            <NavItem eventKey={3}>
              <Link
                className="scrollLink"
                to="music"
                spy
                smooth
                duration={700}
                offset={80}
              >
                Music
              </Link>
            </NavItem>
            <NavItem eventKey={6}>
              <Link className="scrollLink" to="about" spy smooth duration={900}>
                About
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navBarRightMobile">
          <Nav pullRight>
            <NavItem />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
