import React, { useRef, useState } from "react";

const Flames = () => {
  let name1 = useRef();
  let name2 = useRef();
  let [result,setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let str1 = name1.current.value;
    let str2 = name2.current.value;
 
    if(str1=="" || str2==""){
        setResult("Please Enter valid input")
        return;
    }

    let arr1 = str1.split("");
    let arr2 = str2.split("");

    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);
      if (index != -1) {
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--;
      }
    }

    let total = arr1.length + arr2.length;
    let relationship = [
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
      "Siblings",
    ];

    setResult(relationship[total%6]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter first name" ref={name1}  data-testid="input1" name="name1"/>
        <input type="text" placeholder="Enter second name" ref={name2} data- testid="input2" name="name2"/>
        <button type="submit" testid="calculate_relationship" name="calculate_relationship">
        Calculate Relationship Future</button>
        <button type="reset" data-testid="clear" name="clear">
            Clear</button>
      </form>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default Flames;
