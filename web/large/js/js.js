$(function () {
    echarts_1();
    echarts_2();
    echarts_4();
    echarts_31();
    echarts_32();
    echarts_33();
    echarts_34();
    echarts_5();

    //大屏1 左边1
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option11 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            // toolbox: {
            //     feature: {
            //         dataView: {
            //             show: true,
            //             readOnly: false
            //         },
            //         magicType: {
            //             show: true,
            //             type: ['line', 'bar']
            //         },
            //         restore: {
            //             show: true
            //         },
            //         saveAsImage: {
            //             show: true
            //         }
            //     }
            // },

            legend: {
                data: ['累计GDP（亿元）', 'GDP累计增速（%）'],
                textStyle: {
                    fontSize: 22, //字体大小
                    color: '#ffffff' //字体颜色
                },
                bottom: 0
            },
            xAxis: [{
                type: 'category',
                data: ['2019-03', '2019-06', '2019-09', '2019-12', '2020-03', '2020-06', '2020-09', '2020-12'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    rotate: 38,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '18',
                    },
                },
            }],
            grid: {
                left: '3%',
                right: '4%',
                containLabel: true
            },
            yAxis: [{
                    type: 'value',
                    name: '亿元',
                    min: 0,
                    max: 25000,
                    interval: 5000,
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: "#7ECEF4",
                            fontSize: '20',
                        },
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: 'value',
                    name: '%',
                    min: -6,
                    max: 12,
                    interval: 2,

                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: "#7ECEF4",
                            fontSize: '20',
                        },
                    },
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [{
                    name: '累计GDP（亿元）',
                    type: 'bar',
                    barWidth: 30,
                    data: [
                        5110.92, 10796.33, 16707.57, 23223.75, 5107.77, 11129.77, 17539.76, 24521.9
                    ],
                    itemStyle: {
                        normal: {
                            color: '#4ad2ff'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            fontSize: 30,
                            color: '#fff'
                        }
                    },
                },
                {
                    name: 'GDP累计增速（%）',
                    type: 'line',
                    symbol: 'circle', //设定为实心点
                    yAxisIndex: 1,
                    data: [9.7, 9.2, 8.8, 8.1, -4.3, 0.5, 2.7, 4],

                    itemStyle: {
                        normal: {
                            color: '#ffc000',
                            lineStyle: {
                                width: 3 //设置线条粗细
                            }
                        }
                    }

                }
            ]
        };


        let i = 0;
        console.log(i);
        setInterval(() => {
            i++;
            if (i % 2 == 0) {
                option11.series[1].label = {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 30,
                    }
                }
                option11.series[0].label = {
                    normal: {
                        show: false,

                    }
                }
                myChart.setOption(option11);

            } else {
                option11.series[0].label = {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 30,
                        color: '#fff'
                    }
                }
                option11.series[1].label = {
                    normal: {
                        show: false,
                    }
                }
                myChart.setOption(option11);
            }
        }, 10000)
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option11);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //大屏1 左边2
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option21 = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['云南', '全国', '四川', '贵州', '江苏'],
                textStyle: {
                    fontSize: 22, //字体大小
                    color: '#ffffff' //字体颜色
                },
                bottom: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2019-03', '2019-06', '2019-09', '2019-12', '2020-03', '2020-06', '2020-09', '2020-12'],
                axisLabel: {
                    formatter: '{value}',
                    interval: 0,
                    show: true,
                    rotate: 38,
                    splitNumber: 15,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '20',
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'red',
                        width: 2,
                    }
                }

            },
            yAxis: {
                type: 'value',
                name: '%',
                min: -8,
                max: 12,
                interval: 2,
                axisLabel: {
                    formatter: '{value} %',
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '20',
                    },
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                    name: '云南',
                    type: 'line',
                    symbol: 'circle', //设定为实心点
                    symbolSize: 22,
                    data: [9.7, 9.2, 8.8, 8.1, -4.3, 0.5, 2.7, 4],

                    itemStyle: {
                        normal: {
                            color: '#3FD1FD',
                            lineStyle: {
                                width: 10 //设置线条粗细
                            }
                        }
                    },
                },
                {
                    name: '全国',
                    type: 'line',
                    symbol: 'circle', //设定为实心点
                    symbolSize: 22,
                    data: [6.4, 6.3, 6.2, 6.1, -6.8, -1.6, 0.7, 2.3],
                    itemStyle: {
                        normal: {
                            color: 'yellow',
                            lineStyle: {
                                width: 10 //设置线条粗细
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            fontSize: 30,
                            color: '#fff'
                        },
                        fontWeight: 900
                    },
                },
                {
                    name: '四川',
                    type: 'line',
                    symbol: 'circle', //设定为实心点
                    data: [7.8, 7.9, 7.8, 7.5, -3.0, 0.6, 2.4, 3.8],
                    itemStyle: {
                        normal: {
                            color: '#FFAB06'
                        }
                    },

                }, {
                    name: '贵州',
                    type: 'line',
                    symbol: 'circle', //设定为实心点
                    data: [9.2, 9.0, 8.7, 8.3, -1.9, 1.5, 3.2, 4.5],
                    itemStyle: {
                        normal: {
                            color: '#B73535'
                        }
                    },

                },
                {
                    name: '江苏',
                    type: 'line',
                    symbol: 'circle', //设定为实心点
                    data: [6.7, 6.5, 6.4, 6.1, -5, 0.9, 2.5, 3.7],
                    itemStyle: {
                        normal: {
                            color: '#DCBF1D'
                        }
                    },
                },

            ]

        };
        let i = 0;
        setInterval(() => {
            i++;
            if (i == 1) {
                option21.series[1].label = {
                    normal: {
                        show: true,
                        position: 'bottom',
                        fontSize: 30,
                        color: '#fff'
                    },
                    fontWeight: 900
                }
                option21.series[0].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[2].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[3].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[4].label = {
                    normal: {
                        show: false,
                    }
                }
                myChart.setOption(option21);

            } else if (i == 2) {
                option21.series[2].label = {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 30,
                        color: '#fff'
                    },
                    fontWeight: 900
                }
                option21.series[1].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[0].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[3].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[4].label = {
                    normal: {
                        show: false,
                    }
                }
                myChart.setOption(option21);
            } else if (i == 3) {

                option21.series[3].label = {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 30,
                        color: '#fff'
                    },
                    fontWeight: 900
                }
                option21.series[1].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[0].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[2].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[4].label = {
                    normal: {
                        show: false,
                    }
                }
                myChart.setOption(option21);
            } else if (i == 4) {

                option21.series[4].label = {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 30,
                        color: '#fff'
                    },
                    fontWeight: 900
                }
                option21.series[1].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[0].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[2].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[3].label = {
                    normal: {
                        show: false,
                    }
                }
                myChart.setOption(option21);
            } else if (i == 5) {

                option21.series[0].label = {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 30,
                        color: '#fff'
                    },
                    fontWeight: 900
                }
                option21.series[1].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[3].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[2].label = {
                    normal: {
                        show: false,
                    }
                }
                option21.series[4].label = {
                    normal: {
                        show: false,
                    }
                }
                myChart.setOption(option21);
            } else if (i > 5) {
                i = 0;
            }
        }, 10000)
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option21);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //大屏1 左边4
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['社会消费品零售总额增速(%)'],
                textStyle: {
                    fontSize: 22, //字体大小
                    color: '#ffffff' //字体颜色
                },
                bottom: 0
            },
            grid: {
                left: '3%',
                right: '4%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2019-06', '2019-09', '2019-12', '2020-03', '2020-06', '2020-09', '2020-12'],
                axisLabel: {
                    formatter: '{value}',
                    interval: 0,
                    show: true,
                    rotate: 38,
                    splitNumber: 15,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '20',
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'red',
                        width: 2,
                    }
                }

            },
            yAxis: {
                type: 'value',
                name: '%',
                interval: 5,
                axisLabel: {
                    formatter: '{value} %',
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '20',
                    },
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '社会消费品零售总额增速(%)',
                type: 'line',
                symbol: 'circle', //设定为实心点
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 30
                    }
                },
                data: [10.9, 10.2, 10.4, -14.3, -8.6, -5.5, -3.6],
                itemStyle: {
                    normal: {
                        color: '#3FD1FD'
                    }
                },
            }]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //大屏1 左边3
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['固定资产投资增速(%)'],
                textStyle: {
                    fontSize: 22, //字体大小
                    color: '#ffffff' //字体颜色
                },
                bottom: 0
            },
            grid: {
                left: '3%',
                right: '4%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'],
                axisLabel: {
                    formatter: '{value}',
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    rotate: 38,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '20',
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'red',
                        width: 2,
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '%',
                interval: 5,
                axisLabel: {
                    formatter: '{value} %',
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '20',
                    },
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                    name: '固定资产投资增速(%)',
                    type: 'line',
                    symbol: 'circle', //设定为实心点
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            fontSize: 30
                        }
                    },
                    data: [-0.9, 3.5, 4.8, 6, 6.5,7.5, 8.0, 7.7],
                    itemStyle: {
                        normal: {
                            color: '#3FD1FD'
                        }
                    },
                },

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //大屏1 右1
    function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
        option1 = {

            color: ['#FFCFA8', '#E9B6B9', '#CDBFE8', '#70D9DA', '#8EC9F4 '],
            legend: {
                left: 20,
                data: ['大型企业,738', '中型企业,19416', '小型企业,185232', '微型企业,574902'],
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                bottom: 0
            },
            series: [{
                type: 'pie',
                center: ['50%', '45%'],
                data: [{
                        value: 738,
                        name: '大型企业,738',

                    },
                    {
                        value: 19416,
                        name: '中型企业,19416',

                    },
                    {
                        value: 185232,
                        name: '小型企业,185232',

                    },
                    {
                        value: 574902,
                        name: '微型企业,574902',

                    },
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),

                label: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 16,
                    formatter: function (val) { //让series 中的文字进行换行
                        return val.name.split(",").join("\n");
                    }
                },

                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        };
        option2 = {

            // color: ["blue", "green", "yellow", "red"],
            legend: {
                left: 20,
                data: ['成立1年内', '成立1-5年', '成立5-10年', '成立10-15年', '成立15年以上'],
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                bottom: 0
            },
            series: [{
                type: 'pie',
                center: ['50%', '45%'],
                data: [{
                        value: 131696,
                        name: '成立1年内',

                    },
                    {
                        value: 397341,
                        name: '成立1-5年',

                    },
                    {
                        value: 188983,
                        name: '成立5-10年',

                    },
                    {
                        value: 62389,
                        name: '成立10-15年',

                    },
                    {
                        value: 50521,
                        name: '成立15年以上',

                    },
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),

                label: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 16,
                    formatter: function (val) { //让series 中的文字进行换行
                        return val.name.split(",").join("\n");
                    }
                },

                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        };

        let i = 0;
        setInterval(() => {
            i++;
            if (i % 2 == 0) {
                myChart.setOption(option2);
                document.querySelector('.settitle1').innerHTML = "企业成立年限";
                console.log(document.querySelector('.settitle1'));
            } else {
                myChart.setOption(option1);
                document.querySelector('.settitle1').innerHTML = "企业规模分布";
            }
        }, 10000)
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //大屏1 右2
    function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {
            legend: {

                left: 20,
                data: ['规模以上工业企业,4349', '国有企业,2302', '集团企业（国企,165', '集团企业（民营）,120', '上市企业,36'],
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                bottom: 0
            },
            color: ['#FFCFA8', '#E9B6B9', '#CDBFE8', '#70D9DA', '#8EC9F4 '],
            series: [{
                type: 'pie',
                center: ['50%', '45%'],
                data: [{
                        value: 4349,
                        name: '规模以上工业企业,4349'
                    },
                    {
                        value: 2302,
                        name: '国有企业,2302'
                    },
                    {
                        value: 165,
                        name: '集团企业（国企）,165'
                    },
                    {
                        value: 120,
                        name: '集团企业（民营）,120'
                    },
                    {
                        value: 36,
                        name: '上市企业,36'
                    }
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                label: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 16,
                    formatter: function (val) { //让series 中的文字进行换行
                        return val.name.split(",").join("\n");
                    }
                },

                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //大屏1 右3
    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option31 = {
            color: ['#FFCFA8', '#E9B6B9', '#70D9DA', '#8EC9F4 '],
            legend: {
                color: '#fff',
                left: 20,
                data: ['科技部科技型中小企业,2150', '高新技术企业,1492', '企业技术中心,434'],
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                bottom: 0
            },
            series: [{
                type: 'pie',
                center: ['48%', '43%'],
                radius: ['50%', '70%'],
                data: [{
                        value: 2105,
                        name: '科技部科技型中小企业,2150'
                    },
                    {
                        value: 1492,
                        name: '高新技术企业,1492'
                    },
                    {
                        value: 434,
                        name: '企业技术中心,434'
                    },

                ],
                label: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 15,
                    formatter: function (val) { //让series 中的文字进行换行
                        return val.name.split(",").join("\n");
                    }
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        };
        option32 = {
            legend: {
                color: '#fff',
                left: 20,
                data: ['科技企业孵化器', '国家企业技术中心', '专精特新“小巨人”企业', '小巨人企业', '国家级科技企业孵化器', '技术先进型服务企业', '制造业单项冠军企业'],
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                bottom: 0
            },
            series: [{
                type: 'pie',
                center: ['48%', '43%'],
                radius: ['50%', '70%'],
                data: [{
                        value: 38,
                        name: '科技企业孵化器'
                    },
                    {
                        value: 21,
                        name: '国家企业技术中心'
                    },
                    {
                        value: 8,
                        name: '专精特新“小巨人”企业'
                    },
                    {
                        value: 8,
                        name: '小巨人企业'
                    },
                    {
                        value: 6,
                        name: '国家级科技企业孵化器'
                    },
                    {
                        value: 3,
                        name: '技术先进型服务企业'
                    },
                    {
                        value: 1,
                        name: "制造业单项冠军企业"
                    }

                ],
                label: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 15,
                    formatter: function (val) { //让series 中的文字进行换行
                        return val.name.split(",").join("\n");
                    }
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        };
        let i = 0;
        setInterval(() => {
            i++;
            if (i % 2 == 0) {
                myChart.setOption(option32);
            } else {
                myChart.setOption(option31);

            }
        }, 10000)
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option31);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //大屏1 右4
    function echarts_34() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb4'));
        option41 = {
            color: ['#FFCFA8', '#E9B6B9', '#CDBFE8', '#70D9DA', '#8EC9F4 '],
            legend: {
                color: '#fff',
                left: 20,
                data: ['批发和零售业,256333', '农、林、牧、渔服务业,135012', '租赁和商务服务业,113818', '建筑业,73951', '信息传输、软件和信息技术服务业,52897', '制造业,41116', '房地产业,29008', '科学研究和技术服务业,27430', '居民服务、修理和其他服务业,24347', '交通运输、仓储和邮政业,22023', '其他,54995'],
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                },
                bottom: 0
            },
            series: [{
                type: 'pie',
                center: ['50%', '43%'],
                radius: ['50%', '70%'],
                data: [{
                        value: 256333,
                        name: '批发和零售业,256333'
                    },
                    {
                        value: 135012,
                        name: '农、林、牧、渔服务业,135012'
                    },
                    {
                        value: 113818,
                        name: '租赁和商务服务业,113818'
                    },
                    {
                        value: 73951,
                        name: '建筑业,73951'
                    },
                    {
                        value: 52897,
                        name: '信息传输、软件和信息技术服务业,52897'
                    },
                    {
                        value: 41116,
                        name: '制造业,41116'
                    },
                    {
                        value: 29008,
                        name: '房地产业,29008'
                    },
                    {
                        value: 27430,
                        name: '科学研究和技术服务业,27430'
                    },
                    {
                        value: 24347,
                        name: '居民服务、修理和其他服务业,24347'
                    },
                    {
                        value: 22023,
                        name: '交通运输、仓储和邮政业,22023'
                    },
                    {
                        value: 54995,
                        name: '其他,54995'
                    }
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                label: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 16,
                    formatter: function (val) { //让series 中的文字进行换行
                        return val.name.split(",").join("\n");
                    }
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        };

        option42 = {
            legend: {
                color: '#fff',
                left: 20,
                data: ['昆明', '曲靖', '玉溪', '保山', '昭通',
                    '丽江',
                    '普洱',
                    '临沧',
                    '楚雄',
                    '红河',
                    '文山',
                    '西双版纳',
                    '大理',
                    '德宏',
                    '怒江',
                    '迪庆'
                ],
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                },
                bottom: 0
            },
            series: [{
                type: 'pie',
                center: ['50%', '43%'],
                radius: ['50%', '70%'],
                data: [{
                        value: 256333,
                        name: '昆明'
                    },
                    {
                        value: 135012,
                        name: '曲靖'
                    },
                    {
                        value: 113818,
                        name: '玉溪'
                    },
                    {
                        value: 73951,
                        name: '保山'
                    },
                    {
                        value: 52897,
                        name: '昭通'
                    },
                    {
                        value: 41116,
                        name: '丽江'
                    },
                    {
                        value: 29008,
                        name: '普洱'
                    },
                    {
                        value: 27430,
                        name: '临沧'
                    },
                    {
                        value: 24347,
                        name: '楚雄'
                    },
                    {
                        value: 22023,
                        name: '红河'
                    },
                    {
                        value: 54995,
                        name: '文山'
                    }, {
                        name: '西双版纳',
                        value: 22722,


                    }, {
                        name: '大理',
                        value: 48236

                    }, {
                        name: '德宏',
                        value: 14231

                    }, {
                        name: '怒江',
                        value: 8400

                    }, {
                        name: '迪庆',
                        value: 10051
                    }
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                label: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 16,
                    formatter: function (val) { //让series 中的文字进行换行
                        return val.name.split(",").join("\n");
                    }
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        };

        let i = 0;
        setInterval(() => {
            i++;
            if (i % 2 == 0) {
                myChart.setOption(option42);
                document.querySelector('.settitle2').innerHTML = "企业区域分布";
            } else {
                myChart.setOption(option41);
                document.querySelector('.settitle2').innerHTML = "企业行业分布";

            }
        }, 10000);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option41);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

})