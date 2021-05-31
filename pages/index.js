import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'


import SearchBox from '../components/SearchBox';
import Apps from '../components/Apps';
import WeatherData from '../components/WeatherData';
import Widgets from  '../components/Widgets';
import Footer from '../components/Footer';

//import fs from 'fs';



export async function getServerSideProps(context) {
    
  //  fs.readFile('/mnt/c/Users/andre/Desktop/ciccio.txt', 'utf8' , (err, data) => {
  //      if (err) {
  //        console.error(err)
  //        return({
  //          props: {
  //            results: err,
  //          }
  //        })
  //      }
    

      
  //      return(
  //        {
  //          props: {

  //              results: data,
  //          }
  //        }
  //        )
  
  //      })



    return({
      props:
      {
      results: 54321,
    }})
  
    


}


 const Home = props => {


  var today = new Date();
    var Oggi = today.getDate() + "." + today.getMonth() + "."  + today.getFullYear();


  return (
    <div>
      <Head>
        <meta charset="utf-8" />    
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <title>agpi</title>
        <link rel="apple-touch-icon" href="favicon.jpg"/>
        <link rel="icon" type="image/x-icon" href="favicon.ico"/>
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      </Head>
      <body>
      <div className="center ottanta" onClick={() => {return true}}>

        
        <div className="contenitore center">


  
          {/* logo */}
          <svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 329.42 44.03"><defs></defs><g id="Livello_2" data-name="Livello 2"><g id="Livello_1-2" data-name="Livello 1"><path className="cls-1" d="M164.57,12.7a24.75,24.75,0,0,0-9.4-6.94A60.39,60.39,0,0,0,140,1.46,127,127,0,0,0,119.8,0H60.62V2.31H63a7.83,7.83,0,0,1,3.42.58c1.38.67,2,1.92,2,3.93l0,25.21L21.78.38,21.19,0H0V2.31H2.36a8,8,0,0,1,3.4.57c1.38.67,2,1.93,2,4V37.17c0,2-.67,3.31-2,4a8.5,8.5,0,0,1-3.62.58H0V44H22V41.71H19.62a7.68,7.68,0,0,1-3.41-.61c-1.39-.66-2-1.9-2-3.9V7.69L62.31,40.13,67.85,44h7V6.82c.1-2.15,1-3.53,2-3.95a12,12,0,0,1,4.11-.56h7.38a7.81,7.81,0,0,1,3.42.59c1.35.64,2,1.93,2,3.94V37.17c0,2-.66,3.31-2,4a8,8,0,0,1-3.39.58H85.92V44h38.64a102.34,102.34,0,0,0,18.23-1.47,50.41,50.41,0,0,0,13.65-4.32,22.44,22.44,0,0,0,8.46-7A15.82,15.82,0,0,0,167.78,22,14.84,14.84,0,0,0,164.57,12.7ZM144.94,36.24c-4.79,3.28-11.65,4.94-20.38,4.94H109.22V2.86h10.6c20.62,0,32.45,7,32.45,19.15A16.58,16.58,0,0,1,144.94,36.24Z"/><path className="cls-1" d="M246.14,0V9.84h4.7L252,8.51c3.28-4,8.93-5.66,18.89-5.66h9.49V37.17c0,2-.66,3.3-2.05,4a8.15,8.15,0,0,1-3.51.57h-2.27l-24.34-.13c-4.73-.42-8.72-2.65-11.11-4l-.25-.15c-3.12-1.81-5.89-3.76-8.56-5.64l-2.3-1.6L224.28,29a23,23,0,0,0-2-1.24,40.36,40.36,0,0,0-9.08-3.94c7.58-.58,13.63-1.83,18-3.73,4.82-2.11,7.37-5,7.37-8.33,0-3.67-2.92-6.68-8.44-8.7S216.82,0,206.9,0H168.07V2.31h2.39a7.82,7.82,0,0,1,3.38.59c1.35.65,2,1.95,2,4V37.18c0,2-.65,3.31-2,4a8.45,8.45,0,0,1-3.55.57h-2.23V44h30.47V41.71h-2.4a7.71,7.71,0,0,1-3.4-.56c-1.38-.68-2-1.94-2-4v-13h7.63l.6.18.38.12.33.1a30.63,30.63,0,0,1,3.63,1.27,24.19,24.19,0,0,1,6.92,4.29c1.34,1.21,2.52,2.36,4,3.82l.12.12c2.84,2.82,5.28,5.26,8.71,7,3.85,2,8.54,2.93,14.75,2.93H303V41.71h-2.36a7.85,7.85,0,0,1-3.43-.58c-1.35-.64-2-1.93-2-4V2.85h9.46c10.12,0,15.6,1.64,18.92,5.69l1.12,1.31h4.71V0ZM203.6,21.3H190.71V2.87h16.2c10.16,0,15.53,3.07,15.53,8.88C222.44,17.73,215.4,21.3,203.6,21.3Z"/></g></g></svg>
    

          {/* Barra di ricerca */}
          <SearchBox/>

          {/* Meteo */}
          <span className="extendedFont" style={{marginBottom:"1em"}}><WeatherData/></span> 

          {/* Apps */}
          <Apps/>
    
          {/* Widgets */}
          <Widgets temperature={props.results}/>



        </div>
      </div>
      </body>



      

      <Footer/>
    </div>
  )
}

export default Home;
