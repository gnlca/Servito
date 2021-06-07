import { React, useEffect, useState } from "react";
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/layout.css'

// Google Icons
// import 'material-design-icons/iconfont/material-icons.css';




function MyApp({ Component, pageProps }) {


  useEffect(()=>{
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   document.documentElement.style.setProperty("--Luminosity", "255");
    // } else {    
    //   document.documentElement.style.setProperty("--nuBelluGrigio", "#a1a1a1");
    // }
  },[])


  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"/>
        <title>agpi</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
