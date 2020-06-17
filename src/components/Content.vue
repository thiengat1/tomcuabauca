<template>
  <div class="content-container">
    <div class="container">
      <div class="content-item" :class="{active2:active2}">
        <div class="item">
          <img v-if="dice[0]===0" src="../assets/beer.png" width="100%" height="100%" />
          <img v-if="dice[0]===1" src="../assets/gourd.png" width="100%" height="100%" />
          <img v-if="dice[0]===2" src="../assets/chicken.png" width="100%" height="100%" />
          <img v-if="dice[0]===3" src="../assets/fish.png" width="100%" height="100%" />
          <img v-if="dice[0]===4" src="../assets/crab.png" width="100%" height="100%" />
          <img v-if="dice[0]===5" src="../assets/shrimp.png" width="100%" height="100%" />
        </div>
        <div class="item special-item">
          <img v-if="dice[1]===0" src="../assets/beer.png" width="100%" height="100%" />
          <img v-if="dice[1]===1" src="../assets/gourd.png" width="100%" height="100%" />
          <img v-if="dice[1]===2" src="../assets/chicken.png" width="100%" height="100%" />
          <img v-if="dice[1]===3" src="../assets/fish.png" width="100%" height="100%" />
          <img v-if="dice[1]===4" src="../assets/crab.png" width="100%" height="100%" />
          <img v-if="dice[1]===5" src="../assets/shrimp.png" width="100%" height="100%" />
        </div>
        <div class="item">
          <img v-if="dice[2]===0" src="../assets/beer.png" width="100%" height="100%" />
          <img v-if="dice[2]===1" src="../assets/gourd.png" width="100%" height="100%" />
          <img v-if="dice[2]===2" src="../assets/chicken.png" width="100%" height="100%" />
          <img v-if="dice[2]===3" src="../assets/fish.png" width="100%" height="100%" />
          <img v-if="dice[2]===4" src="../assets/crab.png" width="100%" height="100%" />
          <img v-if="dice[2]===5" src="../assets/shrimp.png" width="100%" height="100%" />
        </div>
      </div>
      <div class="plate-item" :class="{ active1: active1,active2: active2}">
        <img src="../assets/plate.png" width="60%" height="60%" />
      </div>
    </div>
    <div class="content-btn">
      <button class="btn btn-primary" @click="handleRollPlate">
        roll Plate
      </button>
      <button class="btn btn-warning" @click="handleOpenPlate">open plate</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active1: false,
      active2:false
    };
  },
  computed:{
      dice(){
          return this.$store.state.dice
      }
  },
  methods: {
    handleRollPlate() {
        this.active1=true
        this.active2=true
        var dice1=Math.floor(Math.random()*6)
        var dice2=Math.floor(Math.random()*6)
        var dice3=Math.floor(Math.random()*6)
        this.$store.dispatch('setRollPlate',[dice1,dice2,dice3])
    },
    handleOpenPlate(){
        var sumDeposit=0
        this.$store.state.deposit.forEach(element => {
            return sumDeposit+=element
        });
        if(sumDeposit<=0)
        {
            alert('Please deposit')
            return
        }
        this.active1=false
        this.$store.dispatch('setOpenPlate')

    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 250px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .content-item {
    border: 5px solid #dddddd;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding-top: 70px;
    .item {
      width: 60px;
      height: 60px;
      border: 2px solid #ababaa;
      padding: 3px;
    }
    .special-item {
      position: relative;
      top: 65px;
    }
  }
  .plate-item {
    img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }
  }
  .active1{
    position: relative;
    left: -250px;
    transition: 10s;
    transition-property:left ;
       
  }
  .active2{
       transition: 2s;
  }
}
.content-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  .btn {
    width: 140px;
    margin-right: 10px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
