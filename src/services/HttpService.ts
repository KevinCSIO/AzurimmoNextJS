export default class HttpService {
    static async get(url:string){
        const response=await fetch(url);
        return await response.json();
    }

    static async delete(url:string){
        const response=await fetch(url, {method: 'DELETE'});
        return await response.json();
    }

    static async post(url: string, data: any) {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await response.json();
    }

}