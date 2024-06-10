import * as S from "./compareBoardLayout.module.css";

function CompareBoardLayout({ title, children }) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.boardContainer}>{children}</div>
    </div>
  );
}

export default CompareBoardLayout;
