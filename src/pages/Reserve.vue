<template>
    <div class="reserve">
        <reserve :titlename='tName'></reserve>
        <div class="search">
            <div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="搜索科室、常见病">
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="deptList">
            <div class="charBox" v-for="(value, key) in deptListObject">
                <h4 :id="key" class="charTitle">{{key}}</h4>
                <ul>
                    <li v-for="(item, index) in value">
                        <router-link :to="{ name: 'reserveDetail', params: { id: item.id }}">
                            <p class="deptName">{{item.name}}</p>
                            <p class="desc">{{item.description}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>            
        </div>


    </div>
</template>

<script>
    import { baseurl } from '../../src/util/common'
    import reserve from './common/Title'
    export default {
        data(){
            return{
                'tName': '选择科室',
                'deptListObject': {},
            }
        },
        components: {
            reserve
        },
        created(){
            this.getDeptList();
        },
        methods: {
            getDeptList : function(){
                let _this = this;
                
                $.ajax({
                    url: baseurl +'/getDeptsByChar',
                    type: 'post',
                    dataType: 'json',
                    // data: {
                    //     'id': id
                    // },
                    success: function(data){
                        _this.deptListObject = data.deptListObject;
                        
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .weui-cells{
        margin-top: 0.2rem
    }

    .charTitle{
        font-size: 1rem;
        font-weight: bold;
        color: #7EC0EE;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
    }

    .charBox{
        padding: 0.5rem 0 0;
        margin-bottom: 0.5rem;
        background-color: #fff;
    }

    .charBox ul li{
        border-bottom: 1px solid #EDEDED;
        padding: 0.5rem 1rem;
    }

    .deptName{
        color: #7EC0EE;
        font-size: 1.1rem;
        line-height: 1.5rem;
        height: 1.5rem;
    }

    .desc{
        color: #CDC9C9;
        font-size: 0.8rem;
        padding: 0.5rem 0;
    }
</style>