import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'


const Contact = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const validarNombre = (value) => {
    return value ? value.length > 5 : false;
  };

  const onChangeName = (e) => {
    setNombre(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSumbmitForm = (e) => {
    e.preventDefault();
    if (validarNombre(nombre) && /\S+@\S+\.\S+/.test(email)) {
      document.querySelector("#mensaje").innerHTML = "Gracias " +
      nombre +
      ", te contactaremos cuanto antes vía mail"
    } else {
      document.querySelector("#mensaje_error").innerHTML = "Por favor verifique su información nuevamente"
    }
  };

  return (
    <div className="App"><br />
      <h2 style={ {fontFamily: 'Raleway', textAlign: "center" } }>Want to know more?</h2>
      <p style={ {fontFamily: 'Raleway', textAlign: "center" } } >Send us your email and we will contact you</p><br />
      <Box onSubmit={onSumbmitForm}
        sx={{
          width: "100%",
          minHeight: "100vh",
          padding: "10px 30px",
          backgroundColor: {xs: "red", md: "white" }
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Enter your name" variant="outlined" fullWidth value={nombre} onChange={onChangeName} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="enter your email" variant="outlined" fullWidth value={email} onChange={onChangeEmail} />
          </Grid>
          
        </Grid>

        <Stack spacing={2} sx={{ m: 1 }} direction="row">
          <Button type='submit' variant="contained">Send</Button>
          <Button
            variant="outlined"
            
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Contact