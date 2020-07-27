export const connectToService = () => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:4000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: 'Test', password: 'Test' })
        })
        resolve(true)
    })
}
