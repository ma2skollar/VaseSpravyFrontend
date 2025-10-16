'use client'

import styles from './SubscriptionPopup.module.scss';
import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import CloseIcon from '@/components/atoms/Icon/Material/CloseIcon';
import OnClickStatus from '@/components/molecules/OnClickStatus/OnClickStatus';
import { useEffect, useRef, useState } from 'react';
import SendEmailButton from '@/components/atoms/SendEmailButton/SendEmailButton';
import InputBar, { InputBarHandle } from '@/components/molecules/InputBar/InputBar';
import Link from 'next/link';
import { GLOBAL_LINKS } from '@/util/constants';

interface SubscriptionPopupProps {
    onClose: () => void;
}

const SubscriptionPopup = (props: SubscriptionPopupProps) => {
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

    return(
        <div className={styles.container}>
            <ClickBox 
                icon={CloseIcon} 
                iconSize={IconSize.Regular} 
                onClick={props.onClose} 
            />
            <h2 className='title-sans-regular'>Chcete aby sme Vás informovali o novinkách a udalostiach ohľadom Vašich Správ?</h2>
            <p className='text-sans-small'>Pomocou svojej e-mailovej adresy sa prihlásite na odber.</p>
            <InputBar 
                ref={formRef} 
                action={'https://api.vasespravy.sk/mail/subscribe'}
            />
            <SendEmailButton 
                text={'Prihlásiť sa na odber'} 
                isDisabled={submitting} 
                isDisabledText={'Pracujem...'} 
                onClick={handleSendEmailButtonClick}
            />
            {statusVisible && <OnClickStatus success={subscribeSuccess} />}
            <p className='text-sans-small'>Zadaním e-mailovej adresy a prihlásením sa na odber prehlasujete že ste dôkladne oboznámení a suhlasíte so <Link className={styles.textLink} href={GLOBAL_LINKS.PRIVACY_POLICY}>Zásadami ochrany osobných údajov</Link> a <Link className={styles.textLink} href={GLOBAL_LINKS.COOKIES}>Pravidlami používania cookies</Link>.</p>
        </div>
    )
}

export default SubscriptionPopup;