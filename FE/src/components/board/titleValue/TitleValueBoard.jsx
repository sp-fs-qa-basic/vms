import TitleValue from "@/components/board/titleValue/TitleValue";
import { BoardTitles } from "@/constants/titleList";

const values = [140, 44.3, 95];

function TitleValueBoard() {
  return (
    <div className={S.boardContainer}>
      {Object.keys(BoardTitles).map((title) =>
        values.map((value) => {
          <TitleValue title={title} unit={BoardTitles[title]} value={value} />;
        })
      )}
    </div>
  );
}

export default TitleValueBoard;
