import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [filterState, setFilterState] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:8080/books`).then((res) => {
      setBooks([...res.data]);
    });
  };
  const handleSort = (parameter, value) => {
    setFilterState({ parameter, value });
  };

  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2%;
    width: 90%;
    margin: auto;

  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="mainContainer">
        {books
          .sort((a, b) => {
            if (filterState.parameter == "title" && filterState.value == 1) {
              return a["title"].localeCompare(b["title"]);
            } else if (
              filterState.parameter == "title" &&
              filterState.value == -1
            ) {
              return b["title"].localeCompare(a["title"]);
            } else if (
              filterState.parameter == "price" &&
              filterState.value == 1
            ) {
              return a["price"] - b["price"];
            } else if (
              filterState.parameter == "price" &&
              filterState.value == -1
            ) {
              return b["price"] - a["price"];
            }
          })
          .map((el) => (
            <BookCard
              title={el.title}
              price={el.price}
              imageUrl={el.imageUrl}
              id={el.id}
            />
          ))}
        {/* 
    Iterate over books that you get from network
    populate a <BookCard /> component
    pass down books id, imageUrl, title, price and anything else that you want to 
    show in books Card.
*/}
      </Main>
    </div>
  );
};
