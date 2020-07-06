<template>
    <div class="canvas-central">
        <Header></Header>
        <div class="contenedor-contadores">
            <Contador
                :contador="contador"
                v-for="(contador, index) in contadores"
                :key="index">
            </Contador>
        </div>
        
        <!--<div class="inicial" v-if="!this.$store.getters['todos/hayContadores']"> <button>Agregar un contador</button> </div>-->
        <div class="inicial" v-if="!limiteContadores">
            <template v-if="hayContadores">
                <button 
                    @click="abrirModal" 
                    class="boton-agregar">Agregar un contador</button>
            </template>
            <template v-else>
                <button 
                    @click="abrirModal" 
                    class="boton-agregar animated flash">Agregar un contador</button>
            </template>
        </div>
        <div class="inicial" v-else>
            <button
                class="boton-agregar"
                disabled>Limite de contadores</button>
        </div>

        <Modal v-if="showModal" @cerrarModal="cerrarModal"></Modal>

        <Footer></Footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';
import Contador from '../components/Contador';
import Modal from '../components/Modal';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
    name: 'Home',
    //layout: 'contador',
    data(){
        return {
            showModal: false
        }
    },
    components: {
        Contador,
        Modal,
        Header,
        Footer
    },
    computed: {
        contadores() {
            return this.$store.state.todos.list
        },
        ...mapGetters({
            hayContadores: 'todos/hayContadores',
            limiteContadores: 'todos/limiteContadores'
        }),
    },
    methods: {
        abrirModal() {
            this.showModal = true;
        },
        cerrarModal() {
            this.showModal = false;
        }
    }
}
</script>

<style scoped>
.canvas-central {
    /*background-color: #1f1f1f;*/
    width: 97vw;
    height: 75vh;
    margin:0 auto;
}

.contenedor-contadores {
    height: 60vh;
    margin-top: 8rem;
    margin-bottom: 1rem;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 2px solid grey;
    padding: 0.8rem;
}

.inicial {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
}

.boton-agregar {
    width: 12rem;
    height: 3rem;
    border-radius: 1rem;
    border: 0;
    background-color: #5c6bc0;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.4rem;
}

.boton-agregar:hover {
    border: 5px solid grey;
    cursor: pointer;
}

.animated {
 -webkit-animation-duration: 5s;
 animation-duration: 5s;
 -webkit-animation-fill-mode: both;
 animation-fill-mode: both;
}
@-webkit-keyframes flash {
 0%, 50%, 100% {
 opacity: 1;
 }
25%, 75% {
 opacity: 0;
 }
}
@keyframes flash {
 0%, 50%, 100% {
 opacity: 1;
 }
25%, 75% {
 opacity: 0;
 }
}
.flash {
 -webkit-animation-name: flash;
 animation-name: flash;
}
</style>