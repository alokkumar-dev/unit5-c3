import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
        <Route exact path="/section/:name" element={<Section /> } />
        <Route exact path="/books/:id" element={<BookDetailsPage /> } />
        <Route exact path="*" element={<NotFound /> } />

        
      </Routes>
    </>
  );
};
