
export const ExerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': "e3e96974acmshe77c7b412648676p1729b3jsnaf0114ec13db",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
    }