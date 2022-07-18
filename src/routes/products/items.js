import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Items() {
    const items = [
        { id: 1, text: "Product 1", status: "completed" },
        { id: 2, text: "Product 2", status: "incomplete" },
        { id: 3, text: "Product 3", status: "incomplete" },
    ];
    return (
        items.map((item) => (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.id} />
                <Card.Body>
                    <Card.Title>{item.text}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">{item.status}</Button>
                </Card.Body>
            </Card>
        ))
    );
}

export default Items;