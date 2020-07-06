export const state = () => ({
    list: [],
    originalGuardado: false,
    filtroAplicado: {
        tipoFiltro: '',
        valorFiltro: null
    }
})

export const mutations = {
    agregarContador(state, { nuevoContador }) {
        state.list.push(nuevoContador)
        mutations.salvar(state)
    },
    eliminarContador (state, { contador }) {
        state.list.splice(state.list.indexOf(contador), 1)
    },
    sumarUno(state, { contador }) {
        let objetoAux = contador;
        objetoAux.valor += 1;
        state.list.splice(state.list.indexOf(contador), 1, objetoAux);
    },
    restarUno(state, { contador }) {
        let objetoAux = contador;
        objetoAux.valor -= 1;
        state.list.splice(state.list.indexOf(contador), 1, objetoAux);
    },
    ordenarBy(state, { valor }) {
        switch(valor){
            case 'nombreAsc':
                state.list.sort(function(a,b){if(a.nombre > b.nombre){return 1;} if(a.nombre < b.nombre){return -1;} return 0;})
                break;
            
            case 'nombreDesc':
                state.list.sort(function(a,b){if(a.nombre < b.nombre){return 1;} if(a.nombre > b.nombre){return -1;} return 0;})
                break;
            
            case 'valorAsc':
                state.list.sort(function(a,b){if(a.valor > b.valor){return 1;} if(a.valor < b.valor){return -1;} return 0;})
                break;
            
            case 'valorDesc':
                state.list.sort(function(a,b){if(a.valor < b.valor){return 1;} if(a.valor > b.valor){return -1;} return 0;})
                break;
        }
    },
    salvar(state) {
        localStorage.setItem("list", JSON.stringify(state.list));
        state.originalGuardado = true;
    },
    cargar(state) {
        let lista = JSON.parse(localStorage.getItem("list"));
        state.list = lista;
    },
    aplicarFiltro(state, { tipoFiltro, valorFiltro }) {
        switch(tipoFiltro){
            case 'mayor':
                state.list = state.list.filter( contador => { return contador.valor > parseInt(valorFiltro)} )
                break;

            case 'mayorIgual':
                state.list = state.list.filter( contador => { return contador.valor >= parseInt(valorFiltro)} )
                break;

            case 'menor':
                state.list = state.list.filter( contador => { return contador.valor < parseInt(valorFiltro)} )
                break;

            case 'menorIgual':
                state.list = state.list.filter( contador => { return contador.valor <= parseInt(valorFiltro)} )
                break;
        }

        mutations.salvarFiltro(state, { tipoFiltro, valorFiltro });
    },
    salvarFiltro(state, { tipoFiltro, valorFiltro }) {
        state.filtroAplicado.tipoFiltro = tipoFiltro;
        state.filtroAplicado.valorFiltro = valorFiltro;
        sessionStorage.setItem("filtrosAplicados", JSON.stringify(state.filtroAplicado));
    },
    cargarFiltros(state) {
        let filtrosAplicados = JSON.parse(sessionStorage.getItem("filtrosAplicados"));
        if (!filtrosAplicados) {
            state.filtroAplicado.tipoFiltro = '';
            state.filtroAplicado.valorFiltro = null;
        } else {
            state.filtroAplicado = filtrosAplicados;
        }
    },
    limpiarFiltros(state) {
        state.filtroAplicado.tipoFiltro = '';
        state.filtroAplicado.valorFiltro = null;
        sessionStorage.removeItem("filtrosAplicados");
    }
}

export const getters = {
    hayContadores(state) {
        return state.list.length > 0 ? true:false;
    },
    limiteContadores(state) {
        return state.list.length < 20 ? false:true;
    },
    sumatoriaContadores(state) {
        let sumatoria = 0;
        state.list.forEach( contador => { sumatoria += parseInt(contador.valor)})
        return sumatoria;
    },
    originalGuardado(state) {
        return state.originalGuardado;
    },
    estadoTipoFiltro(state) {
        return state.filtroAplicado.tipoFiltro;
    },
    estadoValorFiltro(state) {
        return state.filtroAplicado.valorFiltro;
    }
}