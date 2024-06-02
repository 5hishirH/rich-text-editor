"use client";

import React, { useState } from "react";
import Tiptap from "@/app/components/Tiptap";

const NotePicker = () => {
  const [content, setContent] = useState("");
  const handleContentChange = (reason) => {
    setContent(reason);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      content: content,
    };
    console.log(data);
    // const existingDataString = localStorage.getItem('myData')
    // const existingData = existingDataString
    //   ? JSON.parse(existingDataString)
    //   : []
    // const updatedData = [...existingData, data]
    // localStorage.setItem('myData', JSON.stringify(updatedData))
    // setContent('')
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
    >
      <div className="text-3xl text-center text-sky-300 mb-10">
        Notes Picker
      </div>
      <Tiptap
        content={content}
        onChange={(newContent) => handleContentChange(newContent)}
      />
    </form>
  );
};

export default NotePicker;
