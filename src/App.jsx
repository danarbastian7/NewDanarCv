import logo from "./logo.svg";
import "./App.css";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid
            item
            lg={3}
            md={4}
            xs={12}
            sm={12}
            style={{
              backgroundColor: "blue",
            }}
          >
            <Profile />{" "}
          </Grid>
          <Grid
            item
            xs
            style={{
              backgroundColor: "red",
            }}
          >
            xyz
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
