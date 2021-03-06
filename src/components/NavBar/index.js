import { Typography, Toolbar, AppBar, IconButton } from "@material-ui/core";

function NavBar({ changePage }) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ mr: 2 }}
          onClick={() => {
            changePage("/");
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Registro
          </Typography>
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="transactions"
          sx={{ mr: 2 }}
          onClick={() => {
            changePage("/transactions");
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Transações
          </Typography>
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="outs"
          sx={{ mr: 2 }}
          onClick={() => {
            changePage("/outs");
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Saídas
          </Typography>
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="ins"
          sx={{ mr: 2 }}
          onClick={() => {
            changePage("/ins");
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Entradas
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
