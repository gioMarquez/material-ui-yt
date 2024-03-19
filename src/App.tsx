// Maneras de importar de Material UI
// import Button from '@mui/material/button'
import { Button, Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container sx={{ border: 3, boxShadow: 3} }>
      <div className="">
        <h1>App</h1>
        <Typography variant="h1" > App h1 con componente </Typography>
        <Typography variant="h1" component="span" mt={3} textAlign={"center"}> App h1 con componente </Typography>
        <Typography variant="h1" component="h2" textAlign={"right"}> App h1 con componente </Typography>


        <Button variant="contained"> Mi primer botón </Button>
      </div>
    </Container>
  );
};

export default App;
