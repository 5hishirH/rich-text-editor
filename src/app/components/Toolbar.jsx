"use client";

import React from "react";
import { Bold, List, ListOrdered, Heading2, Undo, Redo } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const Toolbar = ({ editor, content }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex justify-start items-center gap-4 border-2 border-black rounded-lg">
      <Toggle
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold />
      </Toggle>

      <Toggle
        pressed={editor.isActive("heading", { level: 2 })}
        onPressedChange={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <Heading2 />
      </Toggle>

      <Toggle
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
      >
        <List />
      </Toggle>

      <Toggle
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <ListOrdered />
      </Toggle>

      <Toggle
        pressed={editor.isActive("undo")}
        onPressedChange={() => {
          editor.chain().focus().undo().run();
        }}
      >
        <Undo />
      </Toggle>

      <Toggle
        pressed={editor.isActive("redo")}
        onPressedChange={() => {
          editor.chain().focus().redo().run();
        }}
      >
        <Redo />
      </Toggle>
    </div>
  );
};

export default Toolbar;
