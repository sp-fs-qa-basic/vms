import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompaniesPage from "@/pages/CompaniesPage";
import ComparisonPage from "@/pages/ComparisonPage";
import CompanyDetailPage from "@/pages/CompanyDetailPage";
import InvestmentsPage from "@/pages/InvestmentsPage";
import MyComparisonPage from "@/pages/MyComparisonPage";
import Test from "@/pages/test";
import Layout from "@/components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<CompaniesPage />} />
          <Route path="/comparison" element={<ComparisonPage />}>
            <Route path=":companyId" element={<CompanyDetailPage />} />
          </Route>
          <Route path='/myComparison' element={<MyComparisonPage />} />
          <Route path="/investment" element={<InvestmentsPage />} />
          <Route path='/test' element={<Test />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
