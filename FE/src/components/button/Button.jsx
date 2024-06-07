import * as S from './button.module.css';

function Button ({name}) {
  return (
    <button className={S.button}>
      {name}
    </button>
  )
}

export default Button