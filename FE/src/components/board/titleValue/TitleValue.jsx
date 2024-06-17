import * as S from "./titleValue.module.css";

function TitleValue({ title, unit, value }) {
  return (
    <div className={S.container}>
      <span className={`${S.font} ${S.light}`}>{title}</span>
      <span className={`${S.font} ${S.bold}`}>{`${value}${unit}`}</span>
    </div>
  );
}

export default TitleValue;
