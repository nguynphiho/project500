import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import styles from './LogoMaker.module.scss'

const Index = () => {
  return (
    <div className={styles.sellingPropositionWrapper}>
      <Container className={ styles.logomakerContainer }>
        <Row className={ styles.logomakerRow }>
          <Col xs={12} md={6} lg={6} xl={6} className='pr-3 mb-3'>
            <p className={styles.brandName}>fiverr <span> LogoMaker. </span></p>
            <h2 className={styles.fontDomaine}>Make an incredible logo in minutes</h2>
            <p className={styles.textBody}> Pre-designed by top talent. Just add your touch. </p>
            <Button variant='light' className={styles.submitButton}>Try Fiverr Logo Maker</Button>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6} >
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Index;
