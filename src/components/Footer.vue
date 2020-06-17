<template>
  <div class="footer-container">
    <div class="left-footer">
      <img src="../assets/caudoi2.png" height="500px" />
    </div>
    <div class="content-footer">
      <div class="image-class">
        <div class="item">
          <span class="deposit">{{ deposit[0] }}</span>
          <img
            class="image-item"
            @click="setDeposit(0)"
            src="../assets/beer.png"
          />
        </div>
        <div class="item">
          <span class="deposit">{{ deposit[1] }}</span>
          <img
            @click="setDeposit(1)"
            class="image-item"
            src="../assets/gourd.png"
          />
        </div>
        <div class="item">
          <span class="deposit">{{ deposit[2] }}</span>
          <img
            @click="setDeposit(2)"
            class="image-item"
            src="../assets/chicken.png"
          />
        </div>
      </div>
      <div class="image-class">
        <div class="item">
          <span class="deposit">{{ deposit[3] }}</span>
          <img
            @click="setDeposit(3)"
            class="image-item"
            src="../assets/fish.png"
          />
        </div>
        <div class="item">
          <span class="deposit">{{ deposit[4] }}</span>
          <img
            @click="setDeposit(4)"
            class="image-item"
            src="../assets/crab.png"
          />
        </div>
        <div class="item">
          <span class="deposit">{{ deposit[5] }}</span>
          <img
            @click="setDeposit(5)"
            class="image-item"
            src="../assets/shrimp.png"
          />
        </div>
      </div>
    </div>
    <div class="right-footer">
      <img src="../assets/caudoi1.png" height="500px" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({ deposit: "deposit" }),
  },
  methods: {
    ...mapActions({
      setDeposit: "setDeposit",
    }),
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .image-class {
    margin-bottom: 2px;
    background: brown;
    padding: 20px 50px;
    display: flex;
    .image-item {
      width: 170px;
      height: 170px;
      border: 2px solid #fff;
      padding: 20px;
      border-radius: 50%;
    }
    .image-item:hover {
      .increase {
        background: red;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 30px;
      .increase {
        width: 32px;
        background: yellow;
      }
      .deposit {
        font-size: 25px;
        color: #fff;
      }
    }
  }
}
</style>
