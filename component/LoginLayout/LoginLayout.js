import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Nav from '../Nav/Nav';
import Sidebar from './Sidebar/Sidebar';

export default function LoginLayout() {


  const Pattern = dynamic(() =>
    import('../../assets/backgroundpattern.svg').then(
      (module) => module.ReactComponent
    )
  );
  return (
    <>
      
        <div className = {'background'}>
        <Pattern width="100%" height="100%" />
        </div>
        <Nav />
        <Sidebar/>
     
    </>
  );
}
