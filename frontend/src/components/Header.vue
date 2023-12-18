<template>
    <header>


        <Nav/>


        <button type="button" class="offCanvasButton" v-if="!isOpen" @click="isOpen=true">
            <img
                src="@/assets/iconDESIGN/vkIcon.png"
                alt="Меню"
            >
        </button>

        <teleport to="body">
            <Slide 
                right :burgerIcon="false" 
                :isOpen="isOpen" 
                @closeMenu="isOpen = false" 
                
                noOverlay
            >
                <Nav :vertical="true" />
            </Slide>
        </teleport>
    </header>
</template>

<script>
import Nav from '@/components/Nav.vue'
import { Slide } from 'vue3-burger-menu'

export default {
    
    name: "Header",
    components: {
        Nav,
        Slide,
    },
    data() {
        return {
            linkVK: 'Свяжитесь с нами',
            isOpen: false,
        }
    }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/media.scss";
.Nav{
  margin-left: 27%;
  @include vw-md-down {
    margin-left: 4%;
  }
}
header {
  background-color: rgba(0, 0, 0, 0.61);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 70px;

    @include vw-md-down {
        padding: 20px;
    }

    .Logo {
        margin-right: 180px;
        margin-left: 200px;
        width: 60px;

        @include vw-md-down {
            margin: 0 50px 0 10px;
            width: 50px;
        }
    }

    a {
        text-decoration: none;
        margin: 2px;
        &:hover, &:active, &:focus {
            text-decoration: underline;
        }
    }
    .offCanvasButton {
        padding: 0;
        margin: 0;
        border: none;
        background-color: white;
        margin-left: auto;
        margin-right: 20px;

        @include vw-sm-up {
            display: none;
        }
    }
}

.bm-menu {
    background-color: $dim-white;
}
</style>
