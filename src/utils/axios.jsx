import axios from 'axios';

const base = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, authorization',
    // },
});

base.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err) {
            const { response } = err;
            if (response.status === 400 || response.status === 404 || response.status === 500) {
                return response;
            }
            return err;
        }
    },
);

const axiosGet = async (route) => base.get(route);

const axiosDelete = async (route) => base.delete(route);

const axiosPost = async (route, data) => base.post(route, data);

const axiosPut = async (route, data) => base.put(route, data);

export {
    base,
    axiosGet,
    axiosPost,
    axiosDelete,
    axiosPut,
};
