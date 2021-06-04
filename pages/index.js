import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'

import SearchBox from "../components/SearchBox";
import Apps from "../components/Apps";
import WeatherData from "../components/WeatherData";
import Widgets from "../components/Widgets";

import Footer from "../components/Footer";

import Icon from "../components/Icon";

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

          <button  id="switchONOFF"  onClick={() => {
              document.documentElement.style.getPropertyValue("--Luminosity") == "0" ? 
              document.documentElement.style.setProperty("--Luminosity", "255")
              : document.documentElement.style.setProperty("--Luminosity", "0");}}>
              switch
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
