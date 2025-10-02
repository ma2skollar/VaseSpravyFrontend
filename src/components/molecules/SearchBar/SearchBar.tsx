'use client'

import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import styles from './SearchBar.module.scss';
import CloseIcon from '@/components/atoms/Icon/Material/CloseIcon';
import SearchIcon from '@/components/atoms/Icon/Material/SearchIcon';
import { useRef, useState } from 'react';

interface SearchBarProps {
    action?: string;
    promptText?: string;
    value?: string;
}

const SearchBar = ({ 
    value = '',
    action = '/udalosti/vyhladavanie', 
    promptText = 'Hľadaj udalosť alebo kategóriu', 
}: SearchBarProps) => {
    const [inputValue, setInputValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClearSearch = () => {
        setInputValue('');
        inputRef.current?.focus();
    }

    const showClearButton = inputValue.length > 0;

    return (
        <form className={styles.container} role="search" method="get" action={action}>
            <div className={styles.content}>
                {(isFocused || inputValue) && <label htmlFor="q" className="label-sans-light">{promptText}</label>}
                <input ref={inputRef}
                    type="text"
                    name="q"
                    id="q"
                    className="input-sans-regular"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={isFocused ? '' : promptText}/>
            </div>
            <span className={styles.icons}>
                {showClearButton ? 
                    <>
                        <ClickBox 
                            icon={CloseIcon} 
                            iconSize={IconSize.Regular} 
                            onClick={handleClearSearch}
                        />
                        <div></div>
                        <button type='submit'>
                            <ClickBox 
                                icon={SearchIcon} 
                                iconSize={IconSize.Regular} 
                            />
                        </button>
                    </>:
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            inputRef.current?.focus();
                        }}
                    >
                        <ClickBox 
                            icon={SearchIcon} 
                            iconSize={IconSize.Regular}
                        />
                    </button>
                }
            </span>
        </form>
    );
}

export default SearchBar;