import * as S from './mainTable.module.css';
import StartupLists from '@/api/mock'

function MainTable ({titles}) {
  return (
    <table className={S.tableContainer}>
      <thead >
        <tr className={S.th}>
          {titles.map((title, index) => (
            <th key={index} className={S.thCell}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={titles.length} className={S.theadGap}></td>
        </tr>
          {StartupLists.map((list, index) => (
            <tr key={index} className={S.td}>
              <td className={S.tdCell}>{list.name}</td>
              <td className={S.tdCell}>{list.introduce}</td>
              <td className={S.tdCell}>{list.category}</td>
              <td className={S.tdCell}>{list.cumulative}</td>
              <td className={S.tdCell}>{list.revenues}</td>
              <td className={S.tdCell}>{list.employee}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default MainTable