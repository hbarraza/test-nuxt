<template>
    <div class="barra">
        <div class="contenedor-titulo">
            <div class="titulo">Administrador de contadores</div>
        </div>
        <div class="contenedor-filtros">
            <div class="contenedor-ordenar">
                <p class="titulo-ordenar">Ordenar</p>
                <select class="select-ordenar" @change="ordenar($event)">
                    <option value="nombreAsc">Por nombre (Ascendente)</option>
                    <option value="nombreDesc">Por nombre (Descendente)</option>
                    <option value="valorAsc">Por valor (Ascendente)</option>
                    <option value="valorDesc">Por valor (Descendente)</option>
                </select>
            </div>

            <div class="contenedor-filtro">
                <p class="titulo-filtro">Filtro</p>
                <select class="select-filtro-nombre" v-model="tipoFiltro">
                    <option value="mayor">Mayor que</option>
                    <option value="mayorIgual">Mayor o igual que</option>
                    <option value="menor">Menor que</option>
                    <option value="menorIgual">Menor o igual que</option>
                </select>
                <input type="number" class="numero-filtro" v-model="valorFiltro">
                <button class="boton-aplicar-filtro" @click="aplicarFiltro">Aplicar filtro</button>
                <button class="boton-limpiar-filtros" @click="limpiarFiltros" title="limpiar">X</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'Header',
    data() {
        return {
            tipoFiltro: '',
            valorFiltro: null,
        }
    },
    computed: {
        ...mapGetters({
            originalGuardado: 'todos/originalGuardado'
        }),
    },
    methods: {
        ordenar(evento) {
            let valor = evento.target.value;
            this.$store.commit('todos/ordenarBy', { valor })
        },
        aplicarFiltro() {
            if (!this.originalGuardado) {
                this.$store.commit('todos/salvar');
            }

            let tipoFiltro = this.tipoFiltro;
            let valorFiltro = this.valorFiltro;
            this.$store.commit('todos/aplicarFiltro', { tipoFiltro, valorFiltro })
        },
        limpiarFiltros() {

        },
        guardarActual() {
            // Store
            
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
    top: 0;
    width: 100%;
    height: 6rem;
    background-color: #4527a0;
    color: white;
    font-family: 'Nunito', sans-serif;
}

.contenedor-titulo {
    display: block;
    width: 100%;
}

.titulo {
    text-align: center;
    font-size: 1.5rem;
}

.contenedor-filtros {
    width: 100%;
    height: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
}

.contenedor-ordenar {
    width: 20%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #5731c9;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.titulo-ordenar {
    padding: .5rem .7rem;
}

.titulo-filtro {
    padding: .5rem .7rem;
}

.select-ordenar {
    background-color: #5c6bc0;
    color: white;
}

.contenedor-filtro {
    width: 35%;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #5731c9;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-left: 3rem;
}

.select-filtro-nombre {
    background-color: #5c6bc0;
    color: white;
    margin: 0.5rem;
}

.numero-filtro {
    margin: 0.5rem;
}

.boton-aplicar-filtro {
    margin: 0.5rem;
    background-color: teal;
    color: white;
    cursor: pointer;
}

.boton-limpiar-filtros {
    border-radius: 50%;
    background-color: #d80000;
    color: white;
    font-size: 1rem;
}

.boton-limpiar-filtros:hover {
    cursor: pointer;
    background-color: #cc0000;

}
</style>