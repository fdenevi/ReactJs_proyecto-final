import { useState } from "react";
import Select from "../Select/Select";


export default function OptionSelect() {

    const options = [
        { value: 35, text: "35" },
        { value: 36, text: "36" },
        { value: 37, text: "37" },
        { value: 38, text: "38" },
        { value: 39, text: "39" },
        { value: 40, text: "40" }
    ]
  
    const [option, setOption] = useState();
  
      function onAdd(value) {
          setOption(value);
          console.log(value)
      }
        
      return (
          <>
              <Select 
                  options={options} 
                  onSelect={onAdd} 
                  defaultOption={option} 
              />        
          </>
      )
  }