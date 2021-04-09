$(function () {
    echarts2_1();
    echarts2_2();
    echarts2_3();
    echarts2_4();
    echarts2_5();
    echarts2_6();
    echarts2_7();
    //大屏2 左边1
    function echarts2_1() {
        // 基于准备好的dom，初始化echarts实例
        $.ajax({
            type: "GET",
            url: "http://59.216.193.7:80/dv/bigScreen/getIndustryValueAdded",
            success: function (res) {
                var myChart = echarts.init(document.getElementById('echart1'));
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    legend: {
                        data: ['工业增加值累计增速(%)'],
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
                    xAxis: [{
                        type: 'category',
                        data: res.data.x,

                        axisPointer: {
                            type: 'shadow'
                        },

                        axisLine: {
                            lineStyle: {
                                width: 2,
                                color: 'red'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            show: true,
                            rotate: 38,
                            splitNumber: 15,
                            textStyle: {
                                color: "#7ECEF4",
                                fontSize: '20',
                            },
                        },
                    }],
                    yAxis: [{
                            type: 'value',
                            name: '亿元',
                            interval: 1,
                            axisLabel: {
                                formatter: '{value}',
                                interval: 0,
                                show: true,
                                splitNumber: 15,
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

                    ],
                    series: [{
                        name: '工业增加值累计增速(%)',
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                fontSize: 30
                            }
                        },
                        yAxisIndex: 0,
                        data: res.data.y,
                        itemStyle: {
                            normal: {
                                color: '#87DBF7'
                            }
                        },
                    }]

                };
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        });
        // 使用刚指定的配置项和数据显示图表。
    }
    //大屏2 左边2
    function echarts2_2() {
        // 基于准备好的dom，初始化echarts实例
        $.ajax({
            type: "GET",
            url: "http://59.216.193.7:80/dv/bigScreen/getIndustryValueAddedComparison",
            success: function (res) {
                var myChart = echarts.init(document.getElementById('echart2'));
                option2 = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        containLabel: true
                    },
                    legend: {
                        data: ['云南', '全国', '四川', '贵州', '广西'],
                        textStyle: {
                            fontSize: 22, //字体大小
                            color: '#ffffff' //字体颜色
                        },
                        bottom: 0
                    },

                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        boundaryGap: true, //设置为true
                        type: 'category',
                        boundaryGap: false,
                        data: res.data.x,
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
                                width: 2,
                                color: 'red'
                            }
                        },

                    },
                    yAxis: {
                        type: 'value',
                        name: '%',
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
                            data: res.data.yuan_nan,
                            itemStyle: {
                                normal: {
                                    color: '#3FD1FD',

                                    lineStyle: {
                                        width: 10 //设置线条粗细
                                    }
                                }
                            },
                            symbol: 'circle', //设定为实心点
                            symbolSize: 22,
                        },
                        {
                            name: '全国',
                            symbol: 'circle', //设定为实心点
                            symbolSize: 22,
                            type: 'line',

                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 30,
                                    color: "#fff"

                                }
                            },
                            data: res.data.quan_guo,
                            itemStyle: {
                                normal: {
                                    color: 'yellow',
                                    lineStyle: {
                                        width: 10 //设置线条粗细
                                    }
                                }
                            },
                        },

                        {
                            name: '四川',
                            type: 'line',
                            symbol: 'circle', //设定为实心点
                            data: res.data.si_chuan,
                            itemStyle: {
                                normal: {
                                    color: '#FFAB06'
                                }
                            },
                        },
                        {
                            name: '贵州',
                            type: 'line',
                            symbol: 'circle', //设定为实心点
                            data: res.data.gui_zhou,
                            itemStyle: {
                                normal: {
                                    color: '#B73535'
                                }
                            },
                        }, {
                            name: '广西',
                            type: 'line',
                            symbol: 'circle', //设定为实心点
                            data: res.data.guang_xi,
                            itemStyle: {
                                normal: {
                                    color: '#DCBF1D'
                                }
                            },
                        }
                    ]

                };
                let i = 0;
                setInterval(() => {
                    i++;
                    if (i == 1) {
                        option2.series[1].label = {
                            normal: {
                                show: true,
                                position: 'bottom',
                                fontSize: 30,
                                color: '#fff'
                            },
                            fontWeight: 900
                        }
                        option2.series[0].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[2].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[3].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[4].label = {
                            normal: {
                                show: false,
                            }
                        }
                        myChart.setOption(option2);

                    } else if (i == 2) {
                        option2.series[2].label = {
                            normal: {
                                show: true,
                                position: 'top',
                                fontSize: 30,
                                color: '#fff'
                            },
                            fontWeight: 900
                        }
                        option2.series[1].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[0].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[3].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[4].label = {
                            normal: {
                                show: false,
                            }
                        }
                        myChart.setOption(option2);
                    } else if (i == 3) {

                        option2.series[3].label = {
                            normal: {
                                show: true,
                                position: 'top',
                                fontSize: 30,
                                color: '#fff'
                            },
                            fontWeight: 900
                        }
                        option2.series[1].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[0].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[2].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[4].label = {
                            normal: {
                                show: false,
                            }
                        }
                        myChart.setOption(option2);
                    } else if (i == 4) {

                        option2.series[4].label = {
                            normal: {
                                show: true,
                                position: 'top',
                                fontSize: 30,
                                color: '#fff'
                            },
                            fontWeight: 900
                        }
                        option2.series[1].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[0].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[2].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[3].label = {
                            normal: {
                                show: false,
                            }
                        }
                        myChart.setOption(option2);
                    } else if (i == 5) {
                        option2.series[0].label = {
                            normal: {
                                show: true,
                                position: 'top',
                                fontSize: 30,
                                color: '#fff'
                            },
                            fontWeight: 900
                        }
                        option2.series[1].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[3].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[2].label = {
                            normal: {
                                show: false,
                            }
                        }
                        option2.series[4].label = {
                            normal: {
                                show: false,
                            }
                        }
                        myChart.setOption(option2);
                    } else if (i > 5) {
                        i = 0;
                    }
                }, 10000)
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option2);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        });

    }
    //大屏2 左边4
    function echarts2_3() {
        // 基于准备好的dom，初始化echarts实例

        // $.ajax({
            // type: "GET",
            // url: "http://59.216.193.7:80/dv/bigScreen/getIndustryInvestmentComparison",
            // success: function (res) {
                var myChart = echarts.init(document.getElementById('echart3'));
                option = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        containLabel: true
                    },
                    legend: {
                        data: ['工业投资增速（%）', '电力投资增速（%）', '非电投资增速（%）'],
                        textStyle: {
                            fontSize: 22, //字体大小
                            color: '#ffffff' //字体颜色
                        },
                        bottom: 0
                    },

                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12'],
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
                                width: 2,
                                color: 'red'
                            }
                        },

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
                            name: '工业投资增速（%）',
                            type: 'line',
                            symbol: 'circle', //设定为实心点
                            symbolSize: 16,

                            data: [-0.3, 1.61, 2.8, 3.8, 5, 5.4],
                            itemStyle: {
                                normal: {
                                    color: 'yellow',
                                    lineStyle: {
                                        width: 6 //设置线条粗细
                                    }
                                }
                            },
                        },
                        {
                            name: '电力投资增速（%）',
                            type: 'line',
                            symbolSize: 16,
                            symbol: 'circle', //设定为实心点
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 30
                                }
                            },
                            data: [-6, -3.29, -0.9, -5.02, 0.5, -1.3],
                            itemStyle: {
                                normal: {
                                    color: '#4ad2ff',
                                    lineStyle: {
                                        width: 6 //设置线条粗细
                                    }
                                }
                            },
                        }, {
                            name: "非电投资增速（%）",
                            type: 'line',
                            symbolSize: 16,
                            symbol: 'circle', //设定为实心点

                            data: [1.24, 2.92, 3.8, 6.25, 6.2, 7.3],
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        width: 6 //设置线条粗细
                                    },
                                    color: '#a5a5a5'
                                }
                            },
                        }
                    ]

                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            // }
        // });


    }
    //大屏2 左边3
    function echarts2_4() {
        // 基于准备好的dom，初始化echarts实例
        // bigScreen/getIndustryBusinessEfficiency
        $.ajax({
            type: "GET",
            url: "http://59.216.193.7:80/dv/bigScreen/getIndustryBusinessEfficiency",
            success: function (res) {
                var myChart = echarts.init(document.getElementById('echart4'));
                option = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        containLabel: true
                    },
                    legend: {
                        data: ['累计营业收入(万元)', '累计营业收入增减(%)'],
                        textStyle: {
                            fontSize: 14, //字体大小
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
                        data: res.data.x,

                        boundaryGap: true, // x轴两边是否留白

                        axisLabel: {
                            interval: 0,
                            rotate: 40,
                            rotate: 38,
                            formatter: '{value}',
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                color: "#7ECEF4",
                                fontSize: '20',
                            },
                        },

                    },
                    yAxis: [{
                        type: 'value',

                        min: 0,
                        max: 12000,
                        interval: 2000,
                        axisLabel: {
                            formatter: '{value}',
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
                    }, {
                        type: 'value',

                        min: -12,
                        max: 0,
                        interval: 2,
                        axisLabel: {
                            formatter: '{value}',
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
                    }],
                    series: [{
                            name: '累计营业收入(万元)',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: '#4ad2ff'
                                }
                            },
                            data: res.data.operatingIncome,

                        },

                        {
                            name: '累计营业收入增减(%)',
                            type: 'line',
                            yAxisIndex: 1,
                            symbolSize: 16,
                            symbol: 'circle', //设定为实心点
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 32,
                                    color: '#fff'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'yellow',
                                    lineStyle: {
                                        width: 6 //设置线条粗细
                                    }
                                }
                            },
                            data: res.data.operatingIncomeAccumulative,

                        },

                    ]

                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        });


    }
    //大屏2 右边1
    function echarts2_5() {
        // bigScreen/getIndustryCategory
        // 基于准备好的dom，初始化echarts实例
        $.ajax({
            type: "GET",
            url: "http://59.216.193.7:80/dv/bigScreen/getIndustryCategory",
            success: function (res) {
                console.log(res.data);
                var myChart = echarts.init(document.getElementById('fb1'));
                option = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '1%',
                        right: '13%',
                        containLabel: true
                    },
                    legend: {
                        data: ['制造业增加值增速（%）', '采矿业增加值增速（%）', '电力、燃气和水的生产和供应业增加值增速（%）'],
                        textStyle: {
                            fontSize: 22, //字体大小
                            color: '#ffffff' //字体颜色
                        },
                        bottom: 0
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: res.data.x,
                        axisLabel: {
                            formatter: '{value}',
                            interval: 0,
                            rotate: 38,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                color: "#7ECEF4",
                                fontSize: '20',
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                width: 2,
                                color: 'red'
                            }
                        },

                    },
                    yAxis: {
                        type: 'value',
                        name: '%',
                        // min: -16,
                        // max: 4,
                        interval: 2,
                        axisLabel: {
                            formatter: '{value} ',
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
                            name: '采矿业增加值增速（%）',
                            type: 'line',
                            symbolSize: 16,
                            symbol: 'circle', //设定为实心点
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 26
                                }
                            },
                            data: res.data.miningIndustry,
                            itemStyle: {
                                normal: {
                                    color: 'yellow',
                                    lineStyle: {
                                        width: 6 //设置线条粗细
                                    }
                                }
                            },
                        },
                        {
                            name: '制造业增加值增速（%）',
                            type: 'line',
                            symbolSize: 16,

                            symbol: 'circle', //设定为实心点
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 26
                                }
                            },
                            data: res.data.manufacturing,
                            itemStyle: {
                                normal: {
                                    color: '#4ad2ff',
                                    lineStyle: {
                                        width: 6 //设置线条粗细
                                    }
                                }
                            },
                        }, {
                            name: "电力、燃气和水的生产和供应业增加值增速（%）",
                            symbolSize: 16,
                            type: 'line',
                            symbol: 'circle', //设定为实心点
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 26
                                }
                            },
                            data: res.data.electricity_gas_water,
                            itemStyle: {
                                normal: {
                                    color: '#a5a5a5',
                                    lineStyle: {
                                        width: 6 //设置线条粗细
                                    }
                                }
                            },
                        }
                    ]

                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        });

    }
    //大屏2 右边2
    function echarts2_6() {
        // 基于准备好的dom，初始化echarts实例
        $.ajax({
            type: "GET",
            url: "http://59.216.193.7:80/dv/bigScreen/getIndustryPPI",
            success: function (res) {
                console.log(res.data);
                var myChart = echarts.init(document.getElementById('fb2'));

                option = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['工业生产者价格指数'],
                        textStyle: {
                            fontSize: 22, //字体大小
                            color: '#ffffff' //字体颜色
                        },
                        bottom: 0
                    },

                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: res.data.x,
                        axisLabel: {
                            formatter: '{value}',
                            interval: 0,
                            rotate: 38,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                color: "#7ECEF4",
                                fontSize: '20',
                            },
                        },

                    },
                    yAxis: {
                        type: 'value',
                        name: '%',
                        min: 96,
                        max: 102,
                        interval: 1,
                        axisLabel: {
                            formatter: '{value} ',
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
                            name: '工业生产者价格指数',
                            type: 'line',
                            symbol: 'circle', //设定为实心点
                            symbolSize: 20,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 26
                                }
                            },
                            data: res.data.industryPPI,
                            itemStyle: {
                                normal: {
                                    color: '#3FD1FD',
                                    lineStyle: {
                                        width: 6 //设置线条粗细
                                    }
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
        });
    }
    //大屏2 右边3
    function echarts2_7() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            legend: {
                data: ['工业企业数量'],
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
            xAxis: [{
                type: 'value',
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
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                data: ['迪庆', '怒江', '德宏', '大理', '西双版纳', '文山', '红河', '楚雄', '临沧', '普洱', '丽江', '昭通', '保山', '玉溪', '曲靖', '昆明', ],
                axisLabel: {
                    formatter: '{value}',
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '20',
                    },
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                    name: '工业企业数量',
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'inside',
                        color: '#fff',
                        fontSize: 20
                    },
                    data: [455,
                        477,
                        1031,
                        1162,
                        1204,
                        1823,
                        1872,
                        1891,
                        2419,
                        2712,
                        2891,
                        3016,
                        3419,
                        3813,
                        5257,
                        15769
                    ],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0.3, 0.9, 1,
                            [{
                                    offset: 0,
                                    color: '#83bff6'
                                },
                                {
                                    offset: 0.5,
                                    color: '#188df0'
                                },
                                {
                                    offset: 1,
                                    color: '#188df0'
                                }
                            ]
                        )
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

    function setTable() {
        let data = [{
                name: '铁矿石原矿',
                danw: '万吨',
                num: '1538.37',
                num2: '12.1',
                color: false
            },
            {
                name: '锰矿石成品矿',
                danw: '万吨',
                num: '33.80',
                num2: '-100.0 ',
                color: false
            },
            {
                name: '铜金属含量',
                danw: '万吨',
                num: '19.01',
                num2: '10.7 ',
                color: false
            },
            {
                name: '铅金属含量',
                danw: '万吨',
                num: '8.79',
                num2: '6.0 ',
                color: false
            },
            {
                name: '锌金属含量',
                danw: '万吨',
                num: '35.58',
                num2: '-9.7',
                color: false
            },
            {
                name: '锡金属含量',
                danw: '万吨',
                num: '4.84',
                num2: '35.1',
                color: false
            },
            {
                name: '钨精矿折合量(折三氧化钨65%)',
                danw: '吨',
                num: '4559.38',
                num2: '11.6',
                color: false
            },
            {
                name: '硫铁矿石(折含硫35%)',
                danw: '万吨',
                num: '45.43',
                num2: '-15.2',
                color: false
            },
            {
                name: '磷矿石（折含五氧化二磷30％）',
                danw: '万吨',
                num: '1361.03',
                num2: '-7.7',
                color: false
            },
            {
                name: '生铁',
                danw: '万吨',
                num: '1376.57',
                num2: '4.1',
                color: false
            },
            {
                name: '粗钢',
                danw: '万吨',
                num: '1627.28',
                num2: '1.4',
                color: false
            },
            {
                name: '钢材',
                danw: '万吨',
                num: '1881.7',
                num2: '8.5',
                color: false
            },
            {
                name: '铁合金',
                danw: '万吨',
                num: '39.94',
                num2: '-11.5',
                color: false
            },
            {
                name: '十种有色金属',
                danw: '万吨',
                num: '349.88',
                num2: '9.7',
                color: false
            },
            {
                name: '氧化铝',
                danw: '万吨',
                num: '93.51',
                num2: '-19.4',
                color: false
            },
            {
                name: '铜材',
                danw: '万吨',
                num: '15.46',
                num2: '8.2',
                color: false
            },
            {
                name: '铝材',
                danw: '万吨',
                num: '42.92',
                num2: '15.9',
                color: false
            },
            {
                name: '硫酸（折100%）',
                danw: '万吨',
                num: '1138.36',
                num2: '2.7',
                color: false
            },
            {
                name: '烧碱（折100%）',
                danw: '万吨',
                num: '16.58',
                num2: '-2.3',
                color: false
            },
            {
                name: '盐酸（氯化氢,含量31%）',
                danw: '万吨',
                num: '11.72',
                num2: '-9.3',
                color: false
            },
            {
                name: '碳化钙（电石，折300升/千克）',
                danw: '万吨',
                num: '41.86',
                num2: '-9.6',
                color: false
            },
            {
                name: '纯苯',
                danw: '万吨',
                num: '2.71',
                num2: '-31.7',
                color: false
            },
            {
                name: '合成橡胶',
                danw: '万吨',
                num: '63.17',
                num2: '-25.2',
                color: false
            },
            {
                name: '磷酸一铵（实物量）',
                danw: '万吨',
                num: '194.30',
                num2: '11.1',
                color: false
            },
            {
                name: '磷酸二铵（实物量）',
                danw: '万吨',
                num: '389.85',
                num2: '7.2',
                color: false
            },
            {
                name: '黄磷',
                danw: '万吨',
                num: '39.02',
                num2: '10.1',
                color: false
            },
            {
                name: '纯碱',
                danw: '万吨',
                num: '7.73',
                num2: '-37.4',
                color: false
            },
            {
                name: '初级形态塑料',
                danw: '万吨',
                num: '25.77',
                num2: '-8.4',
                color: false
            },
            {
                name: '精甲醇',
                danw: '万吨',
                num: '52.43',
                num2: '77.9',
                color: false
            },
            {
                name: '合成氨',
                danw: '万吨',
                num: '183.63',
                num2: '11.9',
                color: false
            },
            {
                name: '农用氮、磷、钾化学肥料（折纯）',
                danw: '万吨',
                num: '161.45',
                num2: '-20.3',
                color: false
            },
            {
                name: '化学农药原药（折有效成分100％）',
                danw: '吨',
                num: '823.47',
                num2: '-4.0',
                color: false
            },
            {
                name: '农用薄膜',
                danw: '万吨',
                num: '7.86',
                num2: '6.9',
                color: false
            },
            {
                name: '小型拖拉机',
                danw: '台',
                num: '11840',
                num2: '11.1',
                color: false
            },
            {
                name: '饲料',
                danw: '万吨',
                num: '398.52',
                num2: '23.3',
                color: false
            },
            {
                name: '复烤烟叶',
                danw: '万吨',
                num: '27.83',
                num2: '-3.1',
                color: false
            },
            {
                name: '卷烟',
                danw: '万箱',
                num: '560.08',
                num2: '2.9',
                color: false
            },
            {
                name: '成品糖',
                danw: '万吨',
                num: '235.20',
                num2: '4.9',
                color: false
            },
            {
                name: '发酵酒精（折96度，商品量）',
                danw: '万升',
                num: '15718.04',
                num2: '-3.9',
                color: false
            },
            {
                name: '精制茶',
                danw: '万吨',
                num: '10.62',
                num2: '-8.9',
                color: false
            },
            {
                name: '原盐',
                danw: '万吨',
                num: '112.42',
                num2: '6.4',
                color: false
            },
            {
                name: '饮料酒',
                danw: '万升',
                num: '59004.97',
                num2: '-16.0',
                color: false
            },
            {
                name: '饮料',
                danw: '万吨',
                num: '348.91',
                num2: '-4.5',
                color: false
            },
            {
                name: '罐头',
                danw: '吨',
                num: '11690.00',
                num2: '-59.3',
                color: false
            },
            {
                name: '乳制品',
                danw: '万吨',
                num: '45.02',
                num2: '-0.7',
                color: false
            },
            {
                name: '糖果',
                danw: '吨',
                num: '11640.19',
                num2: '-24.6',
                color: false
            },
            {
                name: '化学纤维',
                danw: '吨',
                num: '29113.00',
                num2: '-11.6',
                color: false
            },
            {
                name: '纱',
                danw: '吨',
                num: '9182.98',
                num2: '-30.5',
                color: false
            },
            {
                name: '口罩',
                danw: '万个（只）',
                num: '30326.76',
                num2: '705173.5',
                color: false
            },
            {
                name: '印染布',
                danw: '万米',
                num: '0.00',
                num2: '-100.0',
                color: false
            },
            {
                name: '蚕丝',
                danw: '吨',
                num: '2001.33',
                num2: '-14.1',
                color: false
            },
            {
                name: '服装',
                danw: '万件',
                num: '775.57',
                num2: '-4.0',
                color: false
            },
            {
                name: '酱油',
                danw: '吨',
                num: '12042.57',
                num2: '-9.5',
                color: false
            },
            {
                name: '塑料制品',
                danw: '万吨',
                num: '43.84',
                num2: '-1.6',
                color: false
            },
            {
                name: '自来水生产量',
                danw: '万立方米',
                num: '72166.28',
                num2: '3.1',
                color: false
            },
            {
                name: '合成洗涤剂',
                danw: '万吨',
                num: '8.19',
                num2: '1.6',
                color: false
            },
            {
                name: '卫生陶瓷制品',
                danw: '万件',
                num: '147.24',
                num2: '-6.9',
                color: false
            },
            {
                name: '日用玻璃制品',
                danw: '吨',
                num: '12266.00',
                num2: '30.3',
                color: false
            },
            {
                name: '锂离子电池',
                danw: '万只(自然只)',
                num: '20035.12',
                num2: '24.3',
                color: false
            },
            {
                name: '铅酸蓄电池',
                danw: '万千伏安时',
                num: '32.00',
                num2: '63.4',
                color: false
            },
            {
                name: '纸浆',
                danw: '万吨',
                num: '24.53',
                num2: '-7.6',
                color: false
            },
            {
                name: '机制纸及纸板',
                danw: '万吨',
                num: '54.47',
                num2: '-13.4',
                color: false
            },
            {
                name: '纸制品',
                danw: '万吨',
                num: '62.45',
                num2: '3.0',
                color: false
            },
            {
                name: '大米',
                danw: '万吨',
                num: '22.27',
                num2: '25.2',
                color: false
            },
            {
                name: '小麦粉',
                danw: '万吨',
                num: '18.18',
                num2: '20.3',
                color: false
            },
            {
                name: '精制食用植物油',
                danw: '万吨',
                num: '28.48',
                num2: '-16.4',
                color: false
            },
            {
                name: '方便面',
                danw: '吨',
                num: '48155.74',
                num2: '17.4',
                color: false
            },
            {
                name: '水泥',
                danw: '万吨',
                num: '9158.07',
                num2: '-0.9',
                color: false
            },
            {
                name: '水泥熟料',
                danw: '万吨',
                num: '6637.64',
                num2: '-0.1',
                color: false
            },
            {
                name: '平板玻璃',
                danw: '万重量箱',
                num: '1858.40',
                num2: '35.2',
                color: false
            },
            {
                name: '天然大理石建筑板材',
                danw: '万平方米',
                num: '161.32',
                num2: '-3.3',
                color: false
            },
            {
                name: '商品混凝土',
                danw: '万立方米',
                num: '5370.51',
                num2: '7.1',
                color: false
            },
            {
                name: '人造板',
                danw: '万立方米',
                num: '246.90',
                num2: '-9.0',
                color: false
            },
            {
                name: '复合木地板',
                danw: '万平方米',
                num: '201.10',
                num2: '-10.5',
                color: false
            },
            {
                name: '松香',
                danw: '万吨',
                num: '12.77',
                num2: '-19.3',
                color: false
            },
            {
                name: '矿山专用设备',
                danw: '吨',
                num: '37095.62',
                num2: '-13.5',
                color: false
            },
            {
                name: '金属轧制设备',
                danw: '吨',
                num: '37095.62',
                num2: '-13.5',
                color: false
            },
            {
                name: '金属轧制设备',
                danw: '吨',
                num: '1994.00',
                num2: '-23.5',
                color: false
            },
            {
                name: '起重机',
                danw: '吨',
                num: '11771.00',
                num2: '-26.7',
                color: false
            },
            {
                name: '发电设备',
                danw: '千瓦',
                num: '252559',
                num2: '-50.4',
                color: false
            },
            {
                name: '金属紧固件',
                danw: '吨',
                num: '7330.62',
                num2: '-33.5',
                color: false
            },
            {
                name: '交流电动机',
                danw: '万千瓦',
                num: '26.30',
                num2: '-7.3',
                color: false
            },
            {
                name: '变压器',
                danw: '万千伏安',
                num: '1624.92',
                num2: '-18.4',
                color: false
            },
            {
                name: '炼油、化工生产专用设备',
                danw: '吨',
                num: '4507.62',
                num2: '62.0',
                color: false
            },
            {
                name: '金属切削机床',
                danw: '台',
                num: '24871.00',
                num2: '-2.2',
                color: false
            },
            {
                name: '汽车',
                danw: '辆',
                num: '15619.00',
                num2: '-80.9',
                color: false
            },
            {
                name: '低速载货汽车',
                danw: '辆',
                num: '0.00',
                num2: '-100.0',
                color: false
            },
            {
                name: '发动机',
                danw: '万千瓦',
                num: '3372.01',
                num2: '43.9',
                color: false
            },
            {
                name: '电力电缆',
                danw: '万千米',
                num: '34.83',
                num2: '-17.7',
                color: false
            },
            {
                name: '滚动轴承',
                danw: '万套',
                num: '0.00',
                num2: '-100.0',
                color: false
            },
            {
                name: '打印机',
                danw: '台',
                num: '10487.00',
                num2: '-75',
                color: false
            },
            {
                name: '单色印刷品',
                danw: '万令',
                num: '68.95',
                num2: '2.9',
                color: false
            },
            {
                name: '单晶硅',
                danw: '万千克',
                num: '10505.85',
                num2: '121.9',
                color: false
            },
            {
                name: '涂料',
                danw: '万吨',
                num: '11.92',
                num2: '-9.9',
                color: false
            },
            {
                name: '化学药品原药',
                danw: '吨',
                num: '749.12',
                num2: '-78.2',
                color: false
            },
            {
                name: '中成药',
                danw: '吨',
                num: '43076.51',
                num2: '16.9',
                color: false
            },
            {
                name: '电子元件',
                danw: '万只',
                num: '29280.01',
                num2: '6.8',
                color: false
            },
            {
                name: '光学仪器',
                danw: '万台（个）',
                num: '561.84',
                num2: '16.7',
                color: false
            },
            {
                name: '光电子器件',
                danw: '万只（片、套）',
                num: '5847.91',
                num2: '-18.6',
                color: false
            },
            {
                name: '眼镜成镜',
                danw: '副',
                num: '0.00',
                num2: '-100.0',
                color: false
            },
            {
                name: '太阳能热水器',
                danw: '万平方米',
                num: '54.36',
                num2: '-6.4',
                color: false
            },
        ];
        let html = "";
        for (let i = 0; i < 100; i++) {

            if (data[i].num2 < 0) {
                data[i].color = true;
            }
            const color1 = data[i].color ? "class='mytd'" : "";
            html += `
                <tr ` + color1 + `>
                <td>${data[i].name}
                </td>
                <td>${data[i].num}${data[i].danw}</td>
                <td>${data[i].num2}</td>
                </tr>`
        }
        document.querySelector('.settbody').innerHTML = html;
    }
    setTable();

})