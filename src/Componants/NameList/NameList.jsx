import React from "react";
import ListItems from "../ListItems/ListItems";


function NameList() {

  const nameList = [{
    id: 1,
    "name": { "title": 'Mr', "first": 'Jack', "last": 'Fernando' },
    "location": { city: 'Mawanella' },
    "email": "jennie.nichols@example.com",
    "dob": { "date": "1990-03-08T15:13:16.688Z", "age": 30 },
    "picture": { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", },
    },
    {
      id: 2,
      "name": { "title": 'Mr', "first": 'Udara', "last": 'Maduranga' },
      "location": { city: 'Kegalla' },
      "email": "jennie.nichols@example.com",
      "dob": { "date": "1988-03-08T15:13:16.688Z", "age": 30 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/73.jpg", },
    },
    {
      id: 3,
      "name": { "title": 'Mr', "first": 'Nuwan', "last": 'Madusanka' },
      "location": { city: 'Hemmathagama' },
      "email": "Nuwan.nichols@example.com",
      "dob": { "date": "1992-03-08T15:13:16.688Z", "age": 30 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/76.jpg", },
    }];

  const nameListComponant = () => {
    return (
      nameList.map(aName => {
        return (
          <ListItems
            key={aName.id}
            // new style of string literals formatting strings  by  tilda = ``
            name={`${aName.name.title} ${aName.name.first} ${aName.name.last}`}
            city={aName.location.city}
            email={nameList[0].email}
            birthday={aName.dob.date}
            avater={aName.picture.medium}
          />
        )

      })
    );
  }


  return (
    <React.Fragment>
      <h1>Course participants Name List</h1>
      <ul>
        {nameListComponant()}
      </ul>
     
    </React.Fragment>
  )

}
export default NameList;