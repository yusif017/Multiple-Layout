// pages/index.tsx

import React from 'react';
import { NextPageWithLayout } from 'next';

const AdminPage: NextPageWithLayout = () => {
    return <div>Admin</div>;
};

AdminPage.layout = 'admin';


export default AdminPage;