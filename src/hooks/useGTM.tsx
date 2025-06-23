import { useEffect } from 'react';

const GTM_ID = 'GTM-5DQKNRZJ';

export const useGTM = () => {
    useEffect(() => {
        if (document.getElementById('gtm-script')) return;

        // Safe access to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'default_consent',
            'gtm.start': new Date().getTime(),
        });

        window.dataLayer.push({
            event: 'consent_update',
            consent: {
                ad_storage: 'granted',
                analytics_storage: 'granted',
                functionality_storage: 'granted',
                personalization_storage: 'granted',
                security_storage: 'granted',
            },
        });

        const script = document.createElement('script');
        script.id = 'gtm-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
        document.head.appendChild(script);

        const noscript = document.createElement('noscript');
        noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
        document.body.appendChild(noscript);
    }, []);
};
