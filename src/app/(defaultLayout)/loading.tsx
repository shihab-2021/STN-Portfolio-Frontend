import Loading from "@/components/shared/Loading";
import React from "react";

export default function loading() {
  return (
    <div
      style={{ height: "75vh" }}
      className="flex justify-center items-center"
    >
      <Loading />
    </div>
  );
}
