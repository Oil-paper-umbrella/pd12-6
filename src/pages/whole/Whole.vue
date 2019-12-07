<template>
  <div id="whole">
    <!--头部-->
    <div class="header">
      运营数据管理技术服务
      <a href="/whole" class="a-access">
        <button class="button type1">返回</button>
      </a>
    </div>
    <!--主体-->
    <div class="main clearfix">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "whole",
  data() {
    return {
      /* tableData: {
        title: ["test1", "test2", "test3", "test4", "test5"],
        content: [
          {
            type: "a",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "b",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "c",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "d",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "e",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "f",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "g",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "h",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "i",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "j",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "k",
            data: ["77", "88", "99", "33"]
          },
          {
            type: "l",
            data: ["77", "88", "99", "33"]
          }
        ]
      }, */
      isOpen:false
    };
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#whole {
  background: #111739;
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: " ";
  }
  .clearfix:after {
    clear: both;
  }
  .header {
    height: 80px;
    position: relative;
    padding-top: 13px;
    font-size: 36px;
    color: #00ffff;
    text-align: center;
    background: url("./../../assets/images/bg.png") top center no-repeat;
    a.a-access {
      position: absolute;
      right: 3%;
      top: -18%;
    }
  }
  .main {
    padding: 0 30px 30px;
  }
  .button {
    position: relative;
    padding: 0.5em 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    margin: 1em 0.8em;
  }
  .button.type1 {
    color: #00ffff;
  }
  .button.type1.type1::after,
  .button.type1.type1::before {
    content: "";
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  .button.type1.type1::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #566473;
    border-right-color: #566473;
  }
  .button.type1.type1::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #566473;
    border-left-color: #566473;
  }
  .button.type1.type1:hover:after,
  .button.type1.type1:hover:before {
    width: 100%;
    height: 100%;
  }
}
</style>