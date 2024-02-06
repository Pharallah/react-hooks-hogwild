import React, { useState } from "react";
import CardDetails from "./CardDetails";
import { Card, Image, Button, Checkbox, Divider } from "semantic-ui-react";

function HogCard({ 
	name, 
	image,
	specialty,
	weight,
	greased,
	highestMedal
  }) {
	const [showDetails, setShowDetails] = useState(false)
	const [hide, setHide] = useState(false)

    // Toggles the Hog Details
	function handleClick() {
		if(showDetails === false) {
            setShowDetails(true)
        } else {
            setShowDetails(false)
        }
	}
	
	function handleHide() {
		if (hide === false) {
			setHide(true)
		} else {
			setHide(false)
		}
	}

	return(
		<Card 
		className="ui eight wide column"
		style={{ padding: "16px", border: "1px black"}}
		>
			{ hide ? null : <Image src={image} /> }
			{ hide ? null : <Card.Content>
				<Card.Header>{ name }</Card.Header>
				{ showDetails ? <CardDetails 
                specialty={specialty}
                weight={weight}
                greased={greased}
                highestMedal={highestMedal}
                /> : null}
			</Card.Content> }
			{ hide ? null : <Button onClick={handleClick}>Show Hog Details</Button> }
			<Divider hidden></Divider>
			<Checkbox toggle onChange={handleHide}></Checkbox>
			<Divider hidden>Hide Hog</Divider>
		</Card>
	)
}

export default HogCard;