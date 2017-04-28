import Mock from 'mockjs'
import { baseurl } from '../../src/util/common'

const dep = [{
                'id': 1,
                'name': '外科'
            },{
                'id': 2,
                'name': '内科'
            },{
                'id': 3,
                'name': '神经科'
            },{
                'id': 4,
                'name': '儿科'
            },{
                'id': 5,
                'name': '妇产科'
            },{
                'id': 6,
                'name': '急诊科'
            },{
                'id': 7,
                'name': '耳鼻咽喉科'
            },{
                'id': 8,
                'name': '皮肤性病科'
            },{
                'id': 9,
                'name': '医技科室'
            }]


const depByChar = {
    'A': [{
        'id': 9,
        'name': '癌症专家门诊',
        'description': '癌痛'
    }],
    'B': [{
        'id': 1,
        'name': '不孕科',
        'description': '疤痕去除'
    },{
        'id': 4,
        'name': '北院男科',
        'description': '男性不育、产前检查、男性病、前列腺炎'
    }],
    'E': [{
        'id': 2,
        'name': '儿保科',
        'description': '新生儿保健'
    },{
        'id': 3,
        'name': '耳鼻咽喉科',
        'description': '中耳炎、鼻息肉、鼻炎、鼓膜穿孔'
    }],
    'G': [{
        'id': 7,
        'name': '儿保科',
        'description': '新生儿保健'
    },{
        'id': 6,
        'name': '耳鼻咽喉科',
        'description': '中耳炎、鼻息肉、鼻炎、鼓膜穿孔'
    }]
}

Mock.mock(baseurl +'/getDoctors', {
    'doctorList|1-10':[{
        'name': '@cname',
        'id|1-100': 100
    }]
});

Mock.mock(baseurl +'/getDepts', {
    'depList': dep
});

Mock.mock(baseurl +'/getDeptsByChar', {
    'deptListObject': depByChar
});


