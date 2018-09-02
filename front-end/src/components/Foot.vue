<template>
  <v-footer fluid class="footBg">
      <v-layout row wrap>
          <v-flex xs12 class="return-foot">
            <span class="return-to-top-js simple--link arrow">
                <svg id="arrow-up" viewBox="0 0 32 32" width="14px" height="100%">
                    <title>Arrow up</title>
                    <polygon points="9,8 16,0 23,8"></polygon>
                    <line stroke="#000" stroke-width="2" x1="16" y1="4.228" x2="16" y2="32"></line>
                </svg>
                <span v-text="$vuetify.t('$vuetify.foot.returnTop')"></span>
            </span>
          </v-flex>
          <v-layout wrap row justify-center align-center class="foot variant--color">
                <v-flex xs12 class="foot--text" justify-center align-center>
                    <div>
                        <p>{{$vuetify.t('$vuetify.foot.companyName')}}<a data-udi="umb://document/ecdbe149702448a9ba3ba584660f9430" href="/隐私政策" v-text="$vuetify.t('$vuetify.foot.privacy')"></a></p>
                    </div>
                </v-flex>
          </v-layout>
      </v-layout>
  </v-footer>
</template>
<script>
export default {
  name: "footCommon"
};
</script>

<style lang="scss">
.footBg {
  background: transparent !important;
}
footer {
  height: auto !important;
  .return-foot {
    padding: 30px 6%;
    text-align: right;
  }
  .return-to-top-js {
    cursor: pointer;
    &:hover #arrow-up {
      top: -6px;
    }
    &:hover svg {
      fill: #e30613;
      transition: 0.25s;
    }
    &:hover line {
      stroke: #e30613;
    }
    &:hover {
      color: #e30613;
    }
  }
  .foot {
    height: 130px;
    padding: 0 6%;
    .foot--text {
      background: none !important;
      padding: 0;
      //   max-width: 75%;
      & > div {
        background: transparent !important;
      }
      p {
        font-size: 14px;
        text-align: left;
        margin: 5px 0;
        color: #fff;
        text-align: center;
        a {
          color: #fff;
          line-height: 22px;
          text-decoration: underline;
        }
      }
    }
  }
  #arrow-up {
    left: -17px;
    transition: 0.25s;
    top: -1px;
    position: absolute;
  }
}
.arrow {
  cursor: pointer;
  position: relative;
  text-decoration: none;
}
.simple--link {
  color: #3b2143;
  font-family: Avenir Book;
  font-size: 16px;
  line-height: 36px;
}
</style>
