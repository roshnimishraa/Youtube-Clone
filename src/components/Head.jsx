import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';

const Head = () => {
  // Adding search functionality
  const [searchQuery, setSearchQuery] = useState("");

  // Search results
  const [suggestions, setSuggestions] = useState([]);

  // Debouncing
  // Every time searchQuery changes, make an API call
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json(); 
      setSuggestions(json[1] || []); 
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    // Dispatch an action
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      {/* Menu and Logo */}
      <div className='flex col-span-1 '>
        <img
          onClick={toggleMenuHandler}
          className='h-8 cursor-pointer'
          alt="menu"
          src="https://shorturl.at/15D54"
        />
        <a href='/'>
          <img
            className='h-8 mx-2'
            alt="youtube-logo"
            src="https://shorturl.at/SzJvh"
          />
        </a>
      </div>

      {/* Search Input */}
      <div className='col-span-10 px-10'>
        <div>
          <input
            className='px-5 w-1/2 text-center border border-gray-400 p-2 rounded-l-full'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className='border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100'
          >
            🔍
          </button>
        </div>

        {/* Search Results */}
        {suggestions.length > 0 && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* User Icon */}
      <div className='col-span-10'>
        <img
          className='h-8'
          alt='user'
          src='https://shorturl.at/UvCII'
        />
      </div>
    </div>
  );
};

export default Head;