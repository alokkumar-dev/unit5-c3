import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {
  const Wrapper = styled.div`
    border: 1px solid black;
    cursor: pointer;
    `;
  const Title = styled.p`
    color: blue;
    margin: 0;
    `;
  const Image = styled.img`
    width: 100%;
    height: 300px;
  `;
  const Price = styled.h4`
    margin: 0%;
  `;
  const Id = styled.h4`
    margin: 0%;
  `;

  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
  return (
    <Wrapper>
      <Link to={`/bookdetailspage/${id}`}>
        <Image src={imageUrl} />
        <Id>{id}</Id>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </Link>
    </Wrapper>
  );
};
