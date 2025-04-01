import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import GamePage from "./pages/GamePage";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Main />} />
          <Route path="/game/:id" element={<GamePage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
