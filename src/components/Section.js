import { useContext } from "react";
import { ResourcesContext } from "../contexts/ResourcesContext";

import ResourceCarousel from "./ResourceCarousel";

export default function Section({ title, description, tag }) {
  const { resources } = useContext(ResourcesContext);

  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
      {resources && <ResourceCarousel resources={resources} tag={tag} />}
    </>
  );
}
