import React from "react";
import HogCard from "./HogCard";

function HogContainer({ hogsArray, filter, sort }) {

    //Filter & Sort Feature
    const filteredAndSortedHogs = hogsArray
    .filter((hog) => {
      if (filter === false) {
        return true;
      }
      if (filter === true && hog.greased === true) {
        return true;
      }
      return false;
    })
    .sort((a, b) => {
      if (sort === "all") {
        return 0; // No sorting when "All" is selected
      } else if (sort === "name") {
        return a.name.localeCompare(b.name);
      } else if (sort === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });
    
    //Main Display
    const displayHogs = filteredAndSortedHogs.map(hog => {
		return <HogCard 
		key={hog.name} 
		name={hog.name} 
		image={hog.image}
		specialty={hog.specialty}
		weight={hog.weight}
		greased={hog.greased}
		highestMedal={hog["highest medal achieved"]}
		/>
	})

	return (
		<div 
		className="ui grid container"
		style={{ padding: "30px", border: "1px black"}}
		>
			{displayHogs}
		</div>
	)
}

export default HogContainer;