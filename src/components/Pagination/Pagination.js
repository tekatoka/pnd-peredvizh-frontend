import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import s from "./Pagination.module.scss";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames(s.paginationContainer, { [className]: className })}
    >
      <li
        className={classnames(s.paginationItem, {
          [s.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={s.arrow}>
          <i className="fa fa-angle-double-left" />
        </div>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className={classnames(s.paginationItem, s.dots)}>&#8230;</li>
          );
        }

        return (
          <li
            className={classnames(s.paginationItem, {
              [s.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(s.paginationItem, {
          [s.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        {/* <div className={classnames(s.arrow, s.right)} /> */}
        <div className={s.arrow}>
          <i className="fa fa-angle-double-right" />
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
