import React, { CSSProperties } from 'react';
import MetaHead from '../meta-head';

type PageType = { pageTitle?: string; style?: CSSProperties; children: React.ReactNode };

const Page: React.FC<PageType> = ({ pageTitle, style, children }) => {
    return (
        <>
            <MetaHead pageTitle={pageTitle} />
            <div className="page" style={{ ...style }}>
                {children}
            </div>
        </>
    );
};

export default Page;
