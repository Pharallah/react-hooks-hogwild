import React, { useState } from "react";
import Filter from "./Filter";
import Sort from "./Sort";

function Form({ 
    filter, 
    setFilter,
    setSort,
    newHog,
    setNewHog,
    onAddNewHog
}) {

    function handleChange(e){
        const key = e.target.id
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setNewHog({ 
            ...newHog, 
            [key]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const addNewHog = {
            greased: newHog.greased,
            "highest medal achieved": newHog["highest medal achieved"],
            image: newHog.image,
            name: newHog.name,
            specialty: newHog.specialty,
            weight: newHog.weight
        }
        onAddNewHog(addNewHog)
        setNewHog({
            greased: false,
            "highest medal achieved": "initial",
            image: "",
            name: "",
            specialty: "",
            weight: ""
        })
    }

	return (
		<div>
			<form 
		    onSubmit={handleSubmit}
            style={{ 
            padding: "5px", 
            border: "1px solid gray", 
            display: "flex", 
            flexDirection: "column" 
		    }}
		>
                <label style={{display: "flex", flexDirection: "column"}}>
                    <h2>Add New Hog!</h2>
                    <input 
                        type="text"
                        id="name" 
                        placeholder="Hog Name"
                        value={newHog.name}
                        onChange={handleChange} 
                    />
                    <input 
                        type="text"
                        id="image"  
                        placeholder="Hog Image"
                        value={newHog.image}
                        onChange={handleChange}  
                    />
                    <input 
                        type="text"
                        id="specialty"  
                        placeholder="Specialty"
                        value={newHog.specialty}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        id="weight"  
                        placeholder="Weight"
                        value={newHog.weight}
                        onChange={handleChange}
                    />
                    <select
                    id="highest medal achieved"  
                    onChange={handleChange}
                    >
                        <option value="initial">Highest Medal Achieved</option>
                        <option value="wood">Wood</option>
                        <option value="bronze">Bronze</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="platinum">Platinum</option>
                        <option value="diamond">Diamond</option>
                    </select>
                    <span>Greased?</span>
                    <input 
                    type="checkbox"
                    id="greased"
                    checked={newHog.greased}
                    onChange={handleChange}
                    />
                    <br></br>
                    <button placeholder="Submit">Submit</button>
                </label>
    		</form>
            <Filter filter={filter} setFilter={setFilter}/>
            <br></br>
            <Sort setSort={setSort}/>
		</div>
	)
}

export default Form;