import React from 'react';

const EntrepreneurLayout = ({ children }: { children: React.ReactNode })  => {
    return (
        <div>
            <header>Entrepreneur Layout Header</header>
            <main>{children}</main>
            <footer>Entrepreneur Layout Footer</footer>
        </div>
    );
};

export default EntrepreneurLayout;
