import imgButton from "../../assets/img/icon-dice.svg"
import styles from "./button.module.css"

interface IButton{
  clickValue: number,
  handleClick: (params: number) => void
}

const Button : React.FC<IButton> = ({clickValue, handleClick}) => {
  
  const handleClickValue = ()=>{
    handleClick(clickValue + 1)
  }

  return (
    <div onClick={handleClickValue} className={styles["container__img-button"]}>
      <img className={styles["img__button"]} src={imgButton} alt="button-img" />
    </div>
  )
}

export default Button