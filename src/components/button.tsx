'use client';
export default function Button(){
  let handleClick = () => {
      return alert("uploaded file");
  }
  return (<button onClick={handleClick}> Upload File</button>

  )
}