import React from "react";
import ListItems from "../ListItems/ListItems";


function NameList() {

  const nameList = {
    "name": {
      "title": 'Mr',
      "first": 'Jack',
      "last": 'Fernando'
    },
    "location": {
      city: 'Hemmathagama'
    },
    "email": "jennie.nichols@example.com",
    "dob": {
      "date": "1992-03-08T15:13:16.688Z",
      "age": 30
    },
    "picture": {
      "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
    },



  };

  return (
    <React.Fragment>
      <h1>Course participants Name List</h1>
        <ul>

          <ListItems
          // new style of string literals formatting strings  by  tilda = ``
          name={`${nameList.name.title} ${nameList.name.first} ${nameList.name.last}`} 
          city={nameList.location.city}
          email={nameList.email}
          birthday={nameList.dob.date}
          avater= {nameList.picture.medium}
          />

          {/* <ListItems  name="Udara Maduranga" Course = "React"/>
          <ListItems  name="Kasun Kalhara" Course = "Java"/>
          <ListItems  name="Tharindu Nalinda" Course = "Visual Basic"/> */}
        </ul>
     
    </React.Fragment>
  )

}
export default NameList;