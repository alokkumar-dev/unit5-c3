import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  const [book, setBook] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setBook({ ...res.data });
    });
  }, []);

  if(book==null){
    return null;
  }

  return (
    <>
      <div className="bookContainer" key={book.id}>
        <h2 className="title">{book.title}</h2>
        <img
          className="image"
          src={book.imageUrl}
          alt="#"
          style={{ width: "200px", height: "250px" }}
        />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */
            book.reviews.map((el, i) => {
              return <li key={i}>{el}</li>;
            })
          }
          

          
        </ul>
      </div>
    </>
  );
};
