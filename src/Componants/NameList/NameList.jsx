import React from "react";
import ListItems from "../ListItems/ListItems";


function NameList() {
  return (
    <React.Fragment>
      <h1>Course participants Name List</h1>
        <ul>
          <ListItems NO="01" name="Nuwan Madusanka"/>
          <ListItems NO="02" name="Udara Maduranga"/>
          <ListItems NO="03" name="Kasun Kalhara"/>
          <ListItems NO="04" name="Tharindu Nalinda"/>
        </ul>
     
    </React.Fragment>
  )

}
export default NameList;