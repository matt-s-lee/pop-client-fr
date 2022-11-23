import styled from "styled-components";

const ResourceCard = ({ title, link, description, imageUrl }) => {
  // Only attempt to render if all elements present
  return (
    title &&
    link &&
    description &&
    imageUrl && (
      <Card onClick={() => window.open(link)}>
        <Image src={`https:${imageUrl}`} />
        <Body>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </Body>
      </Card>
    )
  );
};

const Card = styled.div`
  width: 17rem;
  height: 19rem;
  margin: 1em;
  border: 1px solid #ececec;
  background-color: white;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (min-width: 1000px) {
    /* width: 17rem;
    height: 19rem; */
  }
  @media (min-width: 1250px) {
    width: 18rem;
    height: 20rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const Body = styled.div`
  display: block;
  margin: 1em;
  padding: 0.5em;
`;

const Title = styled.div`
  color: #333333;
  font-size: 16px;
  font-weight: 600;
`;

const Text = styled.p`
  color: #666666;
  /* overflow: hidden; */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */
  /* line-height: 1.5em; */
  /* max-height: 6em; */
  /* white-space: nowrap; */
`;

export default ResourceCard;
