import React from 'react';
import styles from './Footer.module.scss';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin, Pinterest, Twitter, UniversalAccess } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={8} xl={8} className='d-flex'>
            <Col xs={4}>
              <p className={styles.title}> Categories </p>
              <Stack direction="vertical" gap={2} className={ styles.stackMenu }>
                <p>Graphics & Design</p>
                <p>Digital Marketing</p>
                <p>Writing & Translation</p>
                <p>Video & Animation</p>
                <p>Music & Audio</p>
                <p>Programming & Tech</p>
                <p>Data</p>
                <p>Business</p>
                <p>Lifestyle</p>
                <p>Photography</p>
                <p>End-to-End Projects</p>
                <p>Sitemap</p>
              </Stack>
            </Col>
            <Col xs={4}>
              <p className={styles.title}> About </p>
              <Stack direction="vertical" gap={2} className={ styles.stackMenu }>
                <p>Careers</p>
                <p>Press & News</p>
                <p>Partnerships</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Intellectual Property Claims</p>
                <p>Investor Relations</p>
              </Stack>
            </Col>
            <Col xs={4}>
              <p className={styles.title}> Support </p>
              <Stack direction="vertical" gap={2} className={ styles.stackMenu }>
                <p>Help & Support</p>
                <p>Trust & Safety</p>
                <p>Selling on Fiverr</p>
                <p>Buying on Fiverr</p>
                <p>Fiverr Guides</p>
              </Stack>
            </Col>
          </Col>

          <Col xs={12} md={12} lg={4} xl={4} className='d-flex'>
            <Col xs={6}>
              <p className={styles.title}> Support </p>
              <Stack direction="vertical" gap={2} className={ styles.stackMenu }>
                <p>Help & Support</p>
                <p>Trust & Safety</p>
                <p>Selling on Fiverr</p>
                <p>Buying on Fiverr</p>
                <p>Fiverr Guides</p>
              </Stack>
            </Col>
            <Col xs={6}>
              <p className={styles.title}> More From Fiverr </p>
              <Stack direction="vertical" gap={2} className={ styles.stackMenu }>
                <p>HestackMenulp & Support</p>
                <p>Trust & Safety</p>
                <p>Selling on Fiverr</p>
                <p>Buying on Fiverr</p>
                <p>Fiverr Guides</p>
              </Stack>
            </Col>
          </Col>
        </Row>
        <Row className={styles.footerBottom}>
          <Col className={styles.logo} xs={5}>
            <span className={styles.name}> Fiverr </span>
            <span className={styles.copyRight}> © Fiverr International Ltd. 2023 </span>
          </Col>
          <Col className={styles.social} xs={4}>
            <Stack direction="horizontal" gap={3} className={styles.stackSocial}>
              <Twitter />
              <Facebook />
              <Linkedin />
              <Pinterest />
              <Instagram />
            </Stack>
          </Col>
          <Col className={styles.settingButton} xs={3}>
            <span> English </span>
            <span> USD </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
