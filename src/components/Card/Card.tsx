import styles from "./Card.module.css";
import { IAdvice } from "../../App";
import imgPatternDivider from "../../assets/img/pattern-divider-desktop.svg"

interface ICard{
  advice: IAdvice
}

const Card : React.FC<ICard> = ({advice}) => {
  return (
    <div className={styles["container__card"]}>
      <h4 className={styles["advice"]}>ADVICE {advice.id}</h4>
      <h2 className={styles["text"]}>"{advice.text}"</h2>
      <img className={styles["img-divider"]} src={imgPatternDivider} alt="pattern-divider" />
    </div>
  )
}

export default Card