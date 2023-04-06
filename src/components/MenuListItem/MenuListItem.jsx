import {useState} from "react";
import style from "./style.module.css"

export function MenuListItem (props) {
    const [isHovered, setIsHover] = useState(false);
    function activate () {
        setIsHover(true);
    };
    function deactivate () {
        setIsHover(false)
    };
    function getBackgroundColor () {
        if(isHovered){
            return "#a5e9ff"
        } else {
            return "#eff0ef"
        }       
    }
    
    const onItemClick = () => {
        props.onClick(props.difficulty)
    }
    console.log(props.difficulty);
    return <div 
    onClick={onItemClick()}
    className={style.container}
    onMouseEnter={activate} 
    onMouseLeave={deactivate} 
    style={{backgroundColor : getBackgroundColor()}}>
        Set to: {props.difficulty}
    </div>
}