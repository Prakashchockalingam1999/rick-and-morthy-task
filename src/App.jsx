import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './CommonComponents/characterCard';

function App() {
  const [character, setCharacter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');


  // To fetch Data from the api
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${name}&status=${status}`
        );
        setCharacter(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setCharacter([]);
        setTotalPages(0);
      }
    };

    fetchCharacters();
  }, [currentPage, name, status]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setCurrentPage(1);
  };

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="page">
      <h2 className="page-title">Rick & Morty Characters</h2>
      <div className="filters">
        <input
          type="text"
          className="filters__input"
          placeholder="Search by name..."
          value={name}
          onChange={handleNameChange}
        />
        <select
          className="filters__select"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="">All statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {character.length === 0 ? (
        <p className="no-results">No characters found.</p>
      ) : (
        <div className="grid">
          {character.map((char) => (
            <CharacterCard key={char.id} char={char} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination__btn"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span className="pagination__info">
            {currentPage} / {totalPages}
          </span>

          <button
            className="pagination__btn"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
      </div>
  );
}

export default App;