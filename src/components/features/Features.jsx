import React from "react";
import { Card } from "../common/card/Card";
import { FeaturesData } from "../../assets/data/FeaturesData";

const Features = () => {
  return (
    <div className="feat-container container">
      {FeaturesData.length &&
        FeaturesData.map((feature) => (
          <Card key={feature.id} feature={feature} />
        ))}
    </div>
  );
};

export default Features;
