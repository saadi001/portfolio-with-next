import React from 'react';

const LayoutPage = ({children, className=""}) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default LayoutPage;