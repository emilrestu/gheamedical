import React, { CSSProperties } from 'react';
import MetaHead from '../meta-head';
import { Grid } from 'antd';

type PageType = { pageTitle?: string; style?: CSSProperties; children: React.ReactNode };

const Page: React.FC<PageType> = ({ pageTitle, style, children }) => {
    const { xs } = Grid.useBreakpoint();

    return (
        <>
            <MetaHead pageTitle={pageTitle} />
            <div style={{ paddingInline: xs ? 16 : 120, ...style }}>{children}</div>
        </>
    );
};

export default Page;
