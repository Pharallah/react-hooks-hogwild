import React from "react";

function Filter({ filter, setFilter }) {
    return (
        <label>
			<span>Show Greased Hogs Only </span>
			<input 
            type="checkbox"
            checked={ filter }
            onChange={e => setFilter(e.target.checked)}
            />
      	</label>
    )
}

export default Filter;