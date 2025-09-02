'use client'

import Header from '@/components/molecules/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { closeSubscribePopup, openSubscribePopup, resizeLarge, resizeMedium, closeNavMenu, toggleNavMenu } from '@/lib/features/headerSlice'
import OverlayContainer from '@/components/atoms/OverlayContainer/OverlayContainer'
import SubscriptionPopup from '@/components/organisms/SubscriptionPopup/SubscriptionPopup'
import NavMenu from '@/components/organisms/NavMenu/NavMenu'

interface ClientLayoutProps {
    children: React.ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const dispatch = useAppDispatch();
    const navMenuOpen = useAppSelector(state => state.headerReducer).navMenuOpen;
    const subscribePopupOpen = useAppSelector(state => state.headerReducer).subscribePopupOpen;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 88) dispatch(resizeLarge());
            else dispatch(resizeMedium());
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dispatch]);

    return (
        <>
            <Header onMenuClick={() => dispatch(toggleNavMenu())} onSubscribeClick={() => dispatch(openSubscribePopup())} onLogoClick={() => window.location.href = '/'}/>
            <OverlayContainer isVisible={subscribePopupOpen} isNavBackdrop={false} onClose={() => dispatch(closeSubscribePopup())}>
                <SubscriptionPopup onClose={() => dispatch(closeSubscribePopup())} />
            </OverlayContainer>
            <OverlayContainer isVisible={navMenuOpen} isNavBackdrop={true} onClose={() => dispatch(closeNavMenu())}>
                <NavMenu />
            </OverlayContainer>
            {props.children}
            <Footer />
        </>
    );
}

export default ClientLayout;