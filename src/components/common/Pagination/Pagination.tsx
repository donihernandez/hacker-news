import type { FC } from 'react';
import { useNewsContext } from '../../../contexts';
import { DOTS, usePagination } from '../../../hooks';

import './Pagination.css';

const Pagination: FC = () => {
    const { currentPage, setCurrentPage, totalPages } = useNewsContext();

    const paginationRange = usePagination({
        currentPage,
        pageSize: 20,
        siblingCount: 5,
        totalPages,
    });

    const onNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const onPrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 2];

    return (
        <div className="pagination__container">
            <div
                className={`page__button ${currentPage === 0 && 'disabled'}`}
                onClick={onPrevious}
            >
                <div className="arrow arrow__left"></div>
            </div>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return (
                        <div className="page__button" key={pageNumber}>
                            &#8230;
                        </div>
                    );
                }

                return (
                    <div
                        className={`page__button ${
                            currentPage === Number(pageNumber) - 1 && 'active'
                        }`}
                        key={pageNumber}
                        onClick={() => setCurrentPage(Number(pageNumber) - 1)}
                    >
                        {pageNumber}
                    </div>
                );
            })}
            <div
                className={`page__button ${
                    currentPage === Number(lastPage) && 'disabled'
                }`}
                onClick={onNext}
            >
                <div className="arrow arrow__right"></div>
            </div>
        </div>
    );
};

export { Pagination };
