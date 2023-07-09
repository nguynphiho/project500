import React from 'react';
import Card from 'react-bootstrap/Card';

const Index = ({ data }) => {
  return (
    <div style={{ padding: 12 }}>
      <Card className="bg-dark text-white">
        <Card.Img src={ data.image } alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text>{data.text}</Card.Text>
          <Card.Title> {data.title} </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Index;
