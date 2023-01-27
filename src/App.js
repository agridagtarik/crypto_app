import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import Homepage from "./pages/Homepage.js";
import CoinPage from "./pages/CoinPage.js";
import { makeStyles } from "@mui/styles";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#01579b",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
