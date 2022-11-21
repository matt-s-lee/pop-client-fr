import styled from "styled-components";
// import { useSpringCarousel } from "react-spring-carousel";

import ResourceCard from "./ResourceCard";

const ResourceCarousel = ({ resources, tag }) => {
  const resourceDetails = resources.items;
  const assetDetails = resources.includes.Asset;
  const taggedResources = [];
  resourceDetails.forEach((resource) => {
    resource.metadata.tags.forEach((sysTag) => {
      if (sysTag.sys.id === tag) {
        taggedResources.push(resource);
      }
    });
  });

  // const { carouselFragment, slideToPrevItem, slideToNextItem } =
  //   useSpringCarousel({
  //     itemsPerSlide: 1,
  //     gutter: 15,
  //     items: taggedResources.map((resource) => ({
  //       id: resource.sys.id,
  //       renderItem: (
  //         <ResourceCard
  //           title={resource.fields.title}
  //           link={resource.fields.link}
  //           description={
  //             resource.fields.descriptionForSmallCard.content[0].content[0]
  //               .value
  //           }
  //           imageUrl={
  //             assetDetails.find((asset) => {
  //               return asset.sys.id === resource.fields.image.sys.id;
  //             }).fields.file.url
  //           }
  //         />
  //       ),
  //     })),
  //   });

  return (
    <CarouselWrapper>
      {/* {carouselFragment}
      <ButtonRow>
        <Button onClick={slideToPrevItem}>{"<"}</Button>
        <Button onClick={slideToNextItem}>{">"}</Button>
      </ButtonRow> */}
      {taggedResources.map((resource) => {
        return (
          <ResourceCard
            key={resource.sys.id}
            title={resource.fields.title}
            link={resource.fields.link}
            description={
              resource.fields.descriptionForSmallCard.content[0].content[0]
                .value
            }
            imageUrl={
              assetDetails.find((asset) => {
                return asset.sys.id === resource.fields.image.sys.id;
              }).fields.file.url
            }
          />
        );
      })}
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-left: 10%;
  padding-bottom: 1.5em;
  overflow: hidden;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1em;
`;

const Button = styled.button`
  width: 3em;
  height: 3em;
  border-radius: 80%;
  border: 1px solid darkgrey;
`;

export default ResourceCarousel;
