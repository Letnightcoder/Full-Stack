import React from 'react';

const Header = () => {
    console.log('Header component rendered');
    return (
    <div>
    <h1 className="text-2xl font-bold">Header</h1>
    </div>
    )
};

export default React.memo(Header);
// export default Header;