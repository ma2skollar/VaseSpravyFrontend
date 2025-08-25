'use client'

import InputBar from '@/components/molecules/InputBar/InputBar';
import styles from './SubscriptionPopup.module.scss';
import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import CloseIcon from '@/components/atoms/Icon/Material/CloseIcon';
import OnClickStatus from '@/components/molecules/OnClickStatus/OnClickStatus';
import { useState } from 'react';
import SendEmailButton from '@/components/atoms/SendEmailButton/SendEmailButton';

interface SubscriptionPopupProps {
    onClick: () => void;
}

const SubscriptionPopup = (props: SubscriptionPopupProps) => {

    const [subscribeSuccess, setSubscribeSuccess] = useState(false);
    const [statusVisible, setStatusVisible] = useState(false);

    return(
        <div className={styles.container}>
            <h2 className='title-sans-regular'>Chcete aby sme Vás informovali o nových udalostiach a prehľade ich politickej zaujatosti?</h2>
            <p className='text-sans-small'>Pomocou svojej e-mailovej adresy sa prihlásite na odber.</p>
            <InputBar isSearchBar={false} action={'https://api.vasespravy.sk/subscribe/init'} promptText='Zadajte Váš e-mail'/>
            <SendEmailButton text={'Prihlásiť sa na odber'} isDisabled={false} onClick={() => {
                setStatusVisible(true);
                if (!subscribeSuccess) setSubscribeSuccess(true);
                else setSubscribeSuccess(false);
            }}/>
            {statusVisible && <OnClickStatus success={subscribeSuccess} />}
            <p className='text-sans-small'>Zadaním e-mailovej adresy a prihlásením sa na odber prehlasujete že ste dôkladne oboznámení a suhlasíte so <a href='' className={styles.textLink}>Zásadami ochrany osobných údajov</a> a <a href='' className={styles.textLink}>Pravidlami používania cookies</a>.</p>
            <ClickBox icon={CloseIcon} iconSize={IconSize.Regular} onClick={props.onClick} />
        </div>
    )
}

export default SubscriptionPopup;