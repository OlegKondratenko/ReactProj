export const required = (value) => (value && value.length ? undefined : 'cant send empty message')


export let maxLengthCreator = (maxLength) => {
    return ((value) => (value && value.length > maxLength ? `max length ${maxLength}!!` : undefined))
}

export let maxlength10 = maxLengthCreator(30);