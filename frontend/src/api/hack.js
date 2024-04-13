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
export const getHack = async (id) => {
    let mdata = await Axios.get(`/hackathons/:${id}`)
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

export const createHack = async (data) => {

    const hack = await Axios.post('/hackathons?pagination[page]=1&pagination[pageSize]=10', {
        "data": {
            name: data.name,
            desc: data.desc,
            // startdate: data.startDate,
            // enddate: data.enddate,
            price: data.price,
            banner: data.banner,
            logo: data.logo,
            fee: data.fee,
            topics: data.topics,
        },
    })


    return {
        source: 'createUser',
        data: hack,
    }
}