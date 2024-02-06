import React, { useState } from "react";
import Nav from "./Nav";
import Form from "./Form"
import HogContainer from "./HogContainer";

import hogs from "../porkers_data";

console.log(hogs)

/*
App
|__Nav
|__Form(add new hogs) STATE
	|__Filter (greased?) STATE
	|__Sort (based on name or weight) STATE
|__Hog Container (Where hogs are displayed)
	|--Hog Card
*/

function App() {
    const [filter, setFilter] = useState(false)
	const [sort, setSort] = useState("all")
	const [hogsArray, setHogsArray] = useState(hogs)
	const [newHog, setNewHog] = useState({
        greased: false,
        "highest medal achieved": "initial",
        image: "",
        name: "",
        specialty: "",
        weight: ""
    })

	function onAddNewHog(addNewHog) {
		const newHogsArray = [ 
			...hogsArray, 
			addNewHog
		]
		setHogsArray(newHogsArray)
	}

	return (
		<div className="App">
			<Nav />
			<Form 
			filter={filter}
			setFilter={setFilter}
			setSort={setSort}
			newHog={newHog}
			setNewHog={setNewHog}
			onAddNewHog={onAddNewHog}
			/>
			<HogContainer 
			filter={filter}
			sort={sort}
			hogsArray={hogsArray}
			/>
		</div>
	);
}

export default App;


