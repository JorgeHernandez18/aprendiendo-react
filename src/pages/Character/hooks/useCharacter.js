import { useEffect, useState } from "react";

export const useCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character"

  //Usamos async y await para esperar a que se ejecute la función
  const getCharacters =  async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCharacters(data.results)

    console.log(data);
  }

  useEffect(() =>{
    getCharacters()
  },[])

  return { characters }
}
