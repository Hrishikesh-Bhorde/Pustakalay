import React from "react";

export default function BookCard({ item }) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl md:border cursor-pointer hover:scale-105 duration-200 dark:bg-neutral-200 dark:text-black mb-10">
        <figure>
          <img
            src={item.image_url}
            alt={item.title}
            className="h-80 w-60 rounded"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-warning">{item.category}</div>
          </h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">$ {item.price}</div>
            <div className="badge badge-outline hover:bg-yellow-500 hover:text-black">
              {" "}
              + Buy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
