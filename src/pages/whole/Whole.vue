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
      <!-- <div class="border-container">
          <router-view></router-view>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
      </div> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "whole",
  components: {
  },
  data() {
    return {
      tableData: {
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
      },
      isOpen:false
    };
  }
};
</script>

<style lang="scss">
/*通用样式ͨ*/
ul,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
#whole {

  background: #111739;
  .el-icon-aliquanping1 {
    // 全屏 icon 样式
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
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
    .border-container {
      position: relative;
      margin-top: 15px;
      padding: 10px 10px 0 10px;
      border: 1px solid #54dcf2;
      .el-icon-alisuoxiao {
        font-size: 1.5rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
      }
      span.border-span {
        display: block;
        position: absolute;
        width: 35px;
        height: 35px;
      }
      span.top-left {
        top: -4px;
        left: -4px;
        border-top: 3px solid #54dcf2;
        border-left: 3px solid #54dcf2;
      }
      span.top-right {
        top: -4px;
        right: -4px;
        border-top: 3px solid #54dcf2;
        border-right: 3px solid #54dcf2;
      }
      span.bottom-left {
        bottom: -4px;
        left: -4px;
        border-bottom: 3px solid #54dcf2;
        border-left: 3px solid #54dcf2;
      }
      span.bottom-right {
        bottom: -4px;
        right: -4px;
        border-bottom: 3px solid #54dcf2;
        border-right: 3px solid #54dcf2;
      }
    }
    .main-left,
    .main-right {
      float: left;
      width: 28%;
      padding: 0 10px;
    }
    .main-middle {
      float: left;
      width: 44%;
      padding: 0 10px;
    }
    .border-container {
      position: relative;
      margin-top: 15px;
      padding: 10px 10px 0 10px;
      border: 1px solid #54dcf2;
      position: relative;
      span.border-span {
        display: block;
        position: absolute;
        width: 35px;
        height: 35px;
      }
      span.top-left {
        top: -4px;
        left: -4px;
        border-top: 3px solid #54dcf2;
        border-left: 3px solid #54dcf2;
      }
      span.top-right {
        top: -4px;
        right: -4px;
        border-top: 3px solid #54dcf2;
        border-right: 3px solid #54dcf2;
      }
      span.bottom-left {
        bottom: -4px;
        left: -4px;
        border-bottom: 3px solid #54dcf2;
        border-left: 3px solid #54dcf2;
      }
      span.bottom-right {
        bottom: -4px;
        right: -4px;
        border-bottom: 3px solid #54dcf2;
        border-right: 3px solid #54dcf2;
      }
      .name-title {
        font-size: 20px;
        color: #00ffff;
      }
    }
  }
  .gauge {
    height: 205px;
  }
  .pie {
    height: 250px;
  }
  .trend {
    height: 256px;
  }
  .hnmap {
    height: 334px;
  }
  .bar {
    height: 500px;
  }
  .table-kingdargen {
    margin-top: 6px;
    text-align: center;
    margin-bottom: 0;
    width: 100%;
    .table-kingdargen > thead > tr > th {
      border-bottom: 1px solid #0f4075;
      padding: 2px 8px;
      text-align: center;
      color: #419aff;
      font-size: 12px;
      font-weight: normal;
      border-top: 1px solid #0f4075 !important;
    }
    tbody tr td {
      padding: 1px 8px;
      font-size: 12px;
      border: none;
      color: #fff;
    }
    tbody tr:nth-child(2n) {
      background: #1d2a42;
    }
    tbody tr:hover {
      background: #1d2a42;
    }
    tbody tr td:nth-child(2) {
      color: #e9aa00;
    }
    tbody tr td:nth-child(3) {
      color: #53bf18;
    }
    tbody tr td:nth-child(4) {
      color: #f9504a;
    }
    tbody tr td:nth-child(5) {
      color: #12f0e9;
    }
  }
  .line {
    height: 355px;
  }
  .radar {
    height: 260px;
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