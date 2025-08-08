import React, { useState , useCallback} from 'react'

function App() {

  const[length , setlength] = useState(8);
  const[numallow ,setnumallow] =useState(false);
  const[charallow ,setcharallow] =useState(false);
  const[pass,setpass]= useState("")

  const passgent = useCallback(()=>{
    let pass=''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz"
    if(numallow) str +="0123456789"
    if(charallow) str+="@$%*"

    for(let i=1; i<=Array.length;i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass=str.charAt(char)
    }

    setpass(pass)




  },[length,numallow,charallow,setpass])




  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>Password Generator </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
         type="text"
         value={pass}
         className='outline-none w-full py-1 px-3 text-white bg-gray-500'
         placeholder='password'
         readOnly
        
        />
      </div>

    </div>
    </>
  )
}

export default App