import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaginationBtn from "@/components/button/pagination/PaginationBtn";
import * as S from "./paginationBtn.module.css";

function Pagination({ pagination, onPageChange }) {
  const { totalCount } = pagination;
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get("limit") || 10;
  const offset = searchParams.get("offset") || 0;
  const [currentPage, setCurrentPage] = useState(Math.floor(offset / limit) + 1);

  const getPageNumbers = () => {
    const totalPages = Math.ceil(totalCount / limit);
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + 4);
      } else {
        startPage = Math.max(1, endPage - 4);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageChange = (newPage) => {
    const newOffset = (newPage - 1) * limit;
    
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.set("offset", newOffset);
      return params;
    });
 
    onPageChange((prev) => ({
      ...prev,
      currentOffset: newOffset,
      nextOffset : newOffset + limit,
    }));

    setCurrentPage(newPage);
  };

  return (
    <div className={S.container}>
      <PaginationBtn
        type="<"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <div className={S.btnsContainer}>
        {getPageNumbers().map((pageNumber) => (
          <PaginationBtn
            key={pageNumber}
            type={pageNumber.toString()}
            onClick={() => handlePageChange(pageNumber)}
            active={pageNumber === currentPage}
          />
        ))}
      </div>
      <PaginationBtn
        type=">"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalCount / limit)}
      />
    </div>
  );
}

export default Pagination;
