import Axios from './AxiosInstance.js'

import qs from 'qs';

const query = {
    checkEmail: (email) => {
        return qs.stringify({
        filters: {
            email: {
                $eq: email,
            },
        },
        populate: { cloud_user: true },
        }, {
            encodeValuesOnly: true, // prettify URL
        })
    },
    checkEmailPassword: (email, password) => {
        return qs.stringify({
            filters: {
                email: {
                    $eq: email,
                },
                password: {
                    $eq: password,
                },
            },
            populate: { cloud_user: true },
            }, {
                encodeValuesOnly: true, // prettify URL
            })
    },
}

export const getAllHack = async () => {
    let mdata = await Axios.get('/hackathons')
    .then((res) => {
        return {
            status: 200,
            data: res.data.data,
        }
    })
    .catch((err) => {
        return err.response
    })

    return {
        source: 'getAllHack',
        data: mdata,
    }
}

export const create = async (data) => {
    console.log('add user', data);

    // console.log('query', query);

    let mdata = await Axios.get(`/global-users?${query.checkEmail(data.email)}`)
    .then(async (res) => {
        if (res.data.data.length === 0) {
            console.log('no user found');

            const globalUserRes = await Axios.post('/global-users', {
                "data": {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    firstname: data.firstname,
                    lastname: data.lastname,
                },
            })
            const cloudUserRes = await Axios.post('/cloud-users', {
                "data": {
                    global_user: {
                        connect: [globalUserRes.data.data.id]
                    },
                },
            })

            return {
                status: 200,
                msg: 'user created',
                cloud_user_id: cloudUserRes.data.data.id,                
            }

        }

        return {
            status: 403,
            msg: 'user already found',
        }
    })
    .catch((err) => {
        return err.response
    })

    return {
        source: 'createUser',
        data: mdata,
    }
}