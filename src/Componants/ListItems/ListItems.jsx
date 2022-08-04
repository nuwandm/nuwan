import React from "react";
import moment from "moment";
import './listItem.css';

// added comment to test git
function ListItems(props) {
    return (
        <li className="list-group-item shadow-sm">

            <div className="row align-items-center">
                <div className="col-2">
                    <img className="border border-dark shadow-sm rounded-circle" src={props.avater} alt={props.name} />
                </div>
                <div className="col-10">
                    {/* external css  */}
                    <h3 className="redText" > {props.name}</h3>
                    <p> {props.city} |  {props.email}</p>
                    {/* // formating date to british style using javascript liberary method two (Get  library - npm install moment) */}
                    <small>{moment(props.birthday).format('DD-MM-YYYY')} </small>
                </div>
            </div>


        </li>
    )
}
export default ListItems;   