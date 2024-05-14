import React from "react";
import BookCard from "./BookCard";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="text-center items-center justify-center mt-28">
          <h1 className="text-2xl md:text-4xl md:mt-4">
            We're delighted to have you{" "}
            <span className="text-yellow-500 dark:text-yellow-600">
              Here ! :)
            </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            optio sint alias, aspernatur rerum maiores exercitationem quis,
            voluptatem magni adipisci eos fugiat aperiam at quibusdam ea
            deserunt nobis architecto minima.
          </p>
          <Link to="/">
            <button className="btn btn-warning mt-6">Back</button>
          </Link>
        </div>
        <div className="mt-12 gap-10 flex flex-wrap  items-center justify-center">
          {list.map((item) => (
            <BookCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
