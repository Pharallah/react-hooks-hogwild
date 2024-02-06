import React from "react";

function Sort({ setSort }) {
    return (
        <label>
			<span>Sort By: </span>
			<select onChange={e => setSort(e.target.value)}>
                <option value="all">All</option>
                <option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>
		</label>
    )
}

export default Sort