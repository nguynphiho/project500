import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Header.module.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search } from 'react-bootstrap-icons';
import clsx from 'clsx';
import useScrollTop from '../../hook/custom.hook';

function OffcanvasExample() {
  const [isNotTop, setIsNotTop] = React.useState(false);
  const screenHeight = useScrollTop();
  const expand = "xl";
  
  React.useEffect(() => {
    if (screenHeight > 100) {
      setIsNotTop(true);
    } else {
      setIsNotTop(false);
    }
  }, [screenHeight]);

  return (
    <>
      <Navbar 
        fixed={'top'}
        key={expand} 
        expand={expand}
        className={clsx(styles.header, {
          isNotTopBackground: isNotTop
        })}
      >
        <Container>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} navbar="left"/>
          <Navbar.Brand className={clsx(styles.brand, {[styles.isNotTop]: isNotTop})} href="#">Fiverr <span style={{ color: '#1dbf73'}}>.</span></Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Fiverr.
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {
                isNotTop && (
                  <InputGroup className={'ml-3'}>
                    <Form.Control
                      className="black-form-control"
                      placeholder="What service are you looking for today?"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="dark" id="button-addon2" style={{borderRadius: 0}}>
                      <Search />
                    </Button>
                  </InputGroup>
                )
              }
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className={clsx(styles.navlink, { [styles.isNotTop] : isNotTop})} href="#action1">Fiverr Business</Nav.Link>
                <Nav.Link className={clsx(styles.navlink, { [styles.isNotTop] : isNotTop})} href="#action2">Explore</Nav.Link>
                <Nav.Link className={clsx(styles.navlink, { [styles.isNotTop] : isNotTop})} href="#action3">Become a Seller</Nav.Link>
                <Nav.Link className={clsx(styles.navlink, { [styles.isNotTop] : isNotTop})} href="#action4">Sign In</Nav.Link>
                <Button className={clsx(`primary-outline-button`, { 'is-not-top': isNotTop })}>Join</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
