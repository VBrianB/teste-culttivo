import api from "./api";

class Clima {
    async pegarClima(cidade) {
        const resposta = await api.get(`/api/v1/forecast/locale/${cidade}/days/15?token=${import.meta.env.VITE_TOKEN_API}`)
        return resposta.data
    }
}

export default new Clima;