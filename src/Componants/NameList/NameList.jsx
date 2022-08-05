import React, { useState, useEffect} from "react";
import ListItems from "../ListItems/ListItems";


function NameList() {
  const [loadData, setLoadData]= useState(new Date);
  const [nameList, setNameList] = useState([
    {
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
      "email": "Maduranga@gmail.com",
      "dob": { "date": "1988-03-08T15:13:16.688Z", "age": 30 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/73.jpg", },
    },
    {
      id: 3,
      "name": { "title": 'Mr', "first": 'Nuwan', "last": 'Madusanka' },
      "location": { city: 'Hemmathagama' },
      "email": "Nuwanmadusanka@gmail.com",
      "dob": { "date": "1992-03-08T15:13:16.688Z", "age": 30 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/76.jpg", },
    }
  ]
  );

  useEffect(()=>{
     fetch("https://www.randomuser.me/api").then(Response =>{
      return Response.json();
     }).then(ResponseData =>{
      setNameList(nameList=> [...nameList,ResponseData.results[0]])
     });
  },[loadData]);

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

  const addUserHandler = () => {
    setLoadData(new Date);
  }



  return (
    <React.Fragment>
      
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
        <ul className="list-group">{nameListComponant()}</ul>
      </div>

      
     
    </React.Fragment>
  )

}
export default NameList;
