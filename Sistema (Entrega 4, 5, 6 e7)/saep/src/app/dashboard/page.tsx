'use client';

import NavBar from '../components/navbar';
import { withAuth } from '../components/withAuth';
import { useState, useEffect } from 'react';

function Dashboard() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (name) {
            setUserName(name);
        }
    }, []);

    return (
        <>
            <NavBar texto='Dashboard' />
            <section>
                {userName && <h1 className="text-4xl font-bold m-6 text-center text-gray-700">Seja Bem-vindo, {userName}!</h1>}
            </section>
        </>
    )
}

export default withAuth(Dashboard);