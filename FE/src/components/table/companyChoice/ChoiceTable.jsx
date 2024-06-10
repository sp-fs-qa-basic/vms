import CompanyChoice from "@/components/table/companyChoice/CompanyChoice";
import * as S from "./choiceTable.module.css";
import { Companies } from "@/api/mock";

function ChoiceTable({ title }) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.tableContainer}>
        {Companies.map((company) => (
          <CompanyChoice
            src={company.src}
            name={company.name}
            category={company.category}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoiceTable;
