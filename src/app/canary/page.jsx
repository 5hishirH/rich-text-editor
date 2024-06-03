"use client";

import "@/app/canary/canary.css";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

const Canary = () => {
  const [cleanHtml, setCleanHtml] = useState();

  // this html string should come from server
  const htmlString = `<h2>Description</h2><p>Elevate your style with our brand new drop shoulder t-shirt.</p><h2>Specification</h2><ul><li><p>Material: Bio-cotton</p></li><li><p>GSM: 180-200</p></li></ul>`;

  useEffect(() => {
    // Using DOMPurify ensures that any potentially dangerous content is sanitized.
    setCleanHtml(DOMPurify.sanitize(htmlString));
  }, []);

  return (
    cleanHtml && (
      <div className="canary grid place-content-center h-screen" dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    )
  );
};

export default Canary;
