import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Set up variables
const firstBook = {
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
};
const secondBook = {
  author: "Adam Wallace",
  title: "How to Catch a Unicorn",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/717W6A80aVL._AC_UL200_SR200,200_.jpg",
};

// JSX Rules:
// always return a single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          laboriosam, sed corporis voluptate blanditiis voluptates minima. Magni
          perspiciatis tempore, iusto voluptatem veritatis omnis, consequatur ex
          repudiandae, eligendi nam totam fuga!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
