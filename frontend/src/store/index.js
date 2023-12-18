import {createStore} from 'vuex';

import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

const baseURL = "https://sewing.mrfox131.software/api/v1/"

export default createStore({
    state: {
        token: '',
        baseStaticURL: "https://sewing.mrfox131.software/",
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
                    reject()
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
                    reject(err)
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
                    reject(err)
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
                    reject(err)
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
                    reject(err)
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
                    reject(err)
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
                            reject(err)
                        })
                    }).catch((err) => {
                        reject(err)
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
                    reject(err)
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
                    reject(err)
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
                    reject(err)
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
                        reject(err)
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
                    reject(err)
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
                        reject(err)
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
                        reject(err)
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
                    reject(err)
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
                    reject(err)
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
                        reject(err)
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
                            reject(err)
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
                        reject(err)
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
                        reject(err)
                    })
            })
        },
    },
    modules: {},
    plugins: [createPersistedState()]
})
