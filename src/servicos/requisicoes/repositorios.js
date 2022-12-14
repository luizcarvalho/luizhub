import api from '../api'

export async function pegarRepositoriosDoUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);

        return resultado.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function salvarRepositoriosDoUsuario(nome, data, postId, id) {
    try {
        await api.put(`/repos/${id}`, { name: nome, data: data, postId: postId, id: id });

        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}

export async function criarRepositoriosDoUsuario(nome, data, postId) {
    try {
        await api.post(`/repos/`, { name: nome, data: data, postId: postId });

        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}

export async function deletarRepositoriosDoUsuario(id) {
    try {
        await api.delete(`/repos/${id}`);

        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}