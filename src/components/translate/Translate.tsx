import React, { useMemo } from 'react';
import useTranslate from '../../hooks/useTranslate';

type TranslateType = {
    textId?: string;
    children: string;
};

const Translate: React.FC<TranslateType> = ({ textId, children }) => {
    const updatedTextID = useMemo(
        () =>
            (textId || children)
                .toString()
                .replace(/[^a-zA-Z0-9_]/g, '')
                .trim()
                .toUpperCase(),
        [textId, children]
    );
    const translateValue = useTranslate(updatedTextID, children);

    return <div text-id={updatedTextID}>{translateValue}</div>;
};

export default Translate;
