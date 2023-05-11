import "../styles/Buscador.css";

import React, { Component } from "react";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

class Buscador extends Component {
  state = {
    search: "",
  };

  handleChangeSearch = event => this.setState({ search: event.target.value });

  onEnterKeyPressed = e => { // When key enter is pressed
    
  };

  render() {

    const {search} = this.state;

    return (
        <Container maxWidth="md" sx={{ mt: 2 }}  >
            <TextField
            style={{ background: '#f2f6fc', borderRadius: '5px'}}
            id="search"
            type="search"
            label="Search"
            variant="filled"
            value={search}
            onChange={this.handleChangeSearch}
            sx={{ width: 350 }}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <SearchIcon />
                </InputAdornment>
                ),
            }}
            />
      </Container>
    );
  }
}

export default Buscador;