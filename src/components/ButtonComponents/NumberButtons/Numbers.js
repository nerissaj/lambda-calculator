import React from "react";
import Operators from '../Operators.js';
//import any components needed
import (Specials) from '../Specials.js';
//Import your array data to from the provided data file
import { numbers } from './data';
const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const text= props
  const [numbers, setNumbers] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       numbers.map(Numbers).props
    </div>
  );
};


export default Numbers;