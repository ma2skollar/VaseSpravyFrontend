'use client'

import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import styles from './InputBar.module.scss';
import CloseIcon from '@/components/atoms/Icon/Material/CloseIcon';
import SearchIcon from '@/components/atoms/Icon/Material/SearchIcon';
import { useRef, useState } from 'react';

interface SearchBarProps {
    isSearchBar: boolean;
    action: string;
    promptText?: string;
}

const InputBar = ({ isSearchBar, action, promptText = 'Hľadaj udalosť alebo kategóriu' }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClearSearch = () => {
        setInputValue('');
        inputRef.current?.focus();
    }

    const showClearButton = inputValue.length > 0;

    return (
        <form className={styles.container} role="search" method={isSearchBar ? "get" : "post"} action={action}>
            {/* ADD Search Action */}
            <div className={styles.content}>
                {(isFocused || inputValue) && <label htmlFor="input" className="label-sans-light">{promptText}</label>}
                <input ref={inputRef}
                    type="text"
                    name="input"
                    id="input"
                    className="input-sans-regular"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={isFocused ? '' : promptText}/>
            </div>
            <span className={styles.icons}>
                {showClearButton && <>
                    <ClickBox icon={CloseIcon} iconSize={IconSize.Regular} onClick={handleClearSearch}/>
                    {isSearchBar && <div></div>}
                </>}
                {isSearchBar && 
                    <button type='submit'>
                        <ClickBox icon={SearchIcon} iconSize={IconSize.Regular} />
                    </button>
                }
            </span>
        </form>
    );
}

export default InputBar;


/*
import { redirect } from 'next/navigation';

export default async function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query?.trim();

  if (!query) {
    return <p>Prosím zadajte hľadaný výraz.</p>;
  }

  // Fetch data from your backend (can be REST or GraphQL)
  const results = await fetch(`https://api.example.com/search?q=${encodeURIComponent(query)}`).then(res => res.json());

  return (
    <div>
      <h1>Výsledky pre "{query}"</h1>
      // Display results
      {results.length === 0 ? (
        <p>Nenašli sa žiadne výsledky.</p>
      ) : (
        <ul>{results.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
      )}
    </div>
  );
}
*/


// Recommended Implementation
// 1. Form submits with GET to /search page

// You let the browser do the navigation with query params like /search?query=concert.
// 2. The /search page (or API) then fetches the real data

// This is where your backend comes in — you call it from a Next.js server component or getServerSideProps.