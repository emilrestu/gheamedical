import React, { CSSProperties } from 'react';

const Page: React.FC<{ style?: CSSProperties; children: React.ReactNode }> = ({ style, children }) => {
    return <div style={{ padding: 16, ...style }}>{children}</div>;
};

export default Page;
