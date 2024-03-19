import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({ firstName: "John", lastName: "Boctor", age: 100 });
    const name = person.firstName + " " + person.lastName;
  
    const handleIncreaseAge = () => {
      console.log("in handleIncreaseAge (before setPerson call): ", person);
      setPerson({ ...person, age: person.age + 1 });
      // we've called setPerson, surely person has updated?
      console.log("in handleIncreaseAge (after setPerson call): ", person);
    };

    const handleFirstnameChange = (event) => {
        setPerson({...person, firstName: event.target.value});
    }

    const handleLastnameChange = (event) => {
        setPerson({...person, lastName: event.target.value});
    }
  
    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log("during render: ", person);
  
    return (
      <>
        <input
            type = "text"
            value = {person.firstName}
            onChange={handleFirstnameChange}
        />
        <input
            type = "text"
            value = {person.lastName}
            onChange={handleLastnameChange}
        />
        <h1>{name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }
  
export default Person;