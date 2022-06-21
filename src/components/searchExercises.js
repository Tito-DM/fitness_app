import React, { useEffect, useState } from "react";
import { Stack, Box, Button, TextField, Typography } from "@mui/material";
import { height } from "@mui/system";
import { ExerciseOptions, fetchData } from "../utils/fectchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const response = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );

      const searchedExercises = response.filter((exercise) => {
        exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.muscle.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase());
      });
      setSearch("");
      setExercises(searchedExercises);

      console.log(response);
    }
  };
  return (
    <Stack align="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search for an exercise"
          type="text"
          sx={{
            input: {
              fontWeight: 700,
              boder: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
        />

        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "white",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",

            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
