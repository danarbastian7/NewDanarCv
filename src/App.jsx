import "./App.css";
import { Container, Grid } from "@mui/material";
import Profile from "./component/profile/profile";
import Header from "./component/header/header";
import Resume from "./component/resume/resume";
import Footer from "./component/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container className="top_60">
        <Grid container spacing={7}>
          <Grid item lg={4} md={4} xs={12} sm={12}>
            <Profile />{" "}
          </Grid>
          <Grid
            item
            xs
            style={{
              backgroundColor: "white",

              boxShadow:
                "4px 4px 8px 0 rgba(0, 0, 0, 0.2), 6px 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Header />
            <Resume />
            <Footer />
          </Grid>
        </Grid>
      </Container>
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
