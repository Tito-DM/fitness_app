import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ExerciseDetails from "./pages/exerciseDetails";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Box } from "@mui/material";

class App extends Component {
  render() {
    return (
      <Box width="400px" sx={{
        width: {
          x1: "1488px"
        },
      }}
      m="auto"
   
      >
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    );
  }
}

export default App;
