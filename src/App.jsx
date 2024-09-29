import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import "./index.css";
import Header from "./Components/Header/Header";
import Definitions from "./Components/Definitions/Definitions";

const App = () => {
  const [word, setWords] = useState("");
  const [meanings, setMeanings] = useState([]); // to get the meanings from api
  const [catagory, setCatagory] = useState("en");

  async function dictionaryApi() {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${catagory}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, [word, catagory]);
  return (
    <div
      className="App"
      style={{ backgroundColor: "#282c34", height: "100vh", color: "#fff" }}
    >
      <Container
        maxWidth={"md"}
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header
          catagory={catagory}
          setCatagory={setCatagory}
          word={word}
          setWords={setWords}
        />

        {meanings && (
          <Definitions word={word} meanings={meanings} catagory={catagory} />
        )}
      </Container>
    </div>
  );
};
export default App;
