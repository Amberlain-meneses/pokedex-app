import React from 'react'

const Pagination = (props) => {
    const {handlePaginationLeft,handlePaginationRight,page, totalPage}=props;
    return (
        <>
            <div className="pagination">
                <button onClick={handlePaginationLeft}><i class="fas fa-chevron-left"></i></button>
                <div> {page} de {totalPage} </div>
                <button onClick={handlePaginationRight}><i class="fas fa-chevron-right"></i></button>
            </div>
        </>
    )
}

export default Pagination;
