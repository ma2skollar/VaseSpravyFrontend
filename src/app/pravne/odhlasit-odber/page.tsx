'use client'

import InputBar, { InputBarHandle } from '@/components/molecules/InputBar/InputBar';
import styles from './UnsubscribePage.module.scss';
import SendEmailButton from '@/components/atoms/SendEmailButton/SendEmailButton';
import { useEffect, useRef, useState } from 'react';
import OnClickStatus from '@/components/molecules/OnClickStatus/OnClickStatus';
import { GLOBAL_LINKS } from '@/util/globalLinks';
import Link from 'next/link';

const UnsubscribePage = () => {
    const formRef = useRef<InputBarHandle>(null);
    const [submitting, setSubmitting] = useState(false);
    const [statusVisible, setStatusVisible] = useState(false);
    const [subscribeSuccess, setSubscribeSuccess] = useState(false);

    const handleSendEmailButtonClick = async () => {
        setSubmitting(true);
        setStatusVisible(false);
        const res = await formRef.current!.submit();
        setSubscribeSuccess(res.ok);
        setStatusVisible(true);
        setSubmitting(false);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSendEmailButtonClick();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <main className={styles.container}>
            <h1 className='title-sans-regular'>Pre odhlásenie zadajte svoj e-mail</h1>
            <div>
                <InputBar
                    ref={formRef}
                    action={'https://api.vasespravy.sk/mail/request-unsubscribe'}
                />
                <SendEmailButton 
                    text={'Odhlásiť sa z odberu'} 
                    isDisabled={submitting} 
                    isDisabledText={'Pracujem...'}
                    onClick={handleSendEmailButtonClick}
                />
                {statusVisible && <OnClickStatus success={subscribeSuccess} />}
                <p className='text-sans-small'>Zadaním e-mailovej adresy a prihlásením sa na odber prehlasujete že ste dôkladne oboznámení a suhlasíte so <Link className={styles.textLink} href={GLOBAL_LINKS.PRIVACY_POLICY}>Zásadami ochrany osobných údajov</Link> a <Link className={styles.textLink} href={GLOBAL_LINKS.COOKIES}>Pravidlami používania cookies</Link>.</p>
            </div>
        </main>
    );
}

export default UnsubscribePage;