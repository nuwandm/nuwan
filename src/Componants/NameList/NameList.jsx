import React from "react";
import ListItems from "../ListItems/ListItems";


function NameList() {
  return (
    <React.Fragment>
      <h1>Course participants Name List</h1>
        <ul>
          <ListItems NO="01" name="Nuwan Madusanka" Course = ".net"/>
          <ListItems NO="02" name="Udara Maduranga" Course = "React"/>
          <ListItems NO="03" name="Kasun Kalhara" Course = "Java"/>
          <ListItems NO="04" name="Tharindu Nalinda" Course = "Visual Basic"/>
        </ul>
     
    </React.Fragment>
  )

}
export default NameList;