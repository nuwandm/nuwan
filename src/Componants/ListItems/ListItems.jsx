import React from "react";
import moment from "moment";

// added comment to test git
function ListItems(props) {
    return (
        <React.Fragment>
            <p><img src={props.avater} /> {props.name}</p>
            <p> e-mail: {props.email}</p>
            <p> City: {props.city}</p>
            {/* // formating date to british style using javascript liberary method two (Get  library - npm install moment) */}
            <p> Birthday: {moment(props.birthday).format('DD-MM-YYYY')}</p>  
        </React.Fragment>
    )
}
export default ListItems;