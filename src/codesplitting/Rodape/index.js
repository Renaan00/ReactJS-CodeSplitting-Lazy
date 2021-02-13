import React from 'react';
import './styles.css';

export default function Rodape() {

    const now = new Date;

    return (
        <>
            <footer>
                <p>&#169; Recode Pro {now.getFullYear()}</p>
            </footer>
        </>
    )
};