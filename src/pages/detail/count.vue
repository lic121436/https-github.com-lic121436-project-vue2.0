<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>数据统计</h2>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品类型：
              </div>
              <div class="sales-board-line-right">
                  <v-chooser :selections="buyTypes" @on-change="onParmChange('buyType', $event)"></v-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  适用地区：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="districts" @on-change="onParmChange('district', $event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="timeLimits" @on-change="onParmChange('timeLimit', $event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  {{price}} 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="showPayDialog">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

        <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>安全安保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>办公文教</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>彩票</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>车辆物流</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>成人用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>出版传媒</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>电脑硬件</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>电子电工</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>房地产建筑装修</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>分类平台</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>服装鞋帽</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>箱包饰品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>化工原料制品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>机械设备</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>家庭日用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>家用电器</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>教育培训</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>节能环保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>金融服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>礼品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>旅游住宿</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>美容化妆</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>母婴护理</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>农林牧渔</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>商务服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>生活服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>食品保健品</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>手机数码</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>通讯服务设备</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>网络服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>医疗服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>游戏</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>运动休闲娱乐</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>招商加盟</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      </div>

      <v-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
        <slot>
          <table class="buy-dialog-table">
            <tr>
              <th>产品类型</th>
              <th>适用地区</th>
              <th>有效时间</th>  
              <th>总价</th>
            </tr>
            <tr>
              <td>{{ buyType.label }}</td>
              <td>{{ district.label }}</td>
              <td>{{ timeLimit.label }} </td>
              <td>{{ price }}</td>
            </tr>
          </table>
          <h3 class="buy-dialog-title">请选择银行</h3>
          <bank-chooser @on-change="onChangeBanks"></bank-chooser>
          <div class="button buy-dialog-btn" @click="confirmBuy">
            确认购买
          </div>
        </slot>
      </v-dialog>
      <v-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">支付失败</v-dialog>
      <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order>
  </div>
</template>

<script>
import VSelection from "../../components/base/selection";
import VChooser from "../../components/base/chooser";
import VDialog from "../../components/base/dialog";
import BankChooser from "../../components/bankChooser";
import CheckOrder from "../../components/checkOrder";

export default {
  components: {
    VSelection,
    VChooser,
    VDialog,
    BankChooser,
    CheckOrder
  },
  data() {
    return {
      buyType: {},
      district: {},
      timeLimit: {},
      price: 0,
      isShowPayDialog: false,
      isShowErrDialog: false,
      isShowCheckOrder: false,
      bankId: null,
      orderId: null,
      buyTypes: [
        {
          label: "红色版",
          value: 0
        },
        {
          label: "绿色版",
          value: 1
        },
        {
          label: "紫色版",
          value: 2
        }
      ],
      districts: [
        {
          label: "北京",
          value: 0
        },
        {
          label: "上海",
          value: 1
        },
        {
          label: "广州",
          value: 2
        },
        {
          label: "天津",
          value: 3
        },
        {
          label: "武汉",
          value: 4
        },
        {
          label: "重庆",
          value: 5
        }
      ],
      timeLimits: [
        {
          label: "半年",
          value: 0
        },
        {
          label: "一年",
          value: 1
        },
        {
          label: "二年",
          value: 2
        },
        {
          label: "三年",
          value: 3
        }
      ]
    };
  },
  methods: {
    onParmChange(attr, val) {
      this[attr] = val;
      this.getPrice();
    },
    getPrice() {
      let reqParams = {
        buyType: this.buyTypes.value,
        district: this.districts.value,
        timeLimit: this.timeLimits.value
      };

      let buy = this.buyType.value,
        dis = this.district.value,
        time = this.timeLimit.value;

      if (buy === 0 && dis === 0 && time === 0) {
        this.price = 500;
      } else if (
        (dis === 0 && time === 0) ||
        (buy === 0 && dis === 0) ||
        (dis === 0 && time === 0)
      ) {
        this.price = 700;
      } else if (buy === 0 || dis === 0 || time === 0) {
        this.price = 900;
      } else {
        this.price = 1000;
      }
    },
    showPayDialog() {
      this.isShowPayDialog = true;
    },
    hidePayDialog() {
      this.isShowPayDialog = false;
    },
    onChangeBanks(bankObj) {
      this.bankId = bankObj.id;
    },
    hideErrDialog() {
      this.isShowErrDialog = false;
    },
    hideCheckOrder() {
      this.isShowCheckOrder = false;
    },
    confirmBuy() {
      let reqParams = {
        buyType: this.buyTypes.value,
        district: this.districts.value,
        timeLimit: this.timeLimits.value,
        bankId: this.bankId
      };

      this.orderId = 10001;
      this.isShowCheckOrder = true;
      this.isShowPayDialog = false;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.buyType = this.buyTypes[0];
      this.district = this.districts[0];
      this.timeLimit = this.timeLimits[0];
      this.getPrice();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
