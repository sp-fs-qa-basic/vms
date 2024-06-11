import Horizon from "@/components/board/horizon/Horizon";
import TitleValueBoard from "@/components/board/titleValue/TitleValueBoard";
import Button from "@/components/button/Button";
import Pagination from "@/components/button/pagination/Pagination";
import CompanyTitle from "@/components/table/companyChoice/CompanyTitle";
import InvestmentTable from "@/components/table/investment/InvestmentTable";

function CompanyDetailPage() {
  return (
    <>
      <CompanyTitle />
      <Horizon />
      <TitleValueBoard />
      <div>
        <span>기업 소개</span>
        <span>{introduce}</span>
      </div>
      <div>
        {company}에서 받은 투자
        <Button name='기업 투자하기' />
      </div>
      <Horizon />
      <span>총 {amount}억 원</span>
      <InvestmentTable />
      <Pagination />
    </>
  );
}

export default CompanyDetailPage;
