import { useState } from 'react'
import data from './data'
function App() {
  const [openIndex, setOpenIndex] = useState(null)
  const [select, setSelect] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState([])
  
  function singleSelectionHandler(index){
    index===openIndex? setOpenIndex(null): setOpenIndex(index)
  }
  function multiSelectionHandler(index){
    const arr = [...selectedIndex]
    arr.includes(index)? arr.splice(index,1): arr.push(index)
    setSelectedIndex(arr)
  }
  return (
    <div className='bg-slate-500 flex justify-center items-center h-screen'>
      <div className='flex flex-col items-start'>
        <button onClick={()=>setSelect(prev=>!prev)} className='bg-red-300 mx-auto px-2 py-1 rounded-2xl'>
           {select? 'single':'multi'} selection mode</button>
        {data.map(
          (item, index)=>(
            <div onClick={select?()=>singleSelectionHandler(index): ()=>multiSelectionHandler(index)} className='bg-blue-300 mt-4 w-2xl rounded-md px-4 py-2'>
              <h1>{item.title}</h1>
              {select? (openIndex===index? (<p>{item.desc}</p>) : null): 
              (selectedIndex.includes(index)? (<p>{item.desc}</p>): null)}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App