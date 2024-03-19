// Maneras de importar de Material UI
// import Button from '@mui/material/button'
import { Button, Container } from "@mui/material";

const App = () => {
  return (
    <Container sx={{ border: 3, boxShadow: 3} }>
      <div className="title">
        <h1>App</h1>

        <Button variant="contained"> Mi primer botón </Button>
      </div>
    </Container>
  );
};

export default App;
