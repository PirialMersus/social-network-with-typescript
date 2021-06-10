export const validate = (values: any) => {
    const errors: any = {}
    if (!values.messageText) {
        errors.messageText = "Field is required"
    } else if(values.messageText.length > 30 ) {
        errors.messageText = "Must be 30 characters or less"
    }
    return errors
}