import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageLinks = () => {
    const pages = [];

    // Always show the first page
    // pages.push(
    //   <PaginationItem key={1}>
    //     <PaginationLink
    //       href="#"
    //       onClick={() => handlePageChange(1)}
    //       active={1 === currentPage}
    //     >
    //       1
    //     </PaginationLink>
    //   </PaginationItem>
    // );

    // Show ellipsis after the second page if there are more than 4 pages
    // if (totalPages > 2 && currentPage > totalPages - 2) {
    //   pages.push(
    //     <PaginationItem key="ellipsis-start">
    //       <PaginationEllipsis />
    //     </PaginationItem>
    //   );
    // }

    // Show the last two pages or the current page and surrounding pages
    const startPage = Math.max(1, currentPage);
    const endPage = Math.min(totalPages, currentPage);

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            onClick={() => handlePageChange(page)}
            active={page === currentPage}
            className={"w-fit px-3"}
          >
            page {""}
            {page} of {""}
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis before the last page if there are more than 2 pages
    // if (totalPages > 2 && currentPage < totalPages - 1) {
    //   pages.push(
    //     <PaginationItem key="ellipsis-end">
    //       <PaginationEllipsis />
    //     </PaginationItem>
    //   );
    // }

    // Always show the last page
    // if (totalPages > 1) {
    //   pages.push(
    //     <PaginationItem key={totalPages}>
    //       <PaginationLink
    //         href="#"
    //         onClick={() => handlePageChange(totalPages)}
    //         active={totalPages === currentPage}
    //       >
    //         {totalPages}
    //       </PaginationLink>
    //     </PaginationItem>
    //   );
    // }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          />
        </PaginationItem>
        {renderPageLinks()}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
