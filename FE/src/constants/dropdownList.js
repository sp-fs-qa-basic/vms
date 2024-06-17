import { deleteInvestment, updateInvestment } from "@/api/investment";

export const sortList = [
  { label: "누적 투자금액 높은순", view: "actualInvestDesc" },
  { label: "누적 투자금액 낮은순", view: "actualInvestAsc" },
  { label: "매출액 높은순", view: "revenueDesc" },
  { label: "매출액 낮은순", view: "revenueAsc" },
  { label: "고용 인원 많은순", view: "employeeDesc" },
  { label: "고용 인원 적은순", view: "employeeAsc" },
];

export const compareSortList = [
  { label: "나의 기업 선택 횟수 높은순", view: "mySelectionDesc" },
  { label: "나의 기업 선택 횟수 낮은순", view: "mySelectionAsc" },
  { label: "비교 기업 선택 횟수 높은순", view: "comparedSelectionDesc" },
  { label: "비교 기업 선택 횟수 낮은순", view: "comparedSelectionAsc" },
];

export const investSortList = [
  { label: "View My Startup 투자 금액 높은순", view: "simInvestDesc" },
  { label: "View My Startup 투자 금액 낮은순", view: "simInvestAsc" },
  { label: "실제 누적 투자 금액 높은순", view: "actualInvestDesc" },
  { label: "실제 누적 투자 금액 낮은순", view: "actualInvestAsc" },
];

export const investmentSortList = [
  "View My Startup 투자 금액 높은순",
  "View My Startup 투자 금액 낮은순",
  "실제 누적 투자 금액 높은순",
  "실제 누적 투자 금액 높은순",
];

export const updateDelete = [
  { label: "수정하기", fu: updateInvestment },
  { label: "삭제하기", fu: deleteInvestment},
];
