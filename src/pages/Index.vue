<template>
    <div class="main">  
        <div class="imgbox">
            <img src="../../static/images/hospital.jpg" alt="">
        </div>
        <div class="title">
            <h4>门诊服务</h4>
        </div>
        <div class="cardlist">
            <!--<div class="">
                <div class="weui-flex_item">
                    sada    
                </div>
                <div class="weui-flex_item">
                    sdassss
                </div>
            </div>-->
            <ul>
                <li>
                    <router-link to="/index">
                        <div class="card">
                            <div>
                                <img src="../../static/images/jiuzhen.png" alt="">
                            </div>
                            
                            <p>预约就诊</p>
                        </div>
                    </router-link>
                    
                </li>
                <li>
                    <router-link to="/index">
                        <div class="card">
                            <div>
                                <img src="../../static/images/jiuzhen.png" alt="">
                            </div>
                            <p>今日挂号</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index">
                        <div class="card">
                            <div>
                                <img src="../../static/images/jiuzhen.png" alt="">
                            </div>
                            <p>检查检验</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index">
                        <div class="card">
                            <div>
                                <img src="../../static/images/jiuzhen.png" alt="">
                            </div>
                            <p>挂号记录</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index">
                        <div class="card">
                            <div>
                                <img src="../../static/images/jiuzhen.png" alt="">
                            </div>
                            <p>常用就诊人</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index">
                        <div class="card">
                            <div>
                                <img src="../../static/images/jiuzhen.png" alt="">
                            </div>
                            <p>智能导诊</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

    li{
        list-style-type: none;
    }

    .main{
        background-color: #eeecec;
    }

    .imgbox{
        width: 100%;
        /*height: 4rem;*/
    }

    .imgbox img{
        height: 12rem;
        width: 100%;
        margin: 0 auto;
    }

    .title{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
    }

    .title h4{
        font-size: 1rem;
        text-align: center;
        color: #6bc9dd
    }

    .cardlist{
        width: 100%;
    }

    .cardlist ul li{
        float: left;
        width: 50%;
        height: 6rem;
        margin: 0.5rem 0;
    }

    .card{
        width: 90%;
        margin: 0 auto;
        height: 100%;
        text-align: center;
        background-color: #fff;
        border-radius: 3px;
    }

    .card p{
        text-align: center;
        width: 100%;
        font-size: 0.8rem;
        height: 2.4rem;
        line-height: 2.4rem;
        color: #2d2d2d;
    }
    
    .card div{
        height: 3.6rem;
    }

    .card div img{
        margin-top: 1.2rem;
    }
</style>