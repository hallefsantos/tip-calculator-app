const InputIcon = ({ placeholder, label, id, value, setValue, icon }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-base font-bold">
        <label className="text-neutral-dark-01" htmlFor={id}>
          {label}
        </label>
        {value === 0 && (        
          <span className="text-red-500">Can't be zero</span>
        )}
      </div>
      <div className="relative mt-2">
        <img className="absolute left-4 top-1/2 transform -translate-y-1/2" src={`/img/${icon}.svg`} alt={icon} />
        <input 
          id={id} 
          className={`w-full py-2 md:py-3 px-3 md:px-4 text-right bg-neutral-light-02 rounded-md focus:outline-none border-2 ${value === 0 ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-neutral-veryDark'}`}
          type="text" 
          placeholder={placeholder}
          onChange={(e) => setValue(+e.target.value)}
          value={value}
        />
      </div>
    </div>
  )
}

export default InputIcon
