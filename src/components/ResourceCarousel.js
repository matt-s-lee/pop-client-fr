import { useContext } from "react";
import styled from "styled-components";
import { useSpringCarousel } from "react-spring-carousel";

import ResourceCard from "./ResourceCard";
import { ResourcesContext } from "../contexts/ResourcesContext";

const ResourceCarousel = () => {
  const { resources } = useContext(ResourcesContext);
  const assetDetails = resources.includes.Asset;

  const test = [];
  assetDetails &&
    assetDetails.forEach((asset) => {
      test.push(asset.sys.id);
      test.push(resources.fields.image.sys.id);
    });
  console.log(test);

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 3,
      gutter: -1,
      items: resources.items.map((resource) => ({
        id: resource.sys.id,
        renderItem: (
          <ResourceCard
            title={resource.fields.title}
            link={resource.fields.link}
            description={
              resource.fields.descriptionForSmallCard.content[0].content[0]
                .value
            }
          />
        ),
      })),
      // [
      //   {
      //     id: "item-1",
      //     renderItem: <ResourceCard />,
      //   },
      //   {
      //     id: "item-2",
      //     renderItem: <ResourceCard />,
      //   },
      //   {
      //     id: "item-3",
      //     renderItem: <ResourceCard />,
      //   },
      //   {
      //     id: "item-4",
      //     renderItem: <ResourceCard />,
      //   },
      //   {
      //     id: "item-5",
      //     renderItem: <ResourceCard />,
      //   },
      // ],
    });

  return (
    <CarouselWrapper>
      {carouselFragment}
      <ButtonRow>
        <Button onClick={slideToPrevItem}>{"<"}</Button>
        <Button onClick={slideToNextItem}>{">"}</Button>
      </ButtonRow>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  width: 100%;
  padding-bottom: 1.5em;
  overflow: hidden;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  border-radius: 50%;
  border: 1px solid darkgray;
`;

export default ResourceCarousel;
