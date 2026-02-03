import React from "react";
import MoreInfoCard from "../../MoreInfoCard";
import { achievements } from "../../../data/achievements";

function Achievements() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
      gap-8 max-w-6xl mx-auto mt-14 mb-20 px-4"
    >
      {achievements.map((item) => (
        <MoreInfoCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Achievements;
