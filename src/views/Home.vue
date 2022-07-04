<template>
    <div class="home-container" style="height: 100%">
        <el-container style="height: 100%">
            <el-header>
                <h4 class="header-h4">购物车案例-vuex</h4>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <Menu></Menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
    name: "Home",
    components: {
        Menu,
    },
    methods: {
        
    }
};
</script>

<style lang="less" scoped>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    position: relative;
    .header-h4 {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
    .header-button {
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
    }
}

.el-aside {
    background-color: rgb(255, 255, 255);
    color: #333;
    padding-top: 20px;
    padding-left: 10px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    // line-height: 160px;
}

.el-container {
    margin-bottom: 40px;
}
</style>