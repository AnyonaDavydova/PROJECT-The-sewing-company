<template>
    <div class="MainLayout">
        <div class="ItemDetails">
            <img class="ItemDetails__img" :src="baseStaticURL+data.image" alt="">
            <table class="ItemDetails__table">
                <thead>
                    <tr>
                        <td>Наименование</td>
                        <td>Артикул</td>
                        <td>Длина</td>
                        <td>Ширина</td>
                        <td>Стоимость</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ data.name }}</td>
                        <td>{{ data.article }}</td>
                        <td>{{ data.length }}</td>
                        <td>{{ data.width }}</td>
                        <td>{{ data.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="Comment">
            {{data.comment}}
        </div>

        <div class="Used">
            <div class="Used__clothes">
                Используемые ткани:
                <router-link
                    class="Used__link"
                    v-for="cloth in data.clothes"
                    v-bind:key="cloth.article"
                    :to="'/nomenclature/materials/'+cloth.article"
                >
                    {{ cloth.name }}
                </router-link>
            </div>
            <div class="Used__access">
                Используемая фурнитура:
                <router-link
                    class="Used__link"
                    v-for="access in data.accessories"
                    v-bind:key="access.article"
                    :to="'/nomenclature/accessories/'+access.article"
                >
                    {{ access.name }}
                </router-link>
            </div>
        </div>

        <h2 v-if="prev.length > 0">История изменеий</h2>
        <ProductHistory
            v-for="item in prev"
            :key="item.id"
            :data="item"
        />
    </div>
</template>

<script>
import ProductHistory from '@/components/ProductHistory.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: "ProductDetail",
    components: {
        ProductHistory
    },
    setup() {
          const data = ref({})
        const prev = ref([])
        const store = useStore()
        const route = useRoute()

        store.dispatch("getProductInfo", route.params.id).then((data_)=> {
            console.log(data)
            data.value = data_
        })

        store.dispatch("getPreviousProducts", route.params.id)
            .then((data)=> {
                prev.value = data
            })

        return {
              data,
            prev,
            baseStaticURL: store.state.baseStaticURL
        }
    },
}
</script>

<style lang="scss">
@import "@/styles/media.scss";
@import "@/styles/variables.scss";
    .Comment {
        font-size: toRem(20px);
        font-style: italic;
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
    }
    .Used {
        display: flex;
        flex-direction: column;
        line-height: 1.5;
        max-width: 85%;

        a {
            text-decoration: none;
            color: $secondary-color;
            transition: color 0.25s ease-in-out;

            &:hover, &:active {
                color: #aecec3;
            }
        }

        &__clothes {
            margin-bottom: 15px;

            :not(:last-child) {
                &::after {
                    content: ", ";
                }
            }
        }

        &__access {
            margin-top: 15px;
            :not(:last-child) {
                &::after {
                    content: ", ";
                }
            }
        }
    }
</style>
