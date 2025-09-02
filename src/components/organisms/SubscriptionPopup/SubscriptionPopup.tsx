'use client'

import styles from './SubscriptionPopup.module.scss';
import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import CloseIcon from '@/components/atoms/Icon/Material/CloseIcon';
import OnClickStatus from '@/components/molecules/OnClickStatus/OnClickStatus';
import { useRef, useState } from 'react';
import SendEmailButton from '@/components/atoms/SendEmailButton/SendEmailButton';
import InputBar, { InputBarHandle } from '@/components/molecules/InputBar/InputBar';

interface SubscriptionPopupProps {
    onClose: () => void;
}

const SubscriptionPopup = (props: SubscriptionPopupProps) => {

    // TODO: Implement submitting, and response handling

    const formRef = useRef<InputBarHandle>(null);
    // const [submitting, setSubmitting] = useState(false);
    const [statusVisible, setStatusVisible] = useState(false);
    const [subscribeSuccess, setSubscribeSuccess] = useState(false);

    const handleSendEmailButtonClick = async () => {
        // setSubmitting(true);
        setStatusVisible(false);
        const res = await formRef.current!.submit();   // 👈 await the Promise
        setSubscribeSuccess(res.ok);
        setStatusVisible(true);
        // setSubmitting(false);
    };


    return(
        <div className={styles.container}>
            <ClickBox icon={CloseIcon} iconSize={IconSize.Regular} onClick={props.onClose} />
            <h2 className='title-sans-regular'>Chcete aby sme Vás informovali o nových udalostiach a prehľade ich politickej zaujatosti?</h2>
            <p className='text-sans-small'>Pomocou svojej e-mailovej adresy sa prihlásite na odber.</p>
            <InputBar ref={formRef} action={'https://api.vasespravy.sk/subscribe/init'} promptText='Zadajte Váš e-mail'/>
            <SendEmailButton text={'Prihlásiť sa na odber'} isDisabled={false} onClick={handleSendEmailButtonClick}/>
            {statusVisible && <OnClickStatus success={subscribeSuccess} />}
            <p className='text-sans-small'>Zadaním e-mailovej adresy a prihlásením sa na odber prehlasujete že ste dôkladne oboznámení a suhlasíte so <a href='' className={styles.textLink}>Zásadami ochrany osobných údajov</a> a <a href='' className={styles.textLink}>Pravidlami používania cookies</a>.</p>
        </div>
    )
}

export default SubscriptionPopup;