"use client";

export default function Form() {
  return (
    <>
      <form action className="m-4 p4 flex flex-col justify-left">
        {" "}
        Company Name
        <input className="bg-fuchsia-300 text-black" type="text" />
        Job Position
        <input className="bg-fuchsia-300 text-black" type="text" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
