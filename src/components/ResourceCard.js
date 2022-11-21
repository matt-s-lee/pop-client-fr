// import styled from "styled-components";
import Card from "react-bootstrap/Card";

const ResourceCard = ({ title, link, description, imageUrl }) => {
  return (
    <Card
      className="m-3"
      style={{ width: "18rem" }}
      onClick={() => window.open(link)}
    >
      <Card.Img variant="top" src={`https:${imageUrl}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;
