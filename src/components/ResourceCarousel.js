import { useState, useEffect } from "react";
import styled from "styled-components";

import ResourceCard from "./ResourceCard";
import CarouselContainer from "./CarouselContainer";

const ResourceCarousel = ({ resources, tag }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const resourceDetails = resources.items; // Details for all resources
  const assetDetails = resources.includes.Asset; // Details for all assets, to link to resources
  const taggedResources = []; // Array of all resources matching the section tag (e.g. typeSleep)

  //------------------------------------------------------------------
  // Logic to detect if mobile device used (to render image carousel)
  //------------------------------------------------------------------

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  let isMobile = width <= 600;

  //-----------------------------------------------------------------------------------
  // If section tag from props (e.g. typeSleep, typeNeuroscience) matches resource tag,
  // push to taggedResources[]
  //-----------------------------------------------------------------------------------

  if (tag) {
    resourceDetails.forEach((resource) => {
      resource.metadata.tags.forEach((sysTag) => {
        if (sysTag.sys.id === tag) {
          taggedResources.push(resource);
        }
      });
    });
  }

  return (
    <>
      {isMobile ? (
        <CarouselContainer
          taggedResources={taggedResources}
          assetDetails={assetDetails}
        />
      ) : (
        <ResourceWrapper>
          {taggedResources.length > 0 &&
            taggedResources.map((resource) => {
              return (
                <ResourceCard
                  key={resource.sys.id}
                  title={resource.fields.title}
                  link={resource.fields.link}
                  description={
                    resource.fields.descriptionForSmallCard.content[0]
                      .content[0].value
                  }
                  imageUrl={
                    assetDetails.find((asset) => {
                      return asset.sys.id === resource.fields.image.sys.id;
                    }).fields.file.url
                  }
                />
              );
            })}
        </ResourceWrapper>
      )}
    </>
  );
};

const ResourceWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  padding-bottom: 1.5em;
  overflow: hidden;

  @media (min-width: 780px) {
    /* padding: 0 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1em; */
    /* justify-content: flex-start; */
  }

  @media (min-width: 1000px) {
    /* grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2em; */
  }
`;

export default ResourceCarousel;
