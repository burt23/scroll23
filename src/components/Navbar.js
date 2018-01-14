import React from "react";
import Scroll from "react-scroll";
import Logo from "./logo";

import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

let Link = Scroll.Link;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

const resume =
  "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Michael+Burton+Res.pdf";

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
            <NavDropdown title="Code" className="scrollLink">
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
              <Link
                className="scrollLink"
                to="privateList"
                spy
                smooth
                duration={500}
                offset={-100}
              >
                Private List
              </Link>
            </NavDropdown>
            <NavDropdown  className="scrollLink" title="Photography">
              <Link
                className="scrollLink"
                to="weddings"
                spy
                smooth
                duration={500}
                offset={-150}
              >
                Weddings
              </Link><br />
              <Link
                className="scrollLink"
                to="testimonials"
                spy
                smooth
                duration={500}
                offset={-100}
              >
                Testimonials
              </Link>
            </NavDropdown>
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
            {/*<NavItem>
              <a href="https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Michael+Burton+Res.pdf" target="_blank" rel="noopener noreferrer" className="scrollLink">
                Resume
              </a>
            </NavItem>*/}
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
