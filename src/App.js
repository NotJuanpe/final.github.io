import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Paginations'
import React, { useEffect, useState } from 'react'


function App() {

  const [characters, setCharacters] = useState([])
  const [info,setInfo] = useState({})

  const Initialurl = "https://rickandmortyapi.com/api/character"
  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }


  useEffect(() => {
    fetchCharacters(Initialurl);
  }, [])

  return (
    <>
      <Navbar brand="Rick And Morty App" />

      <div className="container mt-5">
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious} 
          onNext={onNext}
          />
        <Characters characters={characters}/>
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious} 
          onNext={onNext}
          />
        
      </div>
    </>
  );
}

export default App;
