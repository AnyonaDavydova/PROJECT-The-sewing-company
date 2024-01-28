import {createStore} from 'vuex';

import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

const baseURL = "http://localhost:9000/api/v1/"

export default createStore({
    state: {
        token: '',
        baseStaticURL: "http://localhost:9000/",
        profile: {}
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setProfile(state, profile) {
            console.log("setting profile: ", profile)
            state.profile = profile
        }
    },
    actions: {

        registration({commit, dispatch}, payload) {
            return new Promise((resolve, reject) => {
                axios.post(baseURL + "register/",
                    payload
                ).then((response) => {
                    console.log("Registration successfull")
                    console.log(response)
                    // dispatch("getProfile")
                    resolve()
                }).catch((err) => {
                    console.log(err)
                })
            })
        },
        login({commit, dispatch}, payload) {
            return new Promise((resolve, reject) => {
                axios.post(baseURL + "plane_login/",
                    payload
                ).then((response) => {
                    console.log("Logged in successfully")
                    console.log(response)
                    commit("setToken", response.data.access_token)
                    dispatch("getProfile")
                    resolve()
                }).catch((err) => {
                    console.log(err)
                    console.log()
                })
            })
        },
        getProfile({state, commit}) {
            return new Promise((resolve, reject) => {
                axios.get(
                    baseURL + "me",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    }
                ).then((response) => {
                    commit("setProfile", response.data)
                    resolve(response.data);
                }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getClothes({state}) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "cloth",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getAccessories({state}) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "accessory",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getProducts({state}) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "product",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getOrders({state}) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "order",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getAccessoryDetails({state}, article) {
            return new Promise(async (resolve, reject) => {
                let data = {}
                axios.get(baseURL + "accessory_by_id/" + article,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        data.accessory = response.data
                        console.log("data1: ", data)
                        axios.get(baseURL + "accessory/" + article,
                            {
                                headers: {
                                    "Authorization": "Bearer " + state.token
                                }
                            })
                            .then((response) => {
                                data = {
                                    ...(response.data),
                                    accessory: data.accessory
                                }
                                resolve(data)
                                console.log("data2: ", data)
                            }).catch((err) => {
                            console.log(err)
                        })
                    }).catch((err) => {
                        console.log(err)
                    })


            })
        },
        accessoryDecommission({state}, payload) {
            return new Promise((resolve, reject) => {
                axios.patch(baseURL + "accessory/" + payload.article + "?quantity=" + payload.count.toString(),
                    {},
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve()
                    }).catch((err) => {
                    console.log(err)
                })
            })
        },
        accessoryDecommissionInKg({state}, payload) {
            return new Promise((resolve, reject) => {
                axios.patch(baseURL + "accessory_in_kg/" + payload.article + "?amount=" + payload.count.toString(),
                    {},
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve()
                    }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getClothDetails({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "cloth/" + article,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getClothById({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "cloth_by_id/" + article,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        },
        clothDecommission({state}, payload) {
            return new Promise((resolve, reject) => {
                axios.patch(baseURL + "cloth/" + payload.article + "/" + payload.number + "?length=" + payload.length.toString(),
                    {
                        length: payload.length
                    },
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    }
                ).then((response) => {
                    resolve()
                }).catch(err => {
                    console.log(err)
                })
            })
        },
        getProductInfo({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "product/" + article,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        },
        getPreviousProducts({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "product/" + article + "/previous",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        },
        createNewProduct({state}, payload) {
            return new Promise((resolve, reject) => {
                axios.post(
                    baseURL + "product",
                    payload,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                .then((data) => {
                    resolve(data.data)
                }).catch((err) => {
                    console.log(err)
                })
            })
        },
        createNewAccessory({state}, payload) {
            return new Promise((resolve, reject) => {
                axios.post(
                    baseURL + "accessory",
                    payload,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                .then((data) => {
                    resolve(data.data)
                }).catch((err) => {
                    console.log(err)
                })
            })
        },
        createNewMaterial({state}, payload) {
            return new Promise((resolve, reject) => {
                axios.post(
                    baseURL + "cloth",
                    payload,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                .then((data) => {
                    resolve(data.data)
                }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getOrderInfo({state}, article){
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "order/" + article,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        },
        getOrderProducts({state}, article) {
                return new Promise((resolve, reject) => {
                    axios.get(baseURL + "get_products_by_order_id/" + article,
                        {
                            headers: {
                                "Authorization": "Bearer " + state.token
                            }
                        })
                        .then((response) => {
                            resolve(response.data)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
        },
        goodsArrival({state}, payload) {
            return new Promise((resolve, reject) => {
                axios.post(baseURL + "goods_arrival",payload,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    },
                )
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        },
        getMappings({state}, order_id) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL + "get_cloth_mappings/"+order_id,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    },
                )
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        },
    },
    modules: {},
    plugins: [createPersistedState()]
})
