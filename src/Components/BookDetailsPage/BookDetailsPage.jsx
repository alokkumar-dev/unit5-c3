import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = ({title, price, imageUrl, id}) => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  // const {id} = useParams();
  // const [books, setBooks] = useState([]);
  // useEffect(()=>{
  //   axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
  //     setBooks([res.data]);
  //     // console.log(res)
  //   })
  // },[])


    return(
        <div className="bookContainer">
          <h2 className="title">{title}</h2>
          <h2 className="title">{id}</h2>
          <img className="image" src={imageUrl} alt="#" />
          <div className="author">{author}</div>
          <div className="description">{description}</div>
          <div className="price">{price}</div>
          {/* <div className="section">{section}</div> */}
          {/* <div className="isbnNumber">{isbnNumber}</div> */}
          <ul className="reviews">
            {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
          </ul>
        </div>

    )
    


 
};
