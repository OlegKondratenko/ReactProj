import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = ({ onPageChanged, currentPage, totalUsersCount, pageSize, portionSize }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);


    let [minPage, setMinPage] = useState(1);
    let [maxPage, setMaxPage] = useState(minPage + portionSize);


    let onRightClick = () => {
        setMinPage(minPage + portionSize > pagesCount ? minPage : minPage + portionSize);
        setMaxPage(maxPage + portionSize > pagesCount ? pagesCount + 1 : maxPage + portionSize);
    }
    let onLeftClick = () => {
        setMinPage(minPage - portionSize < 1 ? 1 : minPage - portionSize);
        setMaxPage(minPage < portionSize ? portionSize + 1 : minPage);
    }



    let pages = [];
    for (let i = minPage; i < maxPage; i++) {
        pages.push(<span className={i === currentPage ? s.active : '' + " " + s.paginationListItem} key={i}
            onClick={() => onPageChanged(i)}> {i} </span>);

    }
    return (
        <div className={s.wrapper}>
            {minPage > 1 && <span className={s.navButton} onClick={onLeftClick}>Left</span>}
            {pages}
            {maxPage < pagesCount + 1 && <span className={s.navButton} onClick={onRightClick}>Right</span>}
        </div>)

}


export default Paginator;