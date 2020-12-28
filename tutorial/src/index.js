import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Set up variables
const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    author: "Adam Wallace",
    title: "How to Catch a Unicorn",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/717W6A80aVL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    author: "Ann Whitford Paul",
    title: "If Animals Kissed Good Night",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
  },
];

// JSX Rules:
// always return a single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        another example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
