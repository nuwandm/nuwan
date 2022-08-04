import React from "react";
import ListItems from "../ListItems/ListItems";


function NameList() {
  return (
    <React.Fragment>
      <h1>Course participants Name List</h1>
        <ul>

          <ListItems  
          name="Nuwan Madusanka" 
          Course = ".net"
          />

          {/* <ListItems  name="Udara Maduranga" Course = "React"/>
          <ListItems  name="Kasun Kalhara" Course = "Java"/>
          <ListItems  name="Tharindu Nalinda" Course = "Visual Basic"/> */}
        </ul>
     
    </React.Fragment>
  )

}
export default NameList;