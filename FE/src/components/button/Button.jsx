import * as S from './button.module.css';

function Button ({name, className}) {
  return (
    <button className={`${S.button} ${className}`}>
      {name}
    </button>
  )
}

export default Button