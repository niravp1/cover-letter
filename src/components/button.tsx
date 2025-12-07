'use client';
import { useRef } from 'react';


export default function Button(){
  const uploadRef = useRef<HTMLInputElement>(null);
  let handleClick = () => {
      uploadRef.current?.click();
    }
  let printSuccess = () =>{
    return console.log("success");
  } 
    
  return (
    <>
  <button onClick={handleClick}> Upload File</button>
  <input type="file" onChange={printSuccess}ref={uploadRef} style={{display:'none'}}></input>
   </>
  )
}