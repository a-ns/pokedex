export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            console.log('serializedState === null')
            return undefined
        }
        console.log('loadState success')
        return JSON.parse(serializedState)
    }
    catch (err) {
        return undefined
    }
}


export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState);
        console.log('saveState success')
    }
    catch (err) {
        // console.log(err)
    }
}