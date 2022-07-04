<template>
    <div class="menu-container">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
        >
            <el-menu-item index="1" @click="$router.push('/home/user')">
                <i class="el-icon-goods"></i>
                <span slot="title">商品列表</span>
            </el-menu-item>
            <el-menu-item index="2" @click="$router.push('/home/right')">
                <i class="el-icon-shopping-cart-2"></i>
                <span slot="title">
                    购物车
                    <el-badge class="mark" v-if="totalNum" :value="totalNum" />
                </span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: "Menu",
    data() {
        return {
            isCollapse: false,
        };
    },
    methods: {},
    computed: {
        ...mapGetters(["totalNum"]),
    },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>