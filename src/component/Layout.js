import React from 'react';

const LayoutPage = ({children, className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
            {children}
        </div>
    );
};

export default LayoutPage;