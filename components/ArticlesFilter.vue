<template>
    <aside class="father_item">
        <div v-for="(item, index) in filter" :key="index" @click="selectFilter(item)" style="cursor:pointer">
            <p :style="item.status ? 'color:#D8AD3D' : 'color:#3F454A'">{{ item.content }}</p>
            <v-spacer></v-spacer>
            <img v-show="item.status" :src="require('~/assets/select.png')">
        </div>
    </aside>
</template>
<script>
    import { mapActions } from "vuex";
    export default {
        data(){
            return {
                filter: {
                    all: {content: "TODOS", value: "", status: true},
                    products: {content: "PRODUCTOS", value: "PRODUCTOS", status: false},
                    recipes: {content: "RECETAS", value: "RECETAS", status: false},
                    advice: {content: "CONSEJOS", value: "CONSEJOS", status: false}
                }
            }
        },
        methods: {
            ...mapActions("products", ["articlesFilterAction"]),
            selectFilter(item){
                this.articlesFilterAction(item.value)
                Object.values(this.filter).forEach(val => {
                    if (item.value === val.value) {
                        val.status = true
                    } else {
                        val.status = false
                    }
                })
            }
        }, 
        mounted(){
            this.articlesFilterAction('')
        }
    }
</script>
<style scoped>
aside {
    height: 400px;
    padding: 10px 20px 50px 40px;
    margin-top: 50px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
}
aside div {
    margin: 23px 0;
    display: flex;
    width: 320px;
    align-items: center;
}
div p {
    width: 100%;
}
div img {
    margin-bottom: 15px;
    width: 40px;
}
</style>