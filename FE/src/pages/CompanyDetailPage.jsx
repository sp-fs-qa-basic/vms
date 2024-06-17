import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@/components/button/Button";
import CompanyTitle from "@/components/table/companyChoice/CompanyTitle";
import DoInvestment from "@/components/modal/doInvestment/DoInvestment";
import Horizon from "@/components/board/horizon/Horizon";
import InvestmentTable from "@/components/table/investment/InvestmentTable";
import TitleValueBoard from "@/components/board/titleValue/TitleValueBoard";
import { getCompanies } from "@/api/company";
import * as S from "./pages.module.css";
import * as B from "@/components/button/button.module.css";

function CompanyDetailPage() {
  const { companyId } = useParams();
  const [company, setCompany] = useState({});
  const [show, setShow] = useState(false);

  const fetchCompany = async () => {
    const res = await getCompanies(companyId);
    setCompany(res.data);
  };

  useEffect(() => {
    fetchCompany();
  }, [companyId]);

  return (
    <>
      <div className={S.companyDetailPageContainer}>
        <CompanyTitle
          src={company.imageUrl}
          name={company.name}
          category={company.category}
        />
        <Horizon />
        <TitleValueBoard company={company} />
        <div className={S.introduceBox}>
          <span className={`${S.font} ${S.semi_bold}`}>기업 소개</span>
          <span className={`${S.font} ${S.regular}`}>
            {company.description}
          </span>
        </div>
        <div className={`${S.bold} ${S.investBox}`}>
          {company.name}에서 받은 투자
          <Button
            name="기업 투자하기"
            onClick={() => setShow(true)}
            className={`${B.light_half_circle} ${B.orange_background}`}
          />
        </div>
        <Horizon />
        <span className={S.bold}>
          총{" "}
          {Math.round(
            (company.actualInvest + company.simInvest) / 100000000
          ).toFixed(1)}
          억 원
        </span>
        {company.id && <InvestmentTable company={company} />}
      </div>
      {show && <DoInvestment title='기업에 투자하기' setShow={setShow} company={company} />}
    </>
  );
}

export default CompanyDetailPage;
