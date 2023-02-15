import React from 'react';
import styles from '@/styles/Layout.module.css'
import NavBar from "../NavBar/NavBar";
function Layout({children}) {
    return (
        <div className={styles.content}>
            <NavBar/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

export default Layout;