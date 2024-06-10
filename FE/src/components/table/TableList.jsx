import * as S from "./tableList.module.css";

function TableList({ lists, setValue }) {
  const handleSetValue = (list) => {
    setValue(list);
  };

  return (
    <table className={S.tableContainer}>
      <tbody>
        {lists.map((list, index) => (
          <tr
            key={index}
            className={S.trContainer}
            onClick={() => handleSetValue(list)}
          >
            <td className={S.td}>{list}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableList;
