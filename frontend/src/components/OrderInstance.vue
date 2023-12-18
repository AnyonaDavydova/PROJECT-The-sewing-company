<template>
    <div class="Order" @click="push_to_id">
        <img v-if="wait" class="Order__img" src="@/assets/iconSTATUS/waiting_status.png">
        <img v-if="reject" class="Order__img" src="@/assets/iconSTATUS/reject_status.png">
        <img v-if="complete" class="Order__img" src="@/assets/iconSTATUS/complete_status.png">
        <table class="Order__table">
            <thead>
                <tr>
                    <td>Номер:</td>
                    <td>Заказчик:</td>
                    <td>Статус:</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ card.id }}</td>
                    <td>{{ card.customer.name }}</td>
                    <td>{{ card.stage }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { useRouter } from 'vue-router';

export default {
    name: "OrderInstance",
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    data() {
        let complete = false, wait = false, reject = false
        if (this.card.stage == 2 || this.card.stage == 4)
            complete = true
        else if (this.card.stage == 1)
            wait = true
        else if (this.card.stage == 3)
            reject = true

        return {
            complete,
            wait,
            reject,
            router: useRouter()
        }
    },
    methods: {
        push_to_id(){
            this.router.push("/orders/"+this.card.id)
        }
    }
}
</script>

<style lang="scss">
@import "@/styles/media.scss";
@import "@/styles/variables.scss";
    .Order {
        display: flex;
        flex-direction: row;
        border: solid 1px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        background-color: #EEF9FF;
        padding: 20px;
        margin-left: 10px;
        margin-right: 10px;
        align-items: center;
        transition: box-shadow 0.25s ease-in-out;

        @include vw-sm-down {
            flex-direction: column;
        }

        &:hover, &:focus {
            box-shadow: 5px 10px 16px 0px rgba(0,0,0,0.5);
        }

        &__img {
            width: 100px;
            padding: 10px;
            margin-right: 30px;
        }

        &__table {
            display: flex;
            flex-direction: row;
            font-size: toRem(20px);

            tr {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            }

            tbody {
                word-break: break-all;
            }

            td {
                padding: 8px;
                word-break: break-all;
            }
        }
    }
</style>
