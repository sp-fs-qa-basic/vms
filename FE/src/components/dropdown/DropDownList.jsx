import * as S from "./dropdown.module.css";

function DropDownList ({lists}) {
  return (
    <table className={S.tableContainer}>
        {lists.map((list, index) => (
          <tr key={index} className={S.trContainer}>
            <td>{list}</td>
          </tr>
        ))}
    </table>
  );
}

export default DropDownList