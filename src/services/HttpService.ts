export default class HttpService {
    static async get(url:string){
        const response=await fetch(url);
        return await response.json();
    }

    static async delete(url:string){
        const response=await fetch(url, {method: 'DELETE'});
        return await response.json();
    }

    private static async request(method:string, url: string, data: any, headers?: any) {
        const rHeaders={...headers, 'Content-Type': 'application/json'}; //...headers : copie de l'objet
        const response = await fetch(url, {
            method: "POST",
            headers: rHeaders,
            body: JSON.stringify(data),
        });
        return await response.json();
    }

    static async post(url: string, data: any, headers?: any) {
        return this.request('POST', url, data, {headers: headers});
    }

    static async put(url: string, data: any, headers?: any) {
        return this.request('PUT', url, data, {headers: headers});
    }

}