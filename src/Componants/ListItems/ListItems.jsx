import React from "react";
function ListItems(props) {
    return (
        <React.Fragment>
             <li> {props.NO}) Name = {props.name} </li>
        </React.Fragment>
    )
}
export default ListItems;