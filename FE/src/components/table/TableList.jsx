import * as S from "@/components/dropdown/dropdown.module.css";

function TableList ({lists, setValue}) {
  const handleSetValue = (list) => {
    setValue(list);
  };

  return (
    <table className={S.tableContainer}>
        {lists.map((list, index) => (
          <tr key={index} className={S.trContainer} onClick={() => handleSetValue(list)}>
            <td className={S.td}>{list}</td>
          </tr>
        ))}
    </table>
  );
}

export default TableList