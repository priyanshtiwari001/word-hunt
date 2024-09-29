import "./Header.css";
import catagories from "../../Data/catagory";
import { TextField, ThemeProvider, createTheme, MenuItem } from "@mui/material";

const Header = ({ catagory, setCatagory, word, setWords }) => {
  const handleChange = (language) => {
    setCatagory(language);
    setWords("");
  };
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">{word ? word : "Word hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            label="Search a word"
            variant="standard"
            className="search"
            value={word}
            onChange={(e) => setWords(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={catagory}
            helperText="Choose a language"
            onChange={(e) => handleChange(e.target.value)}
          >
            {catagories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};
export default Header;
