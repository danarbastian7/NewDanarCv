import "./App.css";
import { Container, Grid } from "@mui/material";
import Profile from "./component/profile/profile";
import Header from "./component/header/header";
import Resume from "./component/resume/resume";
import Footer from "./component/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    <>
      <Container className="top_30">
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            marginRight={{
              xs: 0,
              md: 5,
            }}
          >
            <Profile />{" "}
          </Grid>
          <Grid item xs>
            <div className="main-content">
              <Resume />
            </div>
            <Footer />
          </Grid>
        </Grid>
      </Container>

      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
    // </div>
  );
}

export default App;
