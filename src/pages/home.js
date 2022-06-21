import { Box } from '@mui/material'
import React,{useState} from 'react'
import Exercises from '../components/exercises'
import HeroBanner from '../components/heroBanner'
import SearchExercises from '../components/searchExercises'

const Home = () => {
  return (
    <Box >
      
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home