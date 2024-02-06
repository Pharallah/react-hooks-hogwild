import React from "react";
import { Card } from "semantic-ui-react";

function CardDetails({ 
    specialty,
	weight,
	greased,
	highestMedal
}) {
    
    //Capitalizes highestMedal text
    const capitalized = highestMedal.charAt(0).toUpperCase() + highestMedal.slice(1)
    
    return(
        <Card.Meta>
            <p style={{fontWeight: "bold"}}>Specialty: </p>
                <span>{ specialty }</span>
			<p style={{fontWeight: "bold"}}>Weight: </p>
                <span>{ weight }</span>
			<p style={{fontWeight: "bold"}}>Greased Status: </p>
                <span>{ greased ? "Yes" : "No" }</span>
			<p style={{fontWeight: "bold"}}>Highest Medal Achieved:</p>
                <span>{ capitalized }</span>
		</Card.Meta>
    )
}

export default CardDetails;