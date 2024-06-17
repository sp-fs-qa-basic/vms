import { useEffect, useState } from "react";
import { InvestmentTitles as titles } from "@/constants/titleList";
import Kebab from "@/components/button/kebab/Kebab";
import { updateDelete } from "@/constants/dropdownList";
import Pagination from "@/components/button/pagination/Pagination";
import { getInvestment } from "@/api/investment";
import * as S from "./investmentTable.module.css";

function InvestmentTable({ company }) {
  const [investors, setInvestors] = useState([]);
  const [pagination, setPagination] = useState({});

  const fetchInvests = async () => {
      const res = await getInvestment(company.id, null);
      setInvestors(res.data.investors);
      setPagination(res.data.pagination);
  };

  useEffect(() => {
    fetchInvests();
  }, []);

  return (
    <div className={S.container} >
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
          {investors.map((investor, index) => (
            <tr key={index} className={S.td}>
              <td className={S.tdCell}>{investor.name}</td>
              <td className={S.tdCell}>{index + 1}</td>
              <td className={S.tdCell}>
                {investor.amount / 100000000}억
              </td>
              <td className={`${S.tdCell} ${S.comment}`}>
                {investor.comment}
              </td>
              <td className={S.tdCell}>
                <Kebab lists={updateDelete} investor={investor} id={investor.id} company={company}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination data={investors} pagination={pagination} onPageChange={setPagination} />
    </div>
  );
}

export default InvestmentTable;
