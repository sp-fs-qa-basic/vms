import TitleValue from "@/components/board/titleValue/TitleValue";
import { BoardTitles } from "@/constants/titleList";
import * as S from "./titleValue.module.css";

function TitleValueBoard({ company }) {
  const values = [company.actualInvest / 100000000, company.revenue / 100000000, company.employee];
  return (
    <div className={S.boardContainer}>
      {Object.keys(BoardTitles).map((title, index) => (
        <TitleValue
          key={index}
          title={title}
          unit={BoardTitles[title]}
          value={values[index]}
        />
      ))}
    </div>
  );
}

export default TitleValueBoard;
