<template>
    <div class="barra">
        <div class="contenedor-salvar">
            <button class="boton-salvar" @click="salvarLista" title="Salvar lista">Salvar lista</button>
        </div>
        <div class="contenedor-sumatoria">
            <img class="logo-sumatoria" src="../assets/suma.png" />
            <span class="sumatoria">{{ sumatoria }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Footer',
    layout: 'footer',
    computed: {
        sumatoria() {
            return this.$store.getters['todos/sumatoriaContadores']
        }
    },
    methods: {
        salvarLista(){
            this.$store.commit('todos/salvar');
        }
    }
}
</script>

<style scoped>
/* morado fuerte 4527a0*/
/* morado tenue 5c6bc0*/
/* verde tenue a5d6a7*/
/* negro fondo 1f1f1f */
/* boton aceptar guardar 5c6bc0*/
/* boton cancelar guardar 92a1f7*/

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap');

.barra {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3rem;
    background-color: #4527a0;
    color: white;
    font-family: 'Nunito', sans-serif;
}

.contenedor-sumatoria {
    width: 50%;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.logo-sumatoria {
    height: 2rem;
    width: 2rem;
    filter: invert(100%);
}

.sumatoria {
    background-color: white;
    color: black;
    text-align: center;
    width: 3rem;
    margin: 0 0.5rem;
    font-weight: bold;
}

.contenedor-salvar {
    width: 40%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.boton-salvar {
    margin: 0.5rem;
    background-color: #009a9a;
    color: white;    
}

.boton-salvar:hover {
    cursor: pointer;
    background-color: teal;
}
</style>