import styled from "styled-components";

const ResourceCard = ({ title, link, description, imageUrl }) => {
  return (
    <Card onClick={() => window.open(link)}>
      <Image src={`https:${imageUrl}`} />
      <Body>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Body>
    </Card>
  );
};

const Card = styled.div`
  width: 18rem;
  height: 20rem;
  margin: 1em;
  border: 1px solid #ececec;
  background-color: white;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const Body = styled.div`
  margin: 1em;
`;

const Title = styled.div`
  color: #333333;
  font-size: 16px;
  font-weight: 600;
`;

const Text = styled.div`
  color: #666666;
`;

export default ResourceCard;
