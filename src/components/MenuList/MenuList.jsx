import { MenuListItem } from "../MenuListItem/MenuListItem";
import style from "./style.module.css";

export function MenuList (props) {
    return <div className={style.container}> 
    <MenuListItem onClick={props.onItemClick} difficulty="Low"/>
    <MenuListItem onClick={props.onItemClick} difficulty="Medium"/>
    <MenuListItem onClick={props.onItemClick} difficulty="High"/>
    <MenuListItem onClick={props.onItemClick} difficulty="Insane"/>
    </div>
}