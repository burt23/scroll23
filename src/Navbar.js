import React from "react";
import Scroll from "react-scroll";
import {
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  MenuItem,
  Image
} from "react-bootstrap";

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
      <Navbar className="white" fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image
              className="szLogo"
              src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/SamZoll-Logo-2017.svg"
              alt="Sam Zoll Logo"
              responsive
              onClick={this.scrollToTop}
            />
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={1} title="Code" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>
                <Link href="#wiz" to="wiz" spy smooth duration={500} offset={-150}>
                  wizardsChess
                </Link>
              </MenuItem>
              <MenuItem eventKey={1.2}>
                <Link to="truckhunt" spy smooth duration={500} offset={-100}>
                  truckHunt
                </Link>
              </MenuItem>
              <MenuItem eventKey={1.3}>
                <Link to="privateList" spy smooth duration={500} offset={-100}>
                  privateList
                </Link>
              </MenuItem>
              <MenuItem eventKey={1.4}>
                <Link to="youIn" spy smooth duration={500} offset={-100}>
                  youIn
                </Link>
              </MenuItem>
              <MenuItem eventKey={1.5}>
                <Link to="uva" spy smooth duration={500} offset={-100}>
                  uva
                </Link>
              </MenuItem>
            </NavDropdown>
            <NavDropdown
              eventKey={1}
              title="Photography"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={2.1}>
                <Link to="weddings" spy smooth duration={500} offset={-150}>
                  Weddings
                </Link>
              </MenuItem>
              <MenuItem eventKey={2.2}>
                <Link to="fineArt" spy smooth duration={500} offset={-100}>
                  Fine Art
                </Link>
              </MenuItem><MenuItem eventKey={2.3}>
                <Link to="testimonials" spy smooth duration={500} offset={-100}>
                  Testimonials
                </Link>
              </MenuItem>
            </NavDropdown>
            <NavItem eventKey={3}>
              <Link to="music" spy smooth duration={300} offset={80}>
                Music
              </Link>
            </NavItem>
            <NavDropdown eventKey={4} title="Crafts" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>
                <Link to="woodwork" spy smooth duration={500} offset={-150}>
                  Woodworking
                </Link>
              </MenuItem>
              <MenuItem eventKey={4.2}>
                <Link to="electronics" spy smooth duration={500} offset={-100}>
                  Electronics
                </Link>
              </MenuItem>
            </NavDropdown>
            <NavItem eventKey={6}>
              <Link to="about" spy smooth duration={900}>
                About
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
