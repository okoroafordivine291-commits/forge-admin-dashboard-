import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-[#161B22] border border-[#232A34] rounded-xl ${className}`}>
      {children}
    </div>
  );
}
