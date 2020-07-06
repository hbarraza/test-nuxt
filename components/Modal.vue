<template>
    <div class="modal">
        <div class="modal-content">
            <button @click="cerrarModal" class="close" title="Cerrar">X</button>
            <h3 class="title">Nuevo contador</h3>
            <div class="contenedor-valores">
                <span>Nombre</span>
                <input type="text" v-model="nombreContador" class="nombre" placeholder="Ingresa un nombre" ref="nomContador">
                <span>Valor</span>
                <input type="number" v-model="valorContador" class="valor">
            </div>
            <div v-if="errores" class="error">
                {{ errorDetalle }}
            </div>
            <div class="contenedor-guardar">
                <button @click="guardarContador" class="save">Guardar</button>
            </div>
        </div>

    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'Modal',
    data() {
        return {
            nombreContador: '',
            valorContador: null,
            errores: false,
            errorDetalle: ''
        }
    },
    props: {

    },
    methods: {
        guardarContador() {
            this.errores = false;
            if (parseInt(this.valorContador) >= 0 && parseInt(this.valorContador) <=20) {
                if (this.nombreContador.length < 20 && this.nombreContador.length > 0) {
                    let nuevoContador = {
                        nombre: this.nombreContador,
                        valor: parseInt(this.valorContador)
                    }

                    this.$store.commit('todos/agregarContador', { nuevoContador });
                    this.nombreContador = '';
                    this.valorContador = null;
                    this.cerrarModal();      
                } else {
                    this.errores = true;
                    this.errorDetalle = "* El nombre debe fluctuar entre 0 y a lo más 20 caracteres, incluidos los espacios";
                    console.error("El nombre debe tener a lo más 20 caracteres, incluidos los espacios")
                }
            } else {
                this.errores = true;
                this.errorDetalle = "* Valor ingresado debe fluctuar entre 0 y 20";
                console.error("Valor ingresado debe fluctuar entre 0 y 20")
            }
        },
        cerrarModal() {
            this.errores = false;
            this.$emit('cerrarModal');
        }
    },
    mounted: function(){
        this.$store.commit('todos/cargar');
        this.$refs.nomContador.focus();
    }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap');

.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    /*background-color: rgb(0,0,0);*/
    background-color: rgba(0,0,0,0.4);
    font-family: 'Nunito', sans-serif;
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 2rem;
    border: 1px solid #888;
    width: 40%;
}

.close {
    background-color:#c05c6b;
    color: white;
    float: right;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 50%;
    padding: .3rem;
    width: 2rem;
}

.close:hover,
.close:focus {
    background-color: #a84150;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.title {
    text-align: center;
    width: 100%;
    display: grid;
}

.contenedor-valores {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nombre {
    width: 12rem;
    margin-right: 2rem;
    margin-left: .5rem;
    padding-left: .3rem;
}

.valor {
    width: 3rem;
    margin-left: .5rem;
    padding-left: .3rem;
}

.contenedor-guardar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
}

.save {
    background-color: #5c6bc0;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding: .5rem;
    border-radius: .5rem;
}

.save:hover {
    background-color: #92a1f7;
}

.error {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.4rem;
    color: red;
    font-weight: bold;
}
</style>