import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        good_list: [{
            id: '1',
            name: 'iPhone6',
            price: 2399
        }, {
            id: '2',
            name: 'iQoo5',
            price: 1999
        }, {
            id: '3',
            name: '小米11',
            price: 4999
        }, {
            id: '4',
            name: 'vivo 11X',
            price: 6999
        }],
        //添加到购物车的商品
        added: []
    },
    getters: {
        //商品列表
        goodList: state => {
            return state.good_list.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    price: item.price.toFixed(2)
                }
            })
        },

        //购物车的列表
        cartProducts: state => {
            return state.added.map(({ id, num }) => {
                let product = state.good_list.find(item => item.id == id)
                // console.info('product',product)
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price.toFixed(2),
                    num,
                    total_num: (product.price * num).toFixed(2)
                }
            })
        },

        //计算总价
        totalPrice: (state, getters) => {
            let total = 0;
            getters.cartProducts.forEach(item => {
                total += item.price * item.num
            })
            return total.toFixed(2);
        },

        //计算总数量
        totalNum: (state, getters) => {
            let total = 0;
            getters.cartProducts.forEach(item => {
                total += item.num
            })
            return total;
        }
    },
    mutations: {
        //加入购物车
        ADD_TO_CART(state, { id }) {
            let record = state.added.find(item => item.id == id);
            if (!record) {
                state.added.push({
                    id,
                    num: 1
                })
            } else {
                record.num++
            }
        },

        //购物车商品数量改变
        NUM_CHANGE(state, { id, value }) {
            state.added.forEach((item, index) => {
                if (item.id == id) {
                    item.num = value;
                }
            });
        },

        //删除购物车的指定的商品
        DELETE(state, product) {
            //console.info(state,product)
            state.added.forEach((item, index) => {
                if (item.id == product.id) {
                    //console.info( item )
                    //找到index的下标值
                    state.added.splice(index, 1);
                }
            })
        },

        //清空购物车
        CLEAR(state) {
            state.added = []
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', {
                id: product.id
            })
        },

        numChange({ commit }, data) {
            commit('NUM_CHANGE', {
                id: data.id,
                value: data.value
            })
        },

        //删除购物车的指定的商品
        delProduct({ commit }, product) {
            commit('DELETE', product)
        },

        //清空购物车
        clearAllCart({ commit }) {
            commit('CLEAR')
        }
    },
    modules: {
    }
})
