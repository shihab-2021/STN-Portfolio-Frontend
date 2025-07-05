"use client";
import React, { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

export default function MarkdownCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-2 rounded-md bg-white hover:bg-white/90 
                     text-gray-400 hover:text-gray-600 transition-all duration-200 cursor-pointer 
                     opacity-0 group-hover:opacity-100 backdrop-blur-sm"
      title={copied ? "Copied!" : "Copy code"}
    >
      {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
    </button>
  );
}
