import React from "react";
import { FeatureCard } from "../common/cards/feature/FeatureCard";
import { FeaturesData } from "../../assets/data/FeaturesData";
import "./features.css";

const Features = () => {
  return (
    <div className="feat-container container">
      {FeaturesData.length &&
        FeaturesData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
    </div>
  );
};

export default Features;
