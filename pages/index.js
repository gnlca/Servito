import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'


import Icon from "../components/Icon";


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
      <Head>
        <title>agpi</title>
      </Head>

      <div
        className="center ottanta"
        onClick={() => {
          return true;
        }}
      >
        <div className="contenitore center">
          {/* logo */}
          <Icon name="logo" width={105} height={30} fill="var(--Bianco)" />

          {/* Barra di ricerca */}
          <SearchBox />

          {/* Meteo */}
          <span className="extendedFont" style={{ marginBottom: "1em" }}>
            <WeatherData />
          </span>

          {/* Apps */}
          <Apps />

          {/* Widgets */}
          <Widgets />
          
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
