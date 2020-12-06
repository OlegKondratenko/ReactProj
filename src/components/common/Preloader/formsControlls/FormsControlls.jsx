import React from 'react'
import s from './formsControlls.module.css';

export const Textarea = ({ input, meta, ...props }) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={s.formControll + " " + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} className={s.message}></textarea>
            </div>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}
export const Input = ({ input, meta, ...props }) => {

    let hasError = meta.error && meta.touched;
    return (
        <div className={s.formControll + " " + (hasError ? s.error : '')}>
            <div>
                <input {...input} type={props.type} className={s.message}></input>
            </div>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}

