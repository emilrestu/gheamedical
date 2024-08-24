import { Grid, Select, Drawer, SelectProps, Empty } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import Translate from '../translate';

const { useBreakpoint } = Grid;

const SelectMobileWrapper = styled.div`
    .ant-select {
        width: 100%;
    }

    .ant-select-dropdown {
        position: relative;
        margin-top: 8px;
        top: unset !important;
        inset: unset !important;
        z-index: unset !important;
        box-shadow: unset !important;

        .ant-select-item {
            margin: 4px;
            padding: 12px 16px;
        }
    }
`;

type SelectType_ = {
    title?: React.ReactElement | string;
};

const Select_: React.FC<SelectProps & SelectType_> = ({ title, onSelect, showSearch = true, ...props }) => {
    const { xs } = useBreakpoint();
    const [selectMobileOpen, setSelectMobileOpen] = useState<boolean>(false);

    return (
        <>
            <Select
                {...props}
                onSelect={(value, options) => {
                    onSelect?.(value, options);
                }}
                {...(xs
                    ? {
                          onClick: () => {
                              if (xs) setSelectMobileOpen(true);
                          },
                          open: false,
                          showSearch: false,
                      }
                    : {
                          showSearch,
                      })}
                virtual
                filterOption={(value, options) => (options?.label ?? '')?.toString()?.toLowerCase().includes(value.toLowerCase())}
                notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<Translate>No Data</Translate>} />}
            />

            {xs && (
                <Drawer
                    title={title}
                    height={402}
                    open={selectMobileOpen}
                    onClose={() => setSelectMobileOpen(false)}
                    closeIcon={null}
                    maskClosable
                    placement="bottom"
                    styles={{
                        header: {
                            textAlign: 'center',
                        },
                        content: {
                            borderTopRightRadius: 8,
                            borderTopLeftRadius: 8,
                        },
                        footer: {
                            display: 'flex',
                            justifyContent: 'center',
                        },
                    }}
                    destroyOnClose
                >
                    <SelectMobileWrapper id="select-mobile-wrapper">
                        <Select
                            {...props}
                            showSearch
                            placeholder={title}
                            onSelect={(value, options) => {
                                onSelect?.(value, options);
                                setSelectMobileOpen(false);
                            }}
                            getPopupContainer={() => document.getElementById('select-mobile-wrapper') || document.body}
                            open
                            virtual
                            notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<Translate>No Data</Translate>} />}
                        />
                    </SelectMobileWrapper>
                </Drawer>
            )}
        </>
    );
};

export default Select_;
