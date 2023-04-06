import {useState} from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import style from "./style.module.css";


export default function App() {
    const [currentDifficulty, setDifficulty] = useState("");

    const onMenuListItemClick = (difficulty) => {
        setDifficulty(difficulty);
    }
  return (
    <div>
      <hi>Please select one</hi>
      <div className={style.workspace}>
        <MenuList onItemClick={onMenuListItemClick}/>
        <DisplayDifficulty difficulty={currentDifficulty}/>
      </div>
    </div>
  );
}
