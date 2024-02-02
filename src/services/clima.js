import api from "./api";

const APIKEY = 'f539f8fd2fb070b7a443cf00c745b882'

class Clima {
    async pegarClima(cidade) {
        const resposta = await api.get(`/api/v1/forecast/locale/${cidade}/days/15?token=${APIKEY}`)
        return resposta.data
    }
}

export default new Clima;