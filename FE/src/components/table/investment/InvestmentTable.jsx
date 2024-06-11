import { InvestmentTitles as titles } from "@/constants/titleList";
import { Investors } from "@/api/mock";
import Kebab from "@/components/button/kebab/Kebab";
import { updateDelete } from '@/constants/dropdownList';

function InvestmentTable () {
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
          {Investors.map((investor, index) => (
            <tr key={index} className={S.td}>
              <td className={S.tdCell}>{investor.name}</td>
              <td className={S.tdCell}>{index+1}</td>
              <td className={S.tdCell}>{investor.amount}</td>
              <td className={`${S.tdCell} ${S.comment}`}>{list.comment}</td>
              <Kebab lists={updateDelete}/>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default InvestmentTable