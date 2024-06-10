import * as S from './button.module.css';
import {ReactComponent as CheckImg} from '@/assets/icons/check.svg';

function Button ({isChecked, name, className, onClick}) {
  return (
    <button className={`${S.button} ${className}`} onClick={onClick}>
      {isChecked && <CheckImg />}
      {name}
    </button>
  )
}

export default Button