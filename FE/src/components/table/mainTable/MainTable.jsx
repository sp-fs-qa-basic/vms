import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./mainTable.module.css";

function MainTable({ titles, lists }) {
  const navigation = useNavigate();
  return (
    <table className={S.tableContainer}>
      <thead>
        <tr className={S.th}>
          {titles.map((title, index) => (
            <th key={index} className={S.thCell}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={titles.length} className={S.theadGap}></td>
        </tr>
        {lists.map((list, index) => (
          <tr key={list.id} className={S.td} onClick={() => navigation(`company/${list.id}`)}>
            <td className={S.tdCell}>{index + 1}위</td>
            <td className={`${S.tdCell} ${S.logoName}`}>
              <img src={list.imageUrl} className={S.logo} />
              {list.name}
            </td>
            <td className={`${S.tdCell} ${S.introduce}`}>
                {list.description}
            </td>
            <td className={S.tdCell}>{list.category}</td>
            {list.actualInvest && (
              <td className={S.tdCell}>{list.actualInvest}억 원</td>
            )}
            {list.revenue && <td className={S.tdCell}>{list.revenue}억 원</td>}
            {list.employee && <td className={S.tdCell}>{list.employee}명</td>}
            {list.mySelectionCount && (
              <td className={S.tdCell}>{list.mySelectionCount}명</td>
            )}
            {list.comparedSelectionCount && (
              <td className={S.tdCell}>{list.comparedSelectionCount}명</td>
            )}
            {list.simInvest && <td className={S.tdCell}>{list.simInvest}명</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MainTable;
