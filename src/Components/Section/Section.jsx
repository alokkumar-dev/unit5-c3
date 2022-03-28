import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const [books, setBooks] = useState([]);
  const [filterState, setFilterState] = useState({});

  const { section } = useParams();
  const getBooks = () => {
    axios.get(`http://localhost:8080/books`).then((res) => {
      setBooks([...res.data]);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);
  const Main = styled.div`
    /* Same as Homepage */
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2%;
    width:"200px";
    height:"300px";
  `;
  const handleSort = (parameter, value) => {
    setFilterState({ parameter, value });
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
          section
        }
      </h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}

        {books.sort((a, b) => {
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
          .filter((el) => {
            if (el.section == section) {
              return true;
            } else {
              return false;
            }
          })
          .map((el) => {
            return (
              <div>
                <BookCard
                  title={el.title}
                  price={el.price}
                  imageUrl={el.imageUrl}
                  id={el.id}
                />
              </div>
            );
          })}
      </Main>
    </>
  );
};
