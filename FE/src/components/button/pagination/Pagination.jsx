import PaginationBtn from "@/components/button/pagination/PaginationBtn";
import * as S from "./paginationBtn.module.css";

function Pagination({ pagination, onPageChange }) {
  const { currentOffset, limit, nextOffset, totalCount } = pagination;

  const getPageNumbers = () => {
    const totalPages = Math.ceil(totalCount / limit);
    const pageNumbers = [];

    const currentPage = Math.floor(currentOffset / limit) + 1;
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

  return (
    <div className={S.container}>
      <PaginationBtn
        type="<"
        onClick={() =>
          onPageChange((prev) => ({
            ...prev,
            currentOffset: currentOffset - limit,
            nextOffset: currentOffset,
          }))
        }
        disabled={currentOffset - limit < 0}
      />
      <div className={S.btnsContainer}>
        {getPageNumbers().map((pageNumber) => (
          <PaginationBtn
            key={pageNumber}
            type={pageNumber.toString()}
            onClick={() =>
              onPageChange((prev) => ({
                ...prev,
                currentOffset: (pageNumber - 1) * limit,
                nextOffset: pageNumber * limit,
              }))
            }
          />
        ))}
      </div>
      <PaginationBtn
        type=">"
        onClick={() =>
          onPageChange((prev) => ({
            ...prev,
            currentOffset: nextOffset,
            nextOffset: currentOffset + limit,
          }))
        }
        disabled={totalCount === nextOffset}
      />
    </div>
  );
}

export default Pagination;
