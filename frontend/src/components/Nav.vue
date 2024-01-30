<template>
    <nav class="Nav" :class="{ Nav_vertical: vertical }">
        <router-link class="Nav__link" to="/">
          О нас
        </router-link>
        <div class="Nav__dropdown">

            <a class="Nav__dropbutton Nav__link" :class="{ Nav__link_vertical: vertical }">
                Ассортимент
            </a>
            <div class="Nav__droplinks">
<!--                <router-link to="/nomenclature/products">Вся продукция</router-link>-->
                <router-link to="/nomenclature/materials">Материалы</router-link>
                <router-link to="/nomenclature/accessories">Фурнитура</router-link>
<!--                <router-link to="/add/product">Добавить продукт</router-link>-->
                <router-link to="/add/material">Добавить материал</router-link>
                <router-link to="/add/accessory">Добавить фурнитуру</router-link>
                <router-link to="/add/materials_arrival">Учет материалов</router-link>

            </div>
        </div>

  <!--        <router-link class="Nav__link" to="/orders">-->
  <!--            Заказы-->
  <!--        </router-link>-->

        <router-link class="Nav__link" to="/log-in">
        Авторизация
        </router-link>

        <router-link class="Nav__link" to="/profile">
            Профиль
        </router-link>

       <a href = "https://vk.com/utroclothes" class="Nav__link" >
          Наш ВК
       </a>
    </nav>
</template>

<script>
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()
        return {
            profile: store.state.profile
        }
    },
    props: {
        vertical: false,
    },
    name: 'Nav',
}
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/media.scss";

.Nav {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    @include vw-sm-down {
        display: none;
    }

    a {
        font-size: toRem(18px);
        color: #ffffff;
        padding: 12px 16px;
        text-decoration: none;
        transition: transform .3s;
    }



    &__dropdown {
        position: relative;
        display: inline-block;
    }

    &__dropbutton {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }


    &__droplinks {
        border-radius: 10px;
        display: none;
        position: absolute;
        background-color: #bbd8ca;
        min-width: 150px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;


        a {
            border-radius: 10px;
            font-size: none;
            display: block;
            color: black;
        }
    }

    &__link {
        &:hover {
            transform: scale(1.03);
            color: #413d3d;
            background-color: white;
            border-radius: 20px;

        }
        &:active, &.router-link-active{
            color: #ffffff;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.37);
        }

        &_vertical {
            a {
                color: white;
                padding: 12px 16px;
                text-decoration: none;
                margin-bottom: 20px;
                transition: color 0.25s ease-in-out;
            }
        }
    }
}

.Nav__droplinks a:hover {
  background-color: #D1EEFC;
}


.Nav__dropdown:hover .Nav__droplinks {
  display: block;
}

</style>
