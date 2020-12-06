import React from 'react';
import loadingImg from '../../../assets/images/preloader.svg';
import s from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <div className={s.preloaderWrapper}>
            <img src={loadingImg} className={s.preloaderImg}></img>
        </div>)
}

export default Preloader;