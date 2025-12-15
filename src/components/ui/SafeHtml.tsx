"use client";
import { useEffect, useRef } from "react";

interface SafeHtmlProps {
  html: string;
  style?: string;
}

export default function SafeHtml({ html, style }: SafeHtmlProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRootRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Chỉ gắn ShadowRoot một lần duy nhất
    if (!shadowRootRef.current) {
      shadowRootRef.current = containerRef.current.attachShadow({ mode: "open" });
    }

    const shadowRoot = shadowRootRef.current;
    if (shadowRoot) {
      shadowRoot.innerHTML = `
        <style>
          :host {
            all: initial;
            font-family: "Oswald", sans-serif;
            color: #333;
            line-height: 1.6;
            display: block;
          }
          h1, h2, h3 {
            color: #222;
            margin: 16px 0 8px;
          }
          p {
            margin: 8px 0;
          }
          img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          ${style || ""}
        </style>
        <div>${html}</div>
      `;
    }
  }, [html, style]);

  return <div ref={containerRef} />;
}
