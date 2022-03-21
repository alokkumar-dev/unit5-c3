import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  const [books, setBooks] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setBooks(res.data);
    })
  },[])

  books.map((el)=>{
    return (
    
        <div className="bookContainer">
          <h2 className="title">{el.title}</h2>
          <img className="image" src={el.imageUrl} alt="#" />
          <div className="author">{el.author}</div>
          <div className="description">{el.description}</div>
          <div className="price">{el.price}</div>
          <div className="section">{el.section}</div>
          <div className="isbnNumber">{el.isbnNumber}</div>
          <ul className="reviews">
            {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
          </ul>
        </div>
    );
  })
 
};
