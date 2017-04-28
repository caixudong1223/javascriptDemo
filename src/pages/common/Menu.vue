<template>
    <div class="menu">
        <div class="menucontent">
            <ul>
                <li>
                    <a href="javascript:;" class=""><span>自助服务</span></a>
                    <dl>
                        <dd>
                            <a href="#"><span>网上挂号</span></a>
                        </dd>
                        <dd>
                            <a href="#"><span>报告查询</span></a>
                        </dd>
                        <dd>
                            <a href="#"><span>就医指南</span></a>
                        </dd>
                    </dl>
                </li>
                <li>
                    <a href="javascript:;" class=""><span>健康咨询</span></a>
                    <dl>
                        <dd>
                            <a href="#"><span>健康速递</span></a>
                        </dd>
                        <dd>
                            <a href="#"><span>讲座义诊</span></a>
                        </dd>
                    </dl>
                </li>
                <li>
                    <a href="javascript:;" class=""><span>医院信息</span></a>
                    <dl>
                        <dd>
                            <a href="#"><span>新闻动态</span></a>
                        </dd>
                        <dd>
                            <a href="#"><span>医院简介</span></a>
                        </dd>
                        <dd>
                            <a href="#"><span>科室介绍</span></a>
                        </dd>
                        <dd>
                            <a href="#"><span>专家风采</span></a>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

    .menu{
        position: fixed;
        bottom: 0;
        left: 0;
        height: 2.5rem;
        width: 100%;
        background-color: #EDEDED;
        color: #A3A3A3
    }
    .menucontent{
        width: 100%;
        margin: 0 auto;
    }

    .menucontent ul li{
        float: left;
        display: block;
        width: 33.33%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        font-size: 1rem;
        color: #A3A3A3
    }
    
    .menucontent ul li a + dl{
        display: none;
    }

    .menucontent ul li dl{
        width: 33.33%;
    }

    .menucontent ul li a:hover + dl {
        display: block;
        position: absolute;
        bottom: 2.5rem;
    }
    
</style>