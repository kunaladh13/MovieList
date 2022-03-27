import React from "react";

const searchBox = (props) => {
    return(
        <div className='col col-sm-4'>
        <input className="form-control" placeholder="Search"
               value={props.value}
               onChange={(event) => props.setSearchValue(event.target.value)}></input></div>
    );
};

export default searchBox;