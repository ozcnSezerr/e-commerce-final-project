import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/actions/clientActions";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layout/Header.jsx";
import PageContent from "./layout/PageContent.jsx";
import Footer from "./layout/Footer.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
