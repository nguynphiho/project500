import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { fiverrGuidesData } from '../../fakedata';
import { Button, Container } from 'react-bootstrap';
import styles from './FiverrGuides.module.scss';

function Index() {
  const data = fiverrGuidesData;
  return (
    <div className={ styles.guidesWrapper }>
      <Container>
        <h1 className={styles.title}>Guides to help you grow</h1>
        <Row xs={1} md={3} className="g-4">
        {data.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{ item.title }</Card.Title>
                <Card.Text>
                  { item.text }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
        <div className={styles.joinFiverr}>
          <h1> Suddenly it's all so doable. </h1>
          <Button variant="success"> Join Fiverr </Button>
        </div>
      </Container>
      
    </div>
    
  );
}
export default Index;