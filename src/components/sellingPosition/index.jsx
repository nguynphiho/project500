import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styles from './SellingPosition.module.scss'
import { CheckCircle } from 'react-bootstrap-icons';

const Index = () => {
  return (
    <div className={styles.sellingPropositionWrapper}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6} className='pr-3'>
            <h2>The best part? Everything.</h2>
            <ul>
              <li className={styles.textItem}>
                <h6>
                  <CheckCircle size={24}/>
                  Stick to your budget
                </h6>
                <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
              </li>
              <li className={styles.textItem}>
                <h6>
                  <CheckCircle size={24}/>
                  Get quality work done quickly
                </h6>
                <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
              </li>
              <li className={styles.textItem}>
                <h6>
                  <CheckCircle size={24}/>
                  Pay when you're happy
                </h6>
                <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
              </li>
              <li className={styles.textItem}>
                <h6>
                  <CheckCircle size={24}/>
                  Count on 24/7 support
                </h6>
                <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className={ styles.videoThumbnail}>
              <img className={ styles.playIcon } src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/desktop-play-button.bab1740.png" alt="play-icon"/>
              <img className={ styles.videoImage } src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="video" />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Index;
