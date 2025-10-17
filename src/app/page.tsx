// import Nav from "./Components/Navs/Nav";
import HeroTwo from "./Components/HeroTwo/HeroTwo";
import Formations from "./Components/Formations/Formations";
import Contacts from './Components/Contacts/Contacts'
import ExperienceGrid from './Components/ExperienceGrid/ExperienceGrid'
import style from './Components/Contacts/style.module.css'

export default function Home() {
  return (
    <>
      {/* <Nav/> */}
      <HeroTwo/>
      <Formations/>
      <ExperienceGrid />
      <div className={style.decorationRight}></div>
      <div className={style.decorationLeft}></div>
      <Contacts/>
    </>
  );
}
