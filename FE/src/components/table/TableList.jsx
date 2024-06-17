import * as S from "./tableList.module.css";

function TableList({
  lists,
  setList,
  setValue = null,
  setShowOptions,
  setShowAuth = null,
}) {
  const handleSetValue = async (label, fu) => {
    if (setValue) {
      setValue(label);
    } else if (setShowOptions) {
      setShowOptions(false);
    } else if (setShowAuth) {
      setShowAuth(true);
    } else if (setList) {
      setList({ label, fu });
    }
  };

  return (
    <table className={S.tableContainer}>
      <tbody>
        {lists.map((list, index) => (
          <tr
            key={index}
            className={S.trContainer}
            onClick={() => handleSetValue(list.label, list.fu)}
          >
            <td className={S.td}>{list.label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableList;
