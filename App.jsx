import React,{useRef, useState} from 'react'
import IMG from "./images.jpg"




const App = () => {
    let [photo,setPhoto]=useState(IMG)
    let [loding,setLoading]=useState(true)
    let imgRef=useRef()
    let handelchange=()=>{
        if(loding)
        {
            setLoading(false)
            imgRef.current.style.borderRadius="25%"
            imgRef.current.style.border="2px solid blue"
        }
        else{
            setLoading(true)
            imgRef.current.style.borderRadius="0"
        imgRef.current.style.border="none"
        }
        
    }
  return (
    <div>
      <img src={photo} alt="IRONMAN" ref={imgRef} />
      <button onClick={handelchange}>{loding? "on":"off"}</button>
    </div>
  )
}

export default App