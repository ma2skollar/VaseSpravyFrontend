'use client'

import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import styles from './InputBar.module.scss';
import CloseIcon from '@/components/atoms/Icon/Material/CloseIcon';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export type InputBarHandle = {
    submit: () => Promise<{ ok: boolean; status: number; data?: unknown }>;
}

interface InputBarProps {
    action: string;
    promptText?: string;
}

const InputBar = forwardRef<InputBarHandle, InputBarProps>(({ action, promptText = 'Hľadaj udalosť alebo kategóriu' }, ref) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        submit: async () => {
            try {
                const res = await fetch(action, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: inputValue }),
                });
                let data: unknown = undefined;
                try { data = await res.json(); } catch {}
                return { ok: res.ok, status: res.status, data };
            } catch {
                return { ok: false, status: 0 };
            }
        },
    }));

    const handleClearInput = () => {
        setInputValue('');
        inputRef.current?.focus();
    }

    const showClearButton = inputValue.length > 0;

    return (
        <form className={styles.container} role="search" method="post" action={action} onSubmit={e => e.preventDefault()}>
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
                    <ClickBox icon={CloseIcon} iconSize={IconSize.Regular} onClick={handleClearInput}/>
                </>}
            </span>
        </form>
    );
});

InputBar.displayName = 'InputBar';

export default InputBar;