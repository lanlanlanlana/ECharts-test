<template>
  <div>
    <div class="container">
      <span class="title">会员复购率分析</span>
      <select name id class="select">
        <option>2017年</option>
        <option>2016年</option>
        <option>2015年</option>
        <option>2014年</option>
        <option>2013年</option>
      </select>
      <div class="all-shop">
        <input type="radio" name="radio" value="1" id="app_shop" v-model="changeInpState">
        <label for="app_shop" class="input-val">所有门店</label>
      </div>
      <div class="encode">
        <input type="radio" name="radio" value="2" id="encode" v-model="changeInpState">
        <label for="encode">
          <input type="text" :disabled="inpDisabled" class="encode-inp" v-model="searchEncode" placeholder="请输入指定的店仓编码">
        </label>
      </div>
      <button
        type="button"
        class="search-btn"
        :disabled="inpDisabled"
        :class="{'disabled-btn' : inpDisabled}"
        @click="searchData(searchEncode)"
      >查询</button>
    </div>
    <div class="btn">
      <button
        class="btn1"
        @click="[changeData(name), btn1Checked = true, btn2Checked = false]"
        :disabled="btn1Checked"
        :class="{'checked-btn' : btn1Checked}"
      >按客户计算</button>
      <button
        class="btn1"
        @click="[changeData(name), btn2Checked = true, btn1Checked = false ]"
        :disabled="btn2Checked"
        :class="{'checked-btn' : btn2Checked}"
      >按交易计算</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      changeInpState: 1,
      inpDisabled: true,
      btn1Checked: true,
      btn2Checked: false,
      searchEncode: ''
    }
  },
  methods: {
    // 根据条件查询数据
    searchData (id) {
      alert(`要查询的店仓编码是：${id}`)
    }
  },
  watch: {
    changeInpState () {
      this.inpDisabled = !this.inpDisabled
    }
  }
}
</script>

<style scoped>
.container {
  z-index: 9;
  margin-left: 7px;
  margin-top: 11px;
  font-size: 0; /* 消除display之后各个元素之间的间隙 */
  display: flex;
  align-items: center;
}
.title {
  color: #5b6879;
  font-size: 14px;
  margin-right: 24px;
  font-weight: bolder;
}
.select {
  width: 70px;
  height: 20px;
}
.all-shop {
  margin-left: 36px;
}
input {
  margin: 0;
}
.container input[type="radio"] {
  display: none;
}
.container input[type="radio"] + label::before {
  content: "\a0"; /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  width: 15px;
  height: 15px;
  margin-right: 12px;
  border-radius: 50%;
  border: 1px solid #cccccc;
  text-indent: 3px;
  line-height: 1;
}
.container input[type="radio"]:checked + label::before {
  background-color: #388bed;
  background-clip: content-box;
  padding: 3px;
  width: 9px;
  height: 9px;
}
.input-val {
  font-size: 10px;
  margin-left: 5px;
  margin-right: 13px;
  color: #5b6879;
}
.encode-inp {
  border: 0;
  border-radius: 2px;
  fill: #f7f8fa;
  vertical-align: middle;
  outline: none;
  height: 24px;
  background: #f6f8fc;
  padding-left: 10px;
}
.encode-inp::-webkit-input-placeholder {
  color: #b7bec6;
  font-family: PingFangSC-Light;
  font-size: 7.5px;
}
button {
  border: 0;
  outline: none;
  cursor: pointer;
}
.search-btn {
  margin-left: 16px;
  width: 70px;
  height: 24px;
  border-radius: 3px;
  background: #4eb6ad;
  color: #ffffff;
  font-size: 13px;
}
.disabled-btn{
  cursor: auto;
  background: #999999;
}
.btn {
  font-size: 0;
  margin-left: 18px;
  margin-top: 16px;
  text-align: left;
}
.btn1 {
  background: #ffffff;
  width: 90px;
  height: 24px;
  border: 1px solid #cccccc;
  color: #cccccc;
  font-size: 13px;
}
.checked-btn{
  background: #388bed;
  color: #ffffff;
  border: 0;
}
</style>
