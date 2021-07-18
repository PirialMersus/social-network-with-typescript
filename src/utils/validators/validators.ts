export const validate = (values: any) => {
    const errors: any = {}
    if (!values.messageText) {
        errors.messageText = "Field is required"
    } else if(values.messageText.length > 30 ) {
        errors.messageText = "Must be 30 characters or less"
    }
    return errors
}

export const required = (value?: string) => {
    if (value) return undefined

    return  "Field is required"
}

export const maxLength10 = (value: string) => {
    if (value.length > 10) return 'Max length is 10 symbols'
    return undefined
}