"use client";

import React, { useState } from "react";
import Tiptap from "@/app/components/Tiptap";
import { Button } from "@/components/ui/button";

const NotePicker = () => {
  const [content, setContent] = useState("");
  const handleChange = (reason) => {
    setContent(reason);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // remove all attributes with their properties such as "class" from the html string
    const data = content.replace(
      /<(\w+)([^>]*)>/g,
      (match, p1) => "<" + p1 + ">"
    );
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mb-10">
      <div className="text-2xl mb-6">Notes Picker</div>
      <Tiptap content={content} handleChange={handleChange} />
      <div className="mt-4">
        <Button type="submit">Console Log</Button>
      </div>
    </form>
  );
};

export default NotePicker;
