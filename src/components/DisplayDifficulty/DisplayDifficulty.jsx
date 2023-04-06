import style from "./style.module.css";

export function DisplayDifficulty (props) {
    return <div className={style.container}>
        {props.difficulty ? `Set to ${props.difficulty}` : "No difficulty set set"}
    </div>
}