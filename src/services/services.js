export default class CakeShopService {
    _apiBase = "http://localhost:3000";

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    async getCakes() {
        return await this.getResourse(`/cakes/`);
    }
}
