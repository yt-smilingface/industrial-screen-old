$(function () {
    map();
    map2();


    function map() {

        $.ajax({
            type: "GET",
            url: "http://59.216.193.7:80/dv/bigScreen/getIndustryEconomyMap",
            success: function (res) {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('map_1'));

                var geoCoordMap = {
                    "昆明": [102.712251, 25.040609],
                    "曲靖": [102.712251, 25.501557],
                    "玉溪": [102.543907, 24.350461],
                    "保山": [99.167133, 25.111802],
                    "昭通": [103.717216, 27.336999],
                    "丽江": [100.233026, 26.872108],
                    "普洱": [100.972344, 22.777321],
                    "临沧": [100.08697, 23.886567],
                    "楚雄": [101.546046, 25.041988],
                    "红河": [103.384182, 23.366775],
                    "文山": [104.24401, 23.36951],
                    "西双版纳": [100.797941, 22.001724],
                    "大理": [100.225668, 25.589449],
                    "德宏": [98.578363, 24.436694],
                    "怒江": [98.854304, 25.850949],
                    "迪庆": [99.706463, 27.826853],
                };

                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            const a = geoCoord.concat(data[i].value);
                            res.push({
                                name: data[i].name,
                                value: a
                            });
                        }
                    }
                    return res;
                };
                
                var data = [];
                res.data.forEach((item, index) => {
                    data.push({
                        name: item.cityName,
                        value: item.value
                    })
                })
                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            if (typeof (params.value)[2] == "undefined") {
                                return params.name + ' : ' + params.value;
                            } else {
                                return params.name + ' : ' + params.value[2];
                            }
                        }
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: {
                                readOnly: false
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    visualMap: {
                        min: -28.2,
                        max: 8.0,
                        left: 820,
                        top: 1120,
                        itemWidth: 50,
                        text: ['top', 'bottom'],
                        textStyle: {
                            fontSize: 24,
                            color: '#fff'
                        },
                        itemHeight: 300,
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['#f2f2f2', '#fff2cc', '#ffd966', "#c65911", '#833c0c', ]
                        }
                    },
                    dataRange: {
                        x: 'left',
                        y: 'bottom',
                        left: 650,
                        itemWidth: 50,
                        itemHeight: 50,
                        top: 1070,
                        textStyle: {
                            fontSize: 32,
                            color: '#fff'
                        },
                        splitList: [{
                                start: 7,
                                label: '>7%',
                                color: '#833c0c'
                            },
                            {
                                start: 3,
                                end: 7,
                                label: "3%-7%",
                                color: '#c65911'
                            },
                            {
                                start: 0,
                                label: "0%-3%",
                                end: 3,
                                color: '#ffd966'
                            },
                            {
                                start: -5,
                                label: "-5%-0%",
                                end: 0,
                                color: '#fff2cc'
                            },
                            {
                                end: -5,
                                label: "<-5%",
                                color: '#f2f2f2'
                            },
                        ],
                    },
                    series: [{
                        name: '消费金额',
                        type: 'map',
                        mapType: 'yunnan',
                        center: [101.22251, 25.240609],
                        aspectScale: 0.5,
                        zoom: 1.2,
                        data: convertData(data),
                        symbolSize: function (val) {
                            return val[2] / 15;
                        },
                        label: {
                            show: false,
                            normal: {
                                formatter(val) {
                                    let name = val.name;
                                    let a = val.data.value[2]
                                    return name + ':' + a;
                                },
                                position: 'left',
                                show: true,
                                fontSize: 26,
                                color: '#000'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        roam: false, //禁止其放大缩小
                        itemStyle: {
                            normal: {
                                areaColor: '#4c60ff',
                                borderColor: '#002097'
                            },
                            emphasis: {
                                areaColor: '#293fff'
                            }
                        }
                    }]
                };
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        });
    }

    function map2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_2'));

        var geoCoordMap = {
            "昆明": [102.712251, 25.040609],
            "曲靖": [102.712251, 25.501557],
            "玉溪": [102.543907, 24.350461],
            "保山": [99.167133, 25.111802],
            "昭通": [103.717216, 27.336999],
            "丽江": [100.233026, 26.872108],
            "普洱": [100.972344, 22.777321],
            "临沧": [100.08697, 23.886567],
            "楚雄": [101.546046, 25.041988],
            "红河": [103.384182, 23.366775],
            "文山": [104.24401, 23.36951],
            "西双版纳": [100.797941, 22.001724],
            "大理": [100.225668, 25.589449],
            "德宏": [98.578363, 24.436694],
            "怒江": [98.854304, 25.850949],
            "迪庆": [99.706463, 27.826853],
        };
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    const a = geoCoord.concat(data[i].value);
                    res.push({
                        name: data[i].name,
                        value: a
                    });
                }
            }
            return res;
        };

        var data = [{
                name: '昆明',
                value: 24521.9
            },
            {
                name: '曲靖',
                value: 2959.35
            },
            {
                name: '玉溪',
                value: 2058.14
            },
            {
                name: '保山',
                value: 1052.58
            },
            {
                name: '丽江',
                value: 1052.58
            },
            {
                name: '昭通',
                value: 1288.74
            },
            {
                name: '普洱',
                value: 945.42
            },
            {
                name: '临沧',
                value: 821.32
            },

            {
                name: '楚雄',
                value: 1372.16
            },
            {
                name: '红河',
                value: 2417.48
            },
            {
                name: '文山',
                value: 1185.12
            },
            {
                name: '西双版纳',
                value: 604.18
            },
            {
                name: '大理',
                value: 1484.04
            },
            {
                name: '德宏',
                value: 575.54
            },
            {
                name: '怒江',
                value: 210.73
            },
            {
                name: '迪庆',
                value: 266.94
            },


        ];
        option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (typeof (params.value)[2] == "undefined") {
                        return params.name + ' : ' + params.value;
                    } else {
                        return params.name + ' : ' + params.value[2];
                    }
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataRange: {
                x: 'left',
                y: 'bottom',
                left: 650,
                itemWidth: 50,
                itemHeight: 50,
                top: 1070,
                textStyle: {
                    fontSize: 32,
                    color: '#fff'
                },
                splitList: [{
                        start: 2000,
                        label: ">2000亿元",
                        color: '#833c0c'
                    },
                    {
                        start: 1000,
                        end: 2000,
                        label: "1000-2000亿元",

                        color: '#c65911'
                    },
                    {
                        start: 500,
                        end: 1000,
                        label: "500-1000亿元",

                        color: '#ffd966'
                    },
                    {
                        start: 100,
                        end: 500,
                        label: "100-500亿元",

                        color: '#fff2cc'
                    },
                    {
                        start: 0,
                        end: 100,
                        label: "0-100亿元",

                        color: '#f2f2f2'
                    },

                ],
                color: ['#eee', '#949fb1', '#f3ce85']
            },
            series: [{
                name: '1-6月累计GDP',
                type: 'map',
                mapType: 'yunnan',
                center: [101.82251, 25.140609],
                aspectScale: 0.5,
                zoom: 1.2,
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 15;
                },
                label: {
                    show: false,
                    normal: {
                        formatter(val) {
                            let name = val.name;
                            let a = val.data.value[2]
                            return name + ':' + a;
                        },
                        position: 'left',
                        show: true,
                        fontSize: 26,
                        color: '#000'
                    },
                    emphasis: {
                        show: true
                    }
                },
                roam: false, //禁止其放大缩小
                itemStyle: {
                    normal: {
                        areaColor: '#4c60ff',
                        borderColor: '#002097'
                    },
                    emphasis: {

                        areaColor: '#293fff'
                    }
                }
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})