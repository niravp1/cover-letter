"use client";
import Button from "@/components/button";

export default function Page() {
  const dummyHandler = () => {
    console.log("Button clicked");
  };

  return <Button onClick={dummyHandler} />;
}