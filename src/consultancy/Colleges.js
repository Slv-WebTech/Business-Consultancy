import React from "react";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Colleges Collaborated with Us... </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Uniting minds for inspired learning. Join us in a synergy of knowledge and creativity that transcends traditional boundaries.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2">
          <li>
            <div className="flex items-center gap-x-3">
              <img className="h-36 w-36" src="../Images/acharya.jpeg" alt="" />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-3">
              <img className="h-36 w-46" src="../Images/jgi.jpeg" alt="" />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-3">
              <img className="h-36 w-76" src="../Images/ecell.png" alt="" />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-3">
              <img className="h-30 w-76" src="../Images/sastra.jpeg" alt="" />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-30 w-76" src="../Images/snu.jpeg" alt="" />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-30 w-76" src="../Images/alva.jpeg" alt="" />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-30 w-76" src="../Images/anupama.jpeg" alt="" />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-30 w-76" src="../Images/rajivgandhi.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
