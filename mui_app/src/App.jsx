import React from "react";
import "./styles/App.css";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import { Container, Box, Typography } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px dashed grey",
          width: 400,
          height: 100,
          borderRadius: 3,
          bgcolor: "primary.main",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <Typography variant="subtitle2" color="warning">
          This Box renders as an HTML section element.
        </Typography>
      </Box>

      <Typography variant="subtitle1" align="justify" color="primary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        magnam perferendis dolore id aut soluta architecto, aliquam recusandae
        inventore odio. Temporibus illum inventore id, minus voluptate dolorem,
        earum rerum voluptatem eos cumque suscipit adipisci fugit quas, aliquid
        sit officia explicabo pariatur nostrum laudantium magni quod alias
        dicta. Numquam magnam suscipit quibusdam ad autem in, explicabo illum
        pariatur adipisci dolor aspernatur neque assumenda beatae accusamus ipsa
        dolore vero doloremque! Iusto necessitatibus rerum nihil. Natus
        architecto dolorum autem earum facilis ut eveniet aliquid ducimus vel
        delectus sed, pariatur cupiditate! Sit fugiat magnam qui laboriosam id
        similique eum, nulla, voluptas nam soluta est.
      </Typography>
    </Container>
  );
};

export default App;
