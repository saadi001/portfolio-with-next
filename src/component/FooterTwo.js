import Link from 'next/link';
import React from 'react';

const FooterTwo = () => {
    return (
        <div className=' font-normal text-base md:text-sm sm:text-xs text-center py-5 border-t border-dark dark:border-light dark:text-light mx-32 xl:mx-24 lg:mx-16 md:mx-12 sm:mx-8 '>
            <span>{new Date().getFullYear()}</span> &copy; All Rights Reserved by <Link href={'/'}><span className='hover:underline'>sekh saadi</span></Link>
        </div>
    );
};

export default FooterTwo;