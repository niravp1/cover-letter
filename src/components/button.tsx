'use client';
import { useRef } from 'react';
import { ChangeEvent } from 'react';


export default function Button() {
  const uploadRef = useRef<HTMLInputElement>(null);
  let handleClick = () => {
    uploadRef.current?.click();
  }
  let handleUpload = (event: ChangeEvent<HTMLInputElement> ) => {

   if (event.target.files == null) {
      console.log("File was unsuccessful");
      return
   }
    const file = event.target.files[0];
  }


  return (
    <>
      <button onClick={handleClick}> Upload File</button>
      <input type="file" accept=".docx, .pdf, .txt" style={{ display: 'none' }}  onChange={handleUpload} ref={uploadRef} ></input>
    </>
  )
}