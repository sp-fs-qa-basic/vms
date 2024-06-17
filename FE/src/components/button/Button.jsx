import { ReactComponent as CheckImg } from "@/assets/icons/check.svg";
import * as S from "./button.module.css";

function Button({ type = 'button', isChecked, name, className, onClick, recent }) {
  return (
    <button type={type} className={`${S.button} ${className}`} onClick={onClick}>
      {(isChecked && !recent) && <CheckImg />}
      {name}
    </button>
  );
}

export default Button;
