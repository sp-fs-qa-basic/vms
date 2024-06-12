import CompanyChoice from "@/components/table/companyChoice/CompanyChoice";
import * as S from "./choiceTable.module.css";

function ChoiceTable({ title, lists, setShow, setCompany, option, count = 0 }) {
  return (
    <div className={S.container}>
      {title} ({lists.length})
      <div className={S.tableContainer}>
        {lists.map((company, index) => (
          <CompanyChoice
            key={index}
            id={company.companyId}
            src={company.imageUrl}
            name={company.name}
            category={company.category}
            recent={title.includes("최근") ? true : false}
            setShow={setShow}
            setCompany={setCompany}
            option={option}
            count={count}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoiceTable;
