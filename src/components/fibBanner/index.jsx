import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import styles from './FibBanner.module.scss'
import { CheckCircle } from 'react-bootstrap-icons';

const Index = () => {
  return (
    <div className={styles.sellingPropositionWrapper}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6} className='pr-3 mb-3'>
            <p className={styles.brandName}>fiverr <span> business </span></p>
            <h2 className={styles.fontDomaine}>A solution built for business</h2>
            <p className={styles.textBody}> Upgrade to a curated experience to access vetted talent and exclusive tools </p>
            <ul>
              <li className={styles.textItem}>
                <h6>
                  <CheckCircle size={24}/>
                  Stick to your budget
                </h6>
              </li>
              <li className={styles.textItem}>
                <h6>
                  <CheckCircle size={24}/>
                  Get quality work done quickly
                </h6>
              </li>
              <li className={styles.textItem}>
                <h6>
                  <CheckCircle size={24}/>
                  Pay when you're happy
                </h6>
              </li>
              <li className={styles.textItem}>
                <h6>
                  <CheckCircle size={24}/>
                  Count on 24/7 support
                </h6>
              </li>
            </ul>
            <Button variant='success'>Explore Fiverr Business</Button>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6} >
            <div className={ styles.videoThumbnail}>
              <img className={ styles.videoImage } src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="video" />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Index;
