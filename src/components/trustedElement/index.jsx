import React from 'react';
import { Stack } from 'react-bootstrap';
import styles from './TrustedElement.module.scss'

const Index = () => {
  return (
    <div className={styles.trustedByWrapper}>
      <div className="trusted-by">
        <Stack  direction="horizontal" gap={3} className="justify-content-center">
          <div className={styles.trustedBlock}>
            Trusted by
          </div>
          <div className={styles.trustedBlock}>
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" alt="facebook" />
          </div>
          <div className={styles.trustedBlock}>
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png" alt="Google" />
          </div>
          <div className={styles.trustedBlock}>
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png" alt="NETFLIX" />
          </div>
          <div className={styles.trustedBlock}>
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png" alt="P&amp;G" />
          </div>
          <div className={styles.trustedBlock}>
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png" alt="PayPal" />
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Index;
