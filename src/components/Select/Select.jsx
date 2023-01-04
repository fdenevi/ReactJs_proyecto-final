import './Select.css'

function Select ({options, onSelect}) {
  return (
    <select 
      onChange={(evt) => onSelect(Number(evt.target.value))}
      id="optionSelect"
    >
      {
        options.map((val) => (
            <option key={val.value}>
              {val.text}
            </option>
        ))
      }
    </select>
  )
}


export default Select