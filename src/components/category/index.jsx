import React from 'react';
import styles from './Category.module.scss';

const Index = () => {
  return (
    <div className={ styles.categoryCard }>
      <div className={ styles.title }>
        <p> Add talent to AI </p>
        <p> AI Artists </p>
      </div>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" alt="" />
    </div>
  );
}

export default Index;
