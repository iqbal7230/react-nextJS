"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("./Popup"), {
  loading: () => <p>Loading popup...</p>,
});

export default function PopupButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        style={{ padding: "10px 15px", 
          marginTop: "10px", 
          border: "1px solid white",
          color: "white",
          backgroundColor: "black",
          cursor: "pointer",
        }}
      >
        Open Dynamic Popup
      </button>
      {isOpen && <Popup onClose={() => setIsOpen(false)} />}
    </div>
  );
}
