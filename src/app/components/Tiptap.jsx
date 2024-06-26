"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/app/components/Toolbar";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

const Tiptap = ({ handleChange, content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-medium",
          levels: [2],
        },
      }),

      BulletList.configure({
        HTMLAttributes: {
          class: "ml-6 list-disc",
        },
      }),

      OrderedList.configure({
        HTMLAttributes: {
          class: "ml-6 list-decimal",
        },
      }),
    ],

    editorProps: {
      attributes: {
        class: "mt-4 border border-primary rounded-lg outline-none p-4",
      },
    },

    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} content={content} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
