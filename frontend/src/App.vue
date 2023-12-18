<template>
    <Header/>
    <div class="ExternalLayout">
        <div class="InnerLayout">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()
        return {
            profile: store.state.profile
        }
    },
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="scss">
@import "@/styles/media.scss";
@import "@/styles/variables.scss";

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ExternalLayout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.InnerLayout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: $primary-color;
    width: 65vw;

    @include vw-lg-down {
        width: 85vw;
    }

    @include vw-md-down {
        width: 100vw;
    }
}

.MainLayout {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

.Button {
    background-color: $secondary-color;
    color: $primary-color;
    border: none;
    border-radius: 8px;
    padding: 10px 30px 10px;
    font-size: toRem(20px);
    transition: background-color 0.25s ease-in-out;

    &:hover {
        background-color: $hover-secondary-color;
    }
    &:active, &:focus {
        background-color: $active-secondary-color;
    }
}

h1, h2 {
    text-align: center;
}
</style>
