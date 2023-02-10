export const api = "http://localhost:3001/api"

export const requestConfig = (method, data) => {
    
    let config 

    if (method === "DELETE" || data === null) {
        config = {
            method,
            headers: {},
        }
    } else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }
    }

    return config;

}
