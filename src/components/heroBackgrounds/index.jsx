import React from 'react';
import styles from './HeroBackground.module.scss';
import { clsx } from 'clsx';
import { Button, Container, Form, InputGroup, Stack } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import FiveStarIcon from '../fiveStarIcon/index';

const Index = () => {
  
  return (
    <div className={ styles.heroWrapper }>
      <div className={ styles.heroBackgrounds }>
        <div className={ clsx([styles.heroValentina, styles.backgroundSetup])}>
          <div className={ styles.sellerName }>
            <p>
              <FiveStarIcon/>
              <b>AI Artist</b>
            </p>
          </div>
        </div>
        <div className={ clsx([styles.heroAndrea, styles.backgroundSetup])}>
          <div className={ styles.sellerName }>
            <p>
              <FiveStarIcon/>
              <b>Fashion Designer</b>
            </p>
          </div>
        </div>
        <div className={clsx([styles.heroMoon, styles.backgroundSetup])}>
          <div className={ styles.sellerName }>
            <p>
              <FiveStarIcon/>
              <b>Marketing Expert</b>
            </p>
          </div>
        </div>
        <div className={ clsx([styles.heroRitika, styles.backgroundSetup])}>z
          <div className={ styles.sellerName }>
            <p>
              <FiveStarIcon/>
              <b>Shoemaker and Designer</b>
            </p>
          </div>
        </div>
        <div className={ clsx([styles.heroZach, styles.backgroundSetup])}>
          <div className={ styles.sellerName }>
            <p>
              <FiveStarIcon/>
              <b>Bar Owner</b>
            </p>
          </div>
        </div>
        <div className={ clsx([styles.heroGabrielle, styles.backgroundSetup])}>
          <div className={ styles.sellerName }>
            <p>
              <FiveStarIcon/>
              <b>Video Editor</b>
            </p>
          </div>
        </div>
      </div>
      <Container
        className={clsx([styles.heroContent, 'd-flex', 'align-items-center'])}
      >
        <div className={styles.header}>
          <h1 className={styles.fontDomaine}><span>Find the right <i>freelance service</i>, right away</span></h1>
          <div className={styles.searchBarPackage}>
            <InputGroup className={'ml-3'} size='lg'>
              <Form.Control
                className="black-form-control"
                placeholder="Search for any service..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button size='lg' variant="success" id="button-addon2" style={{borderRadius: 0}}>
                <Search />
              </Button>
            </InputGroup>
          </div>
          <div className={ clsx([styles.popular, "d-flex"]) }>
            <span> Popular: </span>
            <Stack direction="horizontal" gap={2}>
              <Button className='button-badge' variant="outline-light">Website Design</Button>
              <Button className='button-badge' variant="outline-light">WordPress</Button>
              <Button className='button-badge'variant="outline-light">Logo Design</Button>
              <Button className='button-badge' variant="outline-light">AI Services</Button>
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};



export default Index;
