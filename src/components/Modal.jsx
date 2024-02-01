import React from "react";

export default function Modal() {
  return (
    <>
      <div className="fixed bg-white inset-0 opacity-70"></div>
      <div className="fixed inset-0">
        <div className="flex items-center justify-center min-h-full">
          <div className="bg-white rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)] w-[400px]">
            <div className="border-b flex justify-between items-center p-4">
              <div className="text-2xl invisible">&#10005;</div>
              <div className="text-3xl font-semibold">Sign </div>
              <button className="text-2xl">&#10005;</button>
            </div>
            <div>Body</div>
          </div>
        </div>
      </div>
    </>
  );
}