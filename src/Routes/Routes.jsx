import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { SortAndFilterButtons } from "../Components/SortAndFilterButtons/SortAndFilterButtons";
import { BookCard } from "../Components/BookCard/BookCard";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
     
        <Route exact path="/" element={<Home />} />
        <Route exact path="/section/:section" element={<Section /> } />
        <Route exact path="/bookcard" element={<BookCard /> } />
        <Route exact path="/bookdetailspage/:id" element={<BookDetailsPage /> } />
        <Route exact path="/sortandfilterbuttons" element={<SortAndFilterButtons /> } />
        <Route exact path="*" element={<NotFound /> } />

        
      </Routes>
    </>
  );
};
