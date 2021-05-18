export const clearInput = (event: { target: { value: string; }[]; }) => {
    event.target[0].value = ''
    event.target[1].value = ''
    event.target[2].value = ''
}