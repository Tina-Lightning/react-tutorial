import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// import data, this name needs to match the other file
import { books } from "./books";

// import component, this name does not need to match the other file
import Book from "./Book";

import { greeting } from "./test/test";

// JSX Rules:
// always return a single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
