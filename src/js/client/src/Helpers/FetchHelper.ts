

export function isLoggedIn() {
    const token = localStorage.getItem("jwt");
    return !!token;
}

export function httpCall(method: "GET" | "POST", url: string, data?: any, allowNoToken: boolean = false): Promise<any> {
    const token = localStorage.getItem('jwt');

    if (!token && !allowNoToken) {
        return Promise.reject(new Error('No token found'));
    }

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } catch (error) {
                    reject(new Error('Failed to parse response'));
                }
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        xhr.onerror = function() {
            reject(new Error('Network error'));
        };

        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        if (data != null) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
}