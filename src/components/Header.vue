<template>
    <div class="header-container">
        <div class="btn-container">
            <!-- <button type="button" class="btn btn-secondary">NewGame</button> -->
            <button type="button" class="btn btn-danger" @click="handeReset">Reset</button>
        </div>
       
        <div class="money-amount">
            <span>{{sumMoney}}$</span>
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState({sumMoney:'sumMoney'})
        },
        methods:{
            handeReset(){
                this.$store.dispatch('setReset')
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.header-container{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    .btn{
        width: 130px;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        margin-right: 10px;
    }
    .btn:hover{
        background: blue;
    }
    .money-amount{
        span{
            font-size: 30px;
            color: red;
            font-weight: bold;
        }
    }
}

</style>