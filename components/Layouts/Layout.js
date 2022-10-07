import React from 'react';
import dynamic from 'next/dynamic';
import Nav from '../Nav/Nav';

export default function Layout({ children }) {

    const Pattern = dynamic(() =>
        import('../../assets/backgroundpattern.svg').then(
            (module) => module.ReactComponent
        )
    );

    return (
        <>
        <div className = {'background'}>
        <Pattern width = "100%" height = "100%"/>
        </div>
        <Nav/>
      <main>{children}</main>
    </>
    );
}
