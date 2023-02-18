export const loadState = () => {
    const serializedData = localStorage.getItem('state')
    return JSON.parse(serializedData)
}

export const saveState = (state) => {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
}
