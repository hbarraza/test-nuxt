<template>
    <div class="contenedor-contador">
        <h3 class="nombre">{{ contador.nombre }}</h3>
        <div class="contador">
            <button class="restar" @click="restarUno(contador)" title="Restar 1">-</button>
            <input type="number" disabled v-model="contador.valor" class="valor">
            <button class="sumar" @click="sumarUno(contador)" title="Sumar 1">+</button>
        </div>
        <button @click="eliminarContador(contador)" class="eliminar" title="Borrar"></button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'Contador',
    layout: 'contador',
    props: {
        contador: Object
    },
    methods: {
        restarUno(contador) {
            if (parseInt(contador.valor) > 0 && parseInt(contador.valor) <= 20) {
                this.$store.commit('todos/restarUno', { contador })    
            }
        },
        sumarUno(contador) {
            if (parseInt(contador.valor) >= 0 && parseInt(contador.valor) < 20) {
                this.$store.commit('todos/sumarUno', { contador })    
            }
        },
        eliminarContador(contador) {
            this.$store.commit('todos/eliminarContador', { contador })
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap');

.contenedor-contador {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a5d6a7;
    border-radius: 1rem;
    margin: 0.5rem 0.2rem;
    font-family: 'Nunito', sans-serif;
}

.nombre {
    width: 70%;
    text-align: left;
}

.contador {
    width: 20%;
}

.valor {
    width: 30%;
    height: 1.6rem;
    text-align: center;
}

.restar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid grey;
    font-size: 1.5rem;
    color: red;
}
.restar:hover {
    background-color: #d5939d;
}

.sumar:hover {
    background-color: #00ae00;
}

.sumar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid grey;
    font-size: 1.5rem;
    color: green;
}

.eliminar {
    background: url('../assets/trash.png');
    background-size: cover;
    height: 2rem;
    width: 2rem;
    outline: none;
    cursor: pointer;
    border: 0;
}

.eliminar:hover {
    filter: invert(100%);
}
</style>