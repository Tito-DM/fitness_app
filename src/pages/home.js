import { Box } from '@mui/material'
import React,{useState} from 'react'
import Exercises from '../components/exercises'
import HeroBanner from '../components/heroBanner'
import SearchExercises from '../components/searchExercises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box >
      
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      setBodyPart={setBodyPart}
      bodyPart={bodyPart}
      />
      <Exercises
       setExercises={setExercises}
       setBodyPart={setBodyPart}
       bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home