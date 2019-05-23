import React from 'react';
import { Link } from '@reach/router';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="characters">Characters</Link>
          </li>
          <li>
            <Link to="comics">Comics</Link>
          </li>
          <li>
            <Link to="creators">Creators</Link>
          </li>
          <li>
            <Link to="events">Events</Link>
          </li>
          <li>
            <Link to="series">Series</Link>
          </li>
          <li>
            <Link to="stories">Stories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
