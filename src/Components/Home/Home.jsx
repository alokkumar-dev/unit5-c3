import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((res)=>{
      setBooks([...res.data]);
    })
  },[])


  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer" style={{display:"flex",  width:"100%"}}>
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {
          books.map((el)=>{
            return(
              <div style={{ margin:"10px"}}>
                  {/* <img src={el.imageUrl} alt="" style={{width:"200px", height:"200px"}} />
                  <h4>{el.title}</h4>
                <h4>{el.price}</h4> */}
                {<BookCard title={el.title} price={el.price} imageUrl={el.imageUrl} id={el.id} /> }

              </div>
            )
          })
        }
      </Main>
    </div>
  );
};
