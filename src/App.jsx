import { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format';
import InputIcon from './components/InputIcon'
import RadioButton from './components/RadioButton'

function App() {
  const [tipByPerson, setTipByPerson] = useState(0)
  const [totalByPerson, setTotalByPerson] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState('')
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [customTip, setCustomTip] = useState('')

  const tips = [5, 10, 15, 25, 50]

  
  useEffect(() => {
    if (bill && numberOfPeople && (tip || customTip) ) {
      const result = (bill * ((tip ?? customTip) / 100)) / numberOfPeople
      setTipByPerson(result)
      setTotalByPerson((bill / numberOfPeople) + result)
    }
  }, [bill, tip, numberOfPeople, customTip])

  const resetForm = () => {
    setTipByPerson(0)
    setTotalByPerson(0)
    setNumberOfPeople('')
    setBill('')
    setTip('')
    setCustomTip('')
  }

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen bg-neutral-light-01">
      {/* Logo */}
      <div className="mt-12 md:mt-0">
        <img src="/img/logo.svg" alt="Splitter Logo" />
      </div>

      <div className="w-full max-w-4xl mt-10 md:mt-20 p-8 md:p-10 bg-white rounded-t-3xl md:rounded-3xl md:shadow-md">
        <form>
          <div className="grid md:grid-cols-2 gap-x-10 text-xl">
            {/* Coluna 1 */}
            <div className="space-y-7 md:space-y-10">
              {/* Bill */}
              <InputIcon 
                icon="icon-dollar" 
                label="Bill"
                id="bill"
                value={bill}
                setValue={setBill}
                placeholder="0"
              />

              <div>
                <p className="text-neutral-dark-01 font-bold text-base">Select Tip %</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {tips.map(tipItem => (
                    <RadioButton 
                      key={tipItem}
                      name="tip" 
                      item={tipItem} 
                      itemCompare={tip}
                      setItemCompare={setTip} 
                    />
                  ))}
                  <div>
                    <input 
                      className="w-full h-full px-4 font-bold placeholder-neutral-veryDark text-neutral-dark-01 bg-neutral-light-02 rounded-md" 
                      type="text" 
                      placeholder="Custom" 
                      value={customTip} 
                      onChange={(e) => {setTip(null); setCustomTip(e.target.value)}} 
                    />
                  </div>
                </div>
              </div>

              {/* Number of People */}
              <InputIcon 
                icon="icon-person" 
                label="Number of People"
                id="numberOfPeople"
                value={numberOfPeople}
                setValue={setNumberOfPeople}
                placeholder="0"
              />
            </div>

            {/* Coluna 2 */}
            <div className="p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-between bg-neutral-veryDark text-white rounded-xl">
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col font-bold">
                    <span className="text-base">Tip Amount</span>
                    <span className="text-xs font-bold text-neutral-dark-02">/ person</span>
                  </div>
                  <NumberFormat 
                    className="font-bold text-primary text-2xl md:text-5xl" 
                    value={tipByPerson} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'} 
                    decimalScale={2} 
                    fixedDecimalScale={true} 
                  />
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex flex-col font-bold">
                    <span className="text-base">Total</span>
                    <span className="text-xs font-bold text-neutral-dark-02">/ person</span>
                  </div>
                  <NumberFormat 
                    className="font-bold text-primary text-2xl md:text-5xl" 
                    value={totalByPerson} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'} 
                    decimalScale={2} 
                    fixedDecimalScale={true} 
                  />
                </div>
              </div>

              <button 
                className="w-full py-2 mt-10 md:mt-0 bg-primary hover:bg-neutral-light-01 text-neutral-veryDark uppercase font-bold rounded transition-colors"
                type="button"
                onClick={() => resetForm()}
              >
                Reset
              </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 

export default App
