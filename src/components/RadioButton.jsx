const RadioButton = ({ name, item, itemCompare, setItemCompare, setCustomItem }) => {
  return (
    <div>
      <input 
        className="hidden" 
        type="radio" 
        id={item} 
        name={name} 
        value={item} 
        onChange={() => {setItemCompare(item); setCustomItem('')}}
      />
      <label 
        className={`block w-full py-2 text-center font-bold rounded cursor-pointer transition-colors hover:bg-primary hover:text-neutral-veryDark ${item === itemCompare ? 'bg-primary text-neutral-veryDark' : 'text-white bg-neutral-veryDark'}`} 
        htmlFor={item}
      >
        {item}%
      </label>
    </div>
  )
}

export default RadioButton
