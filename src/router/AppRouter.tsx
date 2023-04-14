import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../views/HomePage/HomePage";
import NotFoundPage from "../views/NotFoundPage/NotFoundPage";
import ContactPage from "../views/ContactPage/ContactPage";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
