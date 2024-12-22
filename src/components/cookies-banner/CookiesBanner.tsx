import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Button, Space, Typography } from 'antd';
import Translate from '../translate';
import { useAppContext } from '@/context/AppContext';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { setcookiesAccepted } = useAppContext();

    const handleAccept = () => {
        Cookies.set('cookieConsent', 'true', { expires: 365 });
        setcookiesAccepted(true);
        setIsVisible(false);
    };

    const handleReject = () => {
        Cookies.set('cookieConsent', 'false', { expires: 365 });
        setIsVisible(false);
        setcookiesAccepted(true);
    };

    useEffect(() => {
        const consent = Cookies.get('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }

        // Cleanup when the component unmounts
        return () => {
            document.body.classList.remove('disable-scroll');
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 999,
                    background: '#000',
                    opacity: 0.5,
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgb(15, 54, 48)',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '10px',
                    zIndex: 1000,
                }}
            >
                <br />
                <Typography.Paragraph style={{ color: '#fff' }}>
                    <Translate>We use cookies to improve your experience. By clicking Accept, you agree to our use of cookies.</Translate>
                </Typography.Paragraph>
                <Space>
                    <Button type="primary" onClick={handleAccept}>
                        <Translate>Accept</Translate>
                    </Button>
                    <Button onClick={handleReject}>
                        <Translate>Reject</Translate>
                    </Button>
                </Space>
                <br />
            </div>
        </>
    );
};

export default CookieBanner;
