import Head from 'next/head';
import React from 'react';

type MetaHeadType = {
    pageTitle?: string;
};

const MetaHead: React.FC<MetaHeadType> = ({ pageTitle = 'Ghea Medical' }) => {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="viewport" content="width=device-width,shrink-to-fit=no,initial-scale=1,maximum-scale=1,user-scalable=0" />
            <meta name="description" content="خدمات استشارات الرعاية الصحية بالمملكة العربية السعودية" />
            <meta name="keywords" content="ممرضة منزلية جدة,ابشر افراد" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
    );
};

export default MetaHead;
