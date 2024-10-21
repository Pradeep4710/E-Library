import React from "react";
import { baseUrl } from "../utils/mockData/books";
import { Link } from "react-router-dom";

function Card({ book }) {
  const image = book.coverImage ? book.coverImage : `${baseUrl}${book.imageLink}`
  return (
    <div className="w-64 p-3 m-5 h-96 bg-orange-200 rounded-3xl text-orange-700 cursor-pointer flex flex-col items-start justify-center gap-3 hover:bg-orange-300 hover:shadow-2xl hover:shadow-yellow-400 transition-shadow">
      <div className="w-full h-[50%] bg-yellow-300 rounded-2xl overflow-hidden">
        <img src={image} alt="cover" className="w-full h-full" />
      </div>
      <div className="px-3">
        <p className="font-bold text-xl">{book.title}</p>
        <p>Language: {book.language}</p> 
        <p className="my-2">Author : {book.author}</p>
      </div>
      <Link to={`/books/${book.title}`}>
      <button className="bg-orange-600 my-2 mx-2 text-orange-200 font-extrabold p-2 px-6 rounded-xl hover:bg-orange-700 transition-colors">
        View Details
      </button>
      </Link>
    </div>
  );
}

export default Card;
