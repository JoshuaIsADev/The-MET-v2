import { useState } from 'react';

function Navbar() {
  const [query, setQuery] = useState('');
  return (
    <>
      <nav>
        <div>
          <h1>The MET Collection</h1>
          <h2>Metropolitan Museum of Art New York City</h2>
        </div>
        <div>
          <div>
            <input
              className='search'
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
          <div>
            <input type='dropdown' />
            <button>Highlights</button>
            <button>Artworks With Images</button>
            <button>Artworks On Display</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
