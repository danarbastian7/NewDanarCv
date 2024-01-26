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
      <Container>
        <Grid container>
          <Grid item lg={3} md={4} xs={12} sm={12}>
            <Profile />{" "}
          </Grid>
          <Grid
            item
            xs
            style={{
              backgroundColor: "red",
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
