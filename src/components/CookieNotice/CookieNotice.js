import React from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import s from "./CookieNotice.module.scss"

export const CookieNotice = () => {

    const cookieText = "Diese Seite möchte Cookies verwenden, um Ihr Besuchererlebnis zu verbessern. Mit einem Klick auf OK stimmen Sie der Benutzung von Cookies zu.";
    const okButtonText = "OK";
    const declineButtonText = "Ablehnen";

    return(
        <CookieConsent
            enableDeclineButton 
            containerClasses={s.cookieBar}
            location="bottom"
            buttonText={okButtonText}
            declineButtonText={declineButtonText}
            buttonWrapperClasses={s.buttonWrapper}
            buttonClasses={`${s.cookieButton} ${s.okButton}`}
            declineButtonClasses={`${s.cookieButton} ${s.declineButton}`}
            cookieName="PeredvizhSiteCookie"
            expires={150}
            >
            <span>{cookieText}</span>
        </CookieConsent>
    )
}