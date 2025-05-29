import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader size={124} style={{ color: "#6A2ECB" }} />
    </div>
  );
}
