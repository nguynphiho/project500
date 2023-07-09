import React from 'react';
import styles from './CardCap.module.scss';
import { Card } from 'react-bootstrap';

const Index = ({ data }) => {
  console.log(data.avatar)
  return (
    <div style={{padding: 12}}>
      <Card>
        <Card.Img variant="top" src={data.image} className={styles.cardImage}/>
        <Card.Body className={styles.contentBody}>
          <img src={data.avatar} alt=''/>
          <div>
            <Card.Title  className={styles.contentTitle} >{data.title}</Card.Title>
            <Card.Text>{data.text}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Index;
