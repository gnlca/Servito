import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'


import Icon from "../components/Icon";


import Home from '../components/Home';
import SearchBox from "../components/SearchBox";
import Apps from "../components/Apps";
import WeatherData from "../components/WeatherData";
import Widgets from "../components/Widgets";
import Footer from "../components/Footer";
import SwitchTheme from "../components/SwitchTheme"



const Dashboard = () => {


  
 

  var today = new Date();
  var Oggi =
  today.getDate() + "." + today.getMonth() + "." + today.getFullYear();

  return (
    <div>
      <Head><title>agpi</title></Head>
      <div className="grid center ottanta" onClick={() => { return true; }}>
        <div className="grid center rowGap3">
          <Home />
          <Apps />          
          <Widgets />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
