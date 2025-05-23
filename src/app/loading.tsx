"use client";

import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <FaSpinner size={124} style={{ color: "#6A2ECB" }} />
    </div>
  );
}
