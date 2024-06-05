import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompaniesPage from "@/pages/CompaniesPage";
import ComparisonPage from "@/pages/ComparisonPage";
import CompanyDetailPage from "@/pages/CompanyDetailPage";
import InvestmentsPage from "@/pages/InvestmentsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompaniesPage />} />
        <Route path="/comparison" element={<ComparisonPage />}>
          <Route path=":companyId" element={<CompanyDetailPage />} />
        </Route>
        <Route path="/investment" element={<InvestmentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
