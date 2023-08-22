import React from 'react';

const Header = () => {
    return (
        <div className=' fixed top-4 left-1/2 -translate-x-1/2 w-3/5 mx-auto flex flex-col md:flex-row justify-between items-center z-50'>
            <h2 className='text-xl uppercase' >Trinh Tien Phat</h2>

            <ul className='flex items-center gap-2'>
                <li>facebook</li>
                <li>linkedin</li>
                <li>github</li>
            </ul>
        
        </div>
    );
};

export default Header;