<template>
    <div class="welcome">
        <div class="leftMenu">
            <ul>
                <li v-for="(dep, index) in depList" :id="dep.id" :class="{'activeDep': dep.id === activeDepId}" @click="handleDepClick(dep.id)">{{dep.name}}</li>
                                     
            </ul>            
        </div>
        <div class="doctorList">
            <ul>
                <li v-for="(doc, index) in doctorList" :id="doc.id">{{doc.name}}</li>
            </ul>
        </div>
        <div class="reserveBtn">
            <router-link to="/reserve" class="weui-btn weui-btn_primary">前往预约</router-link>
        </div>
    </div>
</template>

<script>
    import { baseurl } from '../../src/util/common'
 
    export default {
        data() {
            return {
                depList: [],
                doctorList: [],
                activeDepId: ''
            }            
        },
        created(){
            this.getDepList();  
        },
        methods: {
            getDepList: function(){
                let _this = this;
                $.ajax({
                    url: baseurl +'/getDepts',
                    type: 'post',
                    dataType: 'json',                    
                    success: function(data){
                        _this.depList = data.depList;
                        _this.activeDepId = _this.depList[0].id;
                        _this.doctorList = _this.getDoctorList(_this.activeDepId)
                    }
                })
            },
            getDoctorList: function(id){
                let _this = this;
                
                $.ajax({
                    url: baseurl +'/getDoctors',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        'id': id
                    },
                    success: function(data){
                        _this.doctorList = data.doctorList;
                    }
                })
            },
            handleDepClick: function(id){
                let _this = this;
                _this.activeDepId = id;
                _this.getDoctorList(id);
            }
        }
    }
    
</script>

<style scoped>
    .welcome{
        width: 100%;
        height: 100%;
    }

    .leftMenu{
        width: 40%;
        float: left;
        height: 100%;
        overflow: auto;
        background-color: #d6ebfe
    }
    

    .leftMenu ul li{
        height: 2rem;
        line-height: 2rem;
        font-size: 1rem;
        padding-left: 10%;
    }

    .activeDep{
        background-color: #fff;
        color: #4a80a6;
    }

    .doctorList{
        width: 60%;
        float: left;
        height: 100%;
        overflow: auto;
        background-color: #fff;
    }

    .doctorList ul{
        width: 90%;
        margin: 0 auto;
    }

    .doctorList ul li{
        height: 2rem;
        line-height: 2rem;
        font-size: 1rem;
        padding-left: 10%;
        border-bottom: 1px solid #f9f9f9;
    }

    .reserveBtn{
        width: 96%;
        position: fixed;
        bottom: 1em;
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
    }

    .weui-btn_primary{
        background-color: #4990e2;
    }

    .weui-btn_primary:not(.weui-btn_disabled):active {
        color: rgba(255, 255, 255, 0.6);
        background-color: #4990e2;
    }
</style>