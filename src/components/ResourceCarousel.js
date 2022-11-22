import styled from "styled-components";

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

  return (
    <ResourceWrapper>
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
    </ResourceWrapper>
  );
};

const ResourceWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-left: 10%;
  padding-bottom: 1.5em;
  overflow: hidden;
`;

export default ResourceCarousel;
