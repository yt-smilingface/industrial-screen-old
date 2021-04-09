$(function () {
    echarts2_1();
    echarts2_2();
    echarts2_3();
    echarts2_4();
    echarts2_5();
    echarts2_6();
    echarts2_7();

    echartsMap();
    //大屏2 左边1
    function echarts2_1() {
        // 基于准备好的dom，初始化echarts实例
        // $.ajax({
            // type: "GET",
            // url: "http://59.216.193.7:80/dv/bigScreen/getIndustryValueAdded",
            // success: function (res) {
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
                        data: ['电子信息','石化化工','食品','能源','原材料','烟草','交通物流','资源综合利用','装备制造','生物医药','消费品',],

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
                            // interval: 1,
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
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                fontSize: 30
                            }
                        },
                        yAxisIndex: 0,
                        data: [80,339,992,366,926,21,14,99,409,154,456],
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
            // }
        // });
        // 使用刚指定的配置项和数据显示图表。
    }
    //大屏2 左边2
    function echarts2_2() {
        // 基于准备好的dom，初始化echarts实例
        // $.ajax({
            // type: "GET",
            // url: "http://59.216.193.7:80/dv/bigScreen/getIndustryValueAddedComparison",
            // success: function (res) {
                var myChart = echarts.init(document.getElementById('echart2'));

                var datas = [
                    {value: 174.41, name: '电子信息(174.41)',industryCode:[39]},
                    {value: 385.65, name: '石化化工(385.65)',industryCode:[7,25,26]},
                    {value: 352.44, name: '食品(352.44)',industryCode:[13,14,15]},
                    {value: 1246.33, name: '能源(1246.33)',industryCode:[6,7,25,44,45]},
                    {value: 1176.18, name: '原材料(1176.18)',industryCode:[6,8,9,10,31,32,30]},
                    {value: 1413.85, name: '烟草(1413.85)',industryCode:[16]},
                    {value: 21.63, name: '交通物流(21.63)',industryCode:[37]},
                    {value: 36.95, name: '资源综合利用(36.95)',industryCode:[42,46,12]},
                    {value: 97.40, name: '装备制造(97.40)',industryCode:[33,34,35,36,37,38,40,41,43]},
                    {value: 122.34, name: '生物医药(122.34)',industryCode:[27]},
                    {value: 153.66, name: '消费品(153.66)',industryCode:[17,18,19,20,21,22,23,24,28,29]},
                ]
                option2 = {
                    tooltip: {
                            trigger: 'item'
                    },
                    legend:{
                            bottom: 100,
                            tooltip:{
                                show:true,
                            },
                            textStyle: {
                                color: '#fff',
                                fontSize: 24
                            },
                            data: ['电子信息(174.41)','石化化工(385.65)','食品(352.44)','能源(1246.33)',
                            '原材料(1176.18)','烟草(1413.85)','烟草(1413.85)','资源综合利用(36.95)','装备制造(97.40)',
                            '生物医药(122.34)','消费品(153.66)']
                    },
                    color: ['#70ad47', '#5b9bd5', 'orange', '#a5a5a5', '#ffc000', '#4472c4'],
                    series: [
                            {
                            // name: '',
                            type: 'pie',
                            center: ["50%", "30%"], 
                            radius: ['35%', '50%'],
                            // avoidLabelOverlap: false,
                            // label: {
                            //         show: true,
                            //         // position: 'center'
                            //         label: {
                            //                 show: true,
                            //                 fontSize: '20',
                            //                 fontWeight: 'bold'
                            //         }
                            // },
                            // emphasis: {
                            //         label: {
                            //                 show: true,
                            //                 fontSize: '20',
                            //                 fontWeight: 'bold'
                            //         }
                            // },
                            // labelLine: {
                            //         show: false
                            // },
                            data: datas
                        }
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    label: {
                        color: 'rgba(255, 255, 255, 1)',
                        fontSize: 18,
                        formatter: function (val) { //让series 中的文字进行换行
                            return val.name.split(",").join("\n");
                        }
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option2);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            // }
        // });

    }
    //大屏2 左边4
    function echarts2_3() {
        // 基于准备好的dom，初始化echarts实例

        $.ajax({
            type: "GET",
            url: "http://59.216.193.7:80/dv/bigScreen/getIndustryInvestmentComparison",
            success: function (res) {
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
                        data: ['2020-4', '2020-5', '2020-6', '2020-7', '2020-8', '2020-9'],
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
                        min: -35,
                        max: 10,
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

                            data: res.data.industryInvestment,
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
                            data: res.data.electricityInvestment,
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

                            data: res.data.nonElectricInvestmentMap,
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
            }
        });


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
        // $.ajax({
            // type: "GET",
            // url: "http://59.216.193.7:80/dv/bigScreen/getIndustryCategory",
            // success: function (res) {
                var myChart = echarts.init(document.getElementById('fb1'));
                var datas = [
                    {value: 28, name: '5000万以下(28)'},
                    {value: 5, name: '5000万-1亿(5)'},
                    {value: 4, name: '1亿-2亿(4)'},
                    {value: 19, name: '2亿-5亿(19)'},
                    {value: 8, name: '5亿-10亿(8)'},
                    {value: 25, name: '10亿以上(25)'},
                ]
                option = {
                    tooltip: {
                            trigger: 'item'
                    },
                    legend:{
                        bottom: 0,
                        tooltip:{
                            show:true,
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 24
                        },
                        data: ['5000万以下(28)', '5000万-1亿(5)', '1亿-2亿(4)', '2亿-5亿(19)', '5亿-10亿(8)', '10亿以上(25)'],
                    },
                    color: ['#70ad47', '#5b9bd5', 'orange', '#a5a5a5', '#ffc000', '#4472c4'],
                    series: [
                            {
                            // name: '',
                            type: 'pie',
                            center: ["50%", "40%"], 
                            radius: ['40%', '60%'],
                            // avoidLabelOverlap: false,
                            // label: {
                            //         show: true,
                            //         // position: 'center'
                            // },
                            // emphasis: {
                            //         label: {
                            //                 show: false,
                            //                 fontSize: '14',
                            //                 fontWeight: 'bold'
                            //         }
                            // },
                            // labelLine: {
                            //         show: false
                            // },
                            data: datas
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

                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            // }
        // });

    }
    //大屏2 右边2
    function echarts2_6() {
        // 基于准备好的dom，初始化echarts实例
        // $.ajax({
            // type: "GET",
            // url: "http://59.216.193.7:80/dv/bigScreen/getIndustryPPI",
            // success: function (res) {
                // console.log(res.data);
                var myChart = echarts.init(document.getElementById('fb2'));

                
                var datas = [
                    {value: 30, name: '在谈(30)'},
                    {value: 32, name: '新开工(32)'},
                    {value: 28, name: '续建(28)'},
                    {value: 5, name: '竣工投产(5)'},
                ]
                option = {
                    tooltip: {
                            trigger: 'item'
                    },
                    legend:{
                        bottom: 0,
                        tooltip:{
                            show:true,
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 24
                        },
                        data: ['在谈(30)', '新开工(32)', '续建(28)', '竣工投产(5)'],
                    },

                    color: ['#70ad47', '#5b9bd5', 'orange', '#a5a5a5', '#ffc000', '#4472c4'],
                    series: [
                            {
                            // name: '',
                            type: 'pie',
                            center: ["50%", "40%"], 
                            radius: ['40%', '60%'],
                            // avoidLabelOverlap: false,
                            // label: {
                            //         show: true,
                            //         // position: 'center'
                            // },
                            // emphasis: {
                            //         label: {
                            //                 show: false,
                            //                 fontSize: '14',
                            //                 fontWeight: 'bold'
                            //         }
                            // },
                            // labelLine: {
                            //         show: false
                            // },
                            data: datas
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

                };

                    // ]

                // };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            // }
        // });
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
                    data: [, 12, , 30, , , , 1, 5, , 1, , , 9, 7, 30],
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
        let data = [{"id":26,"projectType":0,"name":"云硅智能科技小镇（二期、三期）","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530102","startTime":"2021-01-28 11:06:25","endTime":"2021-01-31 11:06:28","buildingLocation":"高新区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"云南省城市建设投资集团有限公司、闻泰科技股份有限公司、上海鹏欣集团等","isGoPublic":0,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":4400000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目将打造一个集智能终端制造、集成电路级单晶硅片生产、芯片生产、半导体封装封测产业基地。规划总用地面积8263亩，分三期建设，建设内容包括：年产不低于2000万部智能终端整装生产线，年产600万片集成电路级大尺寸单晶硅生产线项目，半导体分立器件芯片生产或封装测试线项目。","projectProgress":"正在开展前期，已办理投资备案、环评、能评、土地证、用地规划许可证、工程规划许可证（副本）、施工证（副本）。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:01:50","isDel":0,"progress":"1425.00","cityName":"昆明市","areaName":"五华区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":99,"projectType":0,"name":"数字大理经济产业园","codeAndName":"39","industryCode":"39","cityCode":"532900","areaCode":"532901","startTime":"2021-01-01 00:00:00","endTime":"2021-12-31 00:00:00","buildingLocation":"大理经开区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"中电科技","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":1500000.0,"bankLoan":0.0,"planTotalInvestment":0.0,"yearPlanInvestment":0.0,"proPlanFixedAssetsInvestment":0.0,"planFixedAssetsInvestment":0.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"双方共同规划建设大理信息创新与数字经济产业园区，协力将其打造成为云南省信创产业的应用技术、方案、人才输出高地与核心制造基地。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 13:33:50","isDel":0,"progress":"23.01","cityName":"大理白族自治州","areaName":"大理市","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":74,"projectType":2,"name":"晶科能源（楚雄）有限公司20GW高效电池片生产线项目","codeAndName":"39","industryCode":"39","cityCode":"532300","areaCode":"532301","startTime":"2020-01-01 00:00:00","endTime":"2022-12-01 00:00:00","buildingLocation":"楚雄市富民工业园区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"晶科能源（楚雄）有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":1200000.0,"yearPlanInvestment":3000000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目总投资120亿元人民币，分两期建设，每期建设10GW高效电池片生产项目。其中：一期10GW高效电池片项目选址于楚雄市富民工业园区1号路南侧，计划投资60亿元，用地约500亩，建设生产10GW高效电池片项目的基建、厂房10万平方米、辅助设施和员工宿舍等。项目投产后2年内一期项目全部建成并达产。达产后，年产值约80亿元，年税收约2亿元，解决就业岗位约3000人。","projectProgress":"目前已完成富民庄甸工业片区供配电项目110千伏的塔基础浇筑、从垃圾中转站至建华地块的晶科生活用水顶管钻挖施工、园区污水处理厂二期工程桩基钢筋笼436根、电池二车间：屋面檩条安装7824m²；地坪混凝土垫层施工5420m²；水泥砂浆保护层施工110m²；PE膜施工2736m²；钢筋混凝土地坪施工660m²；及电池一车间：基础混凝土浇筑108基；综合管廊桩基混凝土浇筑；钢柱吊装305根。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 11:40:28","isDel":0,"progress":"42.21","cityName":"楚雄彝族自治州","areaName":"楚雄市","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":50,"projectType":3,"name":"紫光芯云产业园项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2019-05-01 00:00:00","endTime":"2020-01-01 00:00:00","buildingLocation":"呈贡区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"紫光集团有限公司","isGoPublic":0,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":600000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目分三期建设：一期总投资约为22亿（目前备案项目总投资1.5亿），拟配置约200个机柜（包括服务器机柜、网络机柜和控制台机柜）和2000台服务器，项目投入运营后可提供100PB云存储容量。","projectProgress":"项目一期于2019年8月初进场施工，前期手续已全部办完，目前一期A栋主体工程已封顶，正在进行内外装修工程。预计2020年一期项目竣工，二期项目开工建设。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:55:24","isDel":0,"progress":"282.52","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":51,"projectType":3,"name":"昆明智能制造产业园项目（闻泰项目）","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530102","startTime":"2019-12-01 00:00:00","endTime":"2022-01-01 00:00:00","buildingLocation":"高新区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"昆明闻泰通讯有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":600000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目分两期建设，第一期年产能2000万台智能终端，项目于2019年12月开工，计划2020年9月完工；二期产能3000万台计划2021年12月动工，2023年12月完工。","projectProgress":"固定资产投资6月份入统，承台、地梁浇筑部分完成，桩基破桩部分完成，塔吊连续进场，入口、门禁施工","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:59:16","isDel":0,"progress":"63.04","cityName":"昆明市","areaName":"五华区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":110,"projectType":2,"name":"昆明市旅游指挥中心综合监管指挥系统大数据中心","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530101","startTime":"2020-11-01 00:00:00","endTime":"2023-12-01 00:00:00","buildingLocation":"云南昆明","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":" 云南腾云信息产业有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":350000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"数据中心项目占地面积150亩，规划建设数据中心6座，机柜15000个。5G+工业互联产业园项目占地面积150亩，规划引入3个工业互联网计算平台，培育20家工业互联网应用服务开发商。","projectProgress":"2020年11月18日已开工。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 14:02:06","isDel":0,"progress":"12.88","cityName":"昆明市","areaName":"市辖区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":46,"projectType":2,"name":"12英寸硅基OLED项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530111","startTime":"2020-02-01 00:00:00","endTime":"2024-01-01 00:00:00","buildingLocation":"空港经济区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"昆明京东方显示技术有限公司","isGoPublic":0,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":340000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目利用原厂房预留区域进行洁净室改造，配套新建动力辅助站房，并购置相应的生产及附属设备。建成满产后的12英寸硅基OLED产线，微型显示器产能为523万片/年（对应12寸硅晶圆片投入量为10000片每月）。","projectProgress":"该项目于2020年1月完成项目立项备案，2020年7月2日获环评批复。目前该项目一期基建招标进行中，工艺设备检讨、招标按计划有序推进。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:47:51","isDel":0,"progress":"29.28","cityName":"昆明市","areaName":"官渡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":56,"projectType":4,"name":"滇中新区智能终端产业园项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530111","startTime":"2017-01-01 00:00:00","endTime":"2019-01-01 00:00:00","buildingLocation":"空港经济区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"昆明空港置业有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":318000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目占地面积约243.65亩，总建筑面积约24万平方米。建设内容为标准厂房、服务楼、宿舍、道路等产业园附属工程和配套设施。","projectProgress":"该项目已竣工","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 11:07:24","isDel":0,"progress":"211.35","cityName":"昆明市","areaName":"官渡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":47,"projectType":3,"name":"云上云·云南省信息化中心（首期）项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2016-05-01 00:00:00","endTime":"2021-01-01 00:00:00","buildingLocation":"呈贡区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"云南云上云信息化有限公司","isGoPublic":1,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":224400.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"维护支撑中心、智慧云南指挥中心、北斗卫星应用中心、云南省政务信息中心、国家部委及州（市）、县数据中心、云计算中心、动力中心、办公业务用房及交易大厅及其他配套设施等。","projectProgress":"项目主体均已封顶，“党建云”项目已投入运营，目前正在开展进行室外装修、机电、消防、室外等工程的施工，计划2021年投入运营。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:49:58","isDel":0,"progress":"104.86","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":30,"projectType":2,"name":"昆明数码港国际软件园项目（中国数码港大数据产业园）","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2020-08-01 00:00:00","endTime":"2022-01-01 00:00:00","buildingLocation":"呈贡区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"中国数码港科技有限责任公司","isGoPublic":0,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":220000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"用地面积222亩，主要建设数据运营指挥中心、数据安全中心、数据综合处理中心、数据软件外包中心、金融数据交易中心、创新孵化中心及数据机房等。引进信息产业、互联网、大数据产业相关优势企业，打造专业园中园。","projectProgress":"项目于2019年8月15日完成供地，项目已完成可研、立项备案、环评备案、取得土地证及节能审查意见；规划设计方案已于5月14日正式通过市规委会。预计2020年9月份开工建设，2023年竣工投入运营。。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:10:07","isDel":0,"progress":"45.66","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":31,"projectType":2,"name":"福建网龙西南总部项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2020-10-01 00:00:00","endTime":"2022-08-01 00:00:00","buildingLocation":"呈贡区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"网龙网络控股有限公司","isGoPublic":0,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":210000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"用地面积40亩，计划总投资21亿元。建设昆明网龙西南总部基地。","projectProgress":"昆明市人民政府与网龙公司于2018年7月15日签订了战略框架协议，于2018年11月5日签订了合作协议。正在开展土地供应前期工作，预计2020年8月底完成供地。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:12:58","isDel":0,"progress":"26.27","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":54,"projectType":3,"name":"中关村.电子城项目（昆明）科技产业园二期项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530111","startTime":"2019-03-01 00:00:00","endTime":"2020-12-01 00:00:00","buildingLocation":"空港经济区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"中关村.电子城集团","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":210000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"工业厂房，研发办公及配套设施；建设规模：二期项目总建筑面积515109.95㎡，总占地面积约325416.29㎡，共分3个地块（43号、44号、48号）","projectProgress":"目前048号地块于2020年7月7日完成竣工验收；044号、043号地块主体结构施工已完成，二次结构施工完成50%，外援施工完成50%。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 11:04:02","isDel":0,"progress":"117.76","cityName":"昆明市","areaName":"官渡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":48,"projectType":3,"name":"中国移动（云南）数据中心项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2017-12-01 00:00:00","endTime":"2021-01-01 00:00:00","buildingLocation":"呈贡区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"中国移动通信集团云南有限公司","isGoPublic":0,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":200000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"大型绿色数据中心、政府企业电子政务网管中心、灾备中心、国际出口局、面向南亚东南亚信息化汇集中心等。","projectProgress":"项目于2017年11月开工建设，一期四栋建筑已完成主体建设、结构施工、机电设备安装，室外管沟管廊及机电配套工程，一期项目已于2020年2月正式投入运营。二期项目投资计划已完成集团公司内部审批，正在进行可研编制报批，预计2020年10月份启动施工招标报批，年内启动项目建设。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:51:39","isDel":0,"progress":"107.36","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":108,"projectType":2,"name":"云南移动第二数据中心及核心网灾备中心建设项目","codeAndName":"39","industryCode":"39","cityCode":"530400","areaCode":"530401","startTime":"2020-12-01 00:00:00","endTime":"2022-12-31 00:00:00","buildingLocation":"九龙工业园区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"中国移动通信集团云南有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":200000.0,"yearPlanInvestment":10.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"本项目为云南移动第二数据中心及核心网灾备中心，功能定位：作为省级机房，满足省级数据中心的业务需求，包含自身需求业务和IDC业务，同时满足核心网灾备中心的需求，解决省级数据中心同局址的问题。","projectProgress":"\"1、完成了征地选址工作；\n2、完成云南移动第二数据中心及核心网灾备中心项目可行性论证；\n3、完成云南移动第二数据中心及核心网灾备中心征地项目建议书编制工作。\"","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 13:58:35","isDel":0,"progress":"15.11","cityName":"玉溪市","areaName":"市辖区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":117,"projectType":0,"name":"曲靖经济技术开发区数字经济综合产业园建设项目","codeAndName":"39","industryCode":"39","cityCode":"530300","areaCode":"530301","startTime":"2021-02-01 00:00:00","endTime":"2024-03-01 00:00:00","buildingLocation":"曲靖经开区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"曲靖经济技术开发区数字经济局","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":200000.0,"bankLoan":0.0,"planTotalInvestment":0.0,"yearPlanInvestment":0.0,"proPlanFixedAssetsInvestment":0.0,"planFixedAssetsInvestment":0.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"1.建设5G+工业互联网融合应用先导示范园。规划晶电路以北，晶石路以东，共计165亩用地，配合数据中心建设和使用，5G+互联网融合应用区规划、建设和投资工作，按产业链配套延伸产业和服务项目，包含智能制造基地和信创产品制造基地。2.建设数字经济产业园。规划位于翠峰西路以北，宁州路以西，工投商道区域，用地面积约0.17k㎡，建筑面积7万多㎡建设数字经济总部基地、数据治理基地、数字安全实训基地、数字经济研发中心和培训中心。3.建设数字经济文化创意展示园。规划位于面店水库以北，南小线以西，用地面积约0.27k㎡，包含铁三公园观礼台，建筑面积3932.96㎡，北坡152亩用地。","projectProgress":"完成可行性研究报告，正在做后续手续办理。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 17:30:30","isDel":0,"progress":"4.71","cityName":"曲靖市","areaName":"市辖区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":80,"projectType":0,"name":"云南能投数字经济（呈贡）产业园","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2021-01-01 00:00:00","endTime":"2021-12-31 00:00:00","buildingLocation":"--","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"云南能投信息产业开发有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":187400.0,"bankLoan":0.0,"planTotalInvestment":0.0,"yearPlanInvestment":0.0,"proPlanFixedAssetsInvestment":0.0,"planFixedAssetsInvestment":0.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"立足服务云南、全国和南亚东南亚市场，秉承“安全、绿色、智慧、创新”理念，以数据中心新型基础设施建设为核心，配套产业中心、运营中心、研发中心等，打造“云南数字经济发展基础设施核心基地、云南省数字经济创新发展试验区、辐射带动南亚东南亚的数字经济聚集区”，项目建设用地位于昆明呈贡信息产业园区万溪核心区KCC2019-1号地块，净用地面积76327.35平方米（114.49亩），总建筑面积约17万平方米，计划总投资17.84亿元。","expectedSalesCompletion":0.0,"expectedTaxCompletion":0.0,"expectedSales":0.0,"expectedTax":0.0,"projectProgress":"项目已取得项目地块不动产权登记证、区发改委可研报告批复、建设用地规划许可证、环境影响备案表、滇池流域开发建设项目征求意见函、排水咨询意见、场地防震选址意见书、矿产压覆备案、节水措施审批意见、水土保持方案批复，内部立项已通过。工程建设规划许可已完成发证前公示，待发证。当前正在推进初步设计工作。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 11:46:02","isDel":0,"progress":"23.01","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":105,"projectType":0,"name":"“云上云”数字经济实验示范园区项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2021-01-01 00:00:00","endTime":"2022-01-01 00:00:00","buildingLocation":"--","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"云南云上云信息化有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":180000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"用地面积159亩，计划总投资18.1亿元。建设内容为：围绕云南省五大基础数据库、十五个重点行业大数据的研究、开发、应用、交易以及行业大数据产业培育为重点，按照科研开发区、会展交易区、综合配套区三大功能区域进行建设。","projectProgress":"项目已于2017年9月14日完成土地竞拍，取得项目投资备案证，完成项目可研报告编制服务招标工作，正在开展环评、水保方案的编制。预计2020年年底开工建设，2022年竣工投入运营。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 13:43:26","isDel":0,"progress":"22.95","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":24,"projectType":0,"name":"丽江华坪隆基单晶硅棒生产线建设（三期）","codeAndName":"39","industryCode":"39","cityCode":"530700","areaCode":"530723","startTime":"2021-01-01 00:00:00","endTime":"2021-10-01 00:00:00","buildingLocation":"华坪县石龙坝清洁载能产业园","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"丽江隆基硅材料有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":150000.0,"bankLoan":0.0,"planTotalInvestment":0.0,"yearPlanInvestment":15.0,"proPlanFixedAssetsInvestment":0.0,"planFixedAssetsInvestment":0.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"拟租赁标准厂房及配套建筑设施，购置安装满足年产10GW单晶硅棒产能所需的单晶炉、配套的切方、抛光等机械加工设备、检测设备，配套建设给排水、供配电、环保处理等公用工程设施。","projectProgress":"该项目正在开展地勘等工作。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 09:56:08","isDel":0,"progress":"30.66","cityName":"丽江市","areaName":"华坪县","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":88,"projectType":0,"name":"总部经济入驻","codeAndName":"39","industryCode":"39","cityCode":"532900","areaCode":"532901","startTime":"2021-01-01 00:00:00","endTime":"2021-12-31 00:00:00","buildingLocation":"大理经开区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"宗盛科技","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":150000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"宗盛科技将杭州总部搬迁至大理白族自治州，同时将宗盛科技全国运营中心、专利中心、制造中心、结算中心搬迁至大理白族自治州。","projectProgress":"暂无","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 11:52:53","isDel":0,"progress":"23.01","cityName":"大理白族自治州","areaName":"大理市","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":37,"projectType":2,"name":"云南能投数字经济（呈贡）产业园","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2020-05-01 00:00:00","endTime":"2022-08-01 00:00:00","buildingLocation":"呈贡区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"云南省能源投资集团有限公司","isGoPublic":1,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":140000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"产业园规划建设数据中心、研发中心、运营中心和检测中心。主要承载“云能云”数据中心、云南省绿色能源大数据中心、云南省互联网数据中心和云南省工业大数据中心等。项目总用地面积150.08亩，净用地面积114.53亩。","projectProgress":"项目于2019年8月15日完成供地，项目可研报告已通过专家评审，并已在区发改局完成立项；已取得不动产登记证、可研报告批复、建设用地规划许可证、环境影响备案表、滇池流域开发建设项目征求意见函、排水咨询意见、场地防震选址意见书、矿产压覆备案、节水措施审批意见、水土保持方案批复，规划设计方案已通过市规委会审议，内部立项已通过集团一届第二十二次董事会决策，并取得集团批复；建设工程规划许可证已完成公示，待发证。预计2020年10月份开工建设，2022年竣工投入运营。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:32:01","isDel":0,"progress":"39.98","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":36,"projectType":0,"name":"智慧医疗中心项目","codeAndName":"39","industryCode":"39","cityCode":"532900","areaCode":"532901","startTime":"2021-01-28 11:05:51","endTime":"2021-01-28 11:05:56","buildingLocation":"--","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"中软（唐山）","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":135000.0,"planTotalInvestment":0.0,"yearPlanInvestment":0.0,"proPlanFixedAssetsInvestment":0.0,"planFixedAssetsInvestment":0.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"全民人口健康信息平台、公共卫生服务管理系统、智慧滇西APP等","expectedSalesCompletion":0.0,"expectedTaxCompletion":0.0,"expectedSales":0.0,"expectedTax":0.0,"linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:28:21","isDel":0,"progress":"100.00","cityName":"大理白族自治州","areaName":"大理市","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":38,"projectType":2,"name":"网龙VR文创产业园项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2020-12-01 00:00:00","endTime":"2023-01-01 00:00:00","buildingLocation":"呈贡区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"网龙网络控股有限公司、国药研究院","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":126000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"用地面积80亩，计划总投资12.6亿元。建设内容与国药研究院合作建设VR+医疗实训基地，建设网龙VR+文创产业园。","projectProgress":"昆明市人民政府与网龙公司于2018年7月15日签订了战略框架协议，于2018年11月5日签订了合作协议。正在开展土地供应二勘工作，预计2020年3月底完成供地，力争2020年年底开工建设，2022年竣工。 ","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:33:51","isDel":0,"progress":"15.09","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":52,"projectType":3,"name":"昆明电子商务产业园项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530102","startTime":"2016-09-01 00:00:00","endTime":"2020-06-01 00:00:00","buildingLocation":"高新区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"昆明十一物流有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":120000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"建设以电子商务与GPS西药仓储、配送及数据处理为主的综合性现代化电子商务服务园区。","projectProgress":"一期工程现已完工并投入使用，办理竣工验收备案。二期项目正开展规划设计招投标工作。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 11:00:44","isDel":0,"progress":"121.68","cityName":"昆明市","areaName":"五华区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":55,"projectType":3,"name":"OLED微显示器件生产线项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530111","startTime":"2018-06-01 00:00:00","endTime":"2021-12-01 00:00:00","buildingLocation":"空港经济区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"昆明京东方显示技术有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":115000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"建设OLED微显示器件生产线，主要包括生产厂房及生产辅助设施，项目达产后将实现年产100万片OLED微显示器件的生产能力。","projectProgress":"已投产。目前处于批量生产交付、持续市场开拓阶段。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 11:05:52","isDel":0,"progress":"80.39","cityName":"昆明市","areaName":"官渡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":40,"projectType":2,"name":"云南数字经济产业园创新中心项目（云南省5G产业园配套服务项目）","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2020-12-01 00:00:00","endTime":"2022-12-01 00:00:00","buildingLocation":"--","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"昆明市智慧城市建设投资有限公司","isGoPublic":0,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":104000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目选址于呈贡信息产业园区一期2号地块，面积约53亩，容积率为小于等于3.0，用地性质为商务用地，总投资概算约7.94亿元，主要建设内容为5G科研办公、企业服务中心、5G科技展览中心、专家楼及商务配套等相关附属设施配套工程。","projectProgress":"项目建设方案已获市委、市政府批准，《项目监管服务协议》已获区政府常务会审批通过，储备方案已报至市政府审批，预计7月下旬可挂牌出让。正在配合园区管委会开展土地供地竞买工作，前期策划工作正在稳步推进。预计2020年年底开工建设，2022年竣工投入运营。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:36:12","isDel":0,"progress":"15.73","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":41,"projectType":0,"name":"北斗+产业融合创新服务平台","codeAndName":"39","industryCode":"39","cityCode":"530300","areaCode":"530301","startTime":"2021-01-28 11:05:43","endTime":"2021-01-30 11:05:47","buildingLocation":"曲靖经开区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"曲靖经济技术开发区数字经济局","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":100000.0,"planTotalInvestment":0.0,"yearPlanInvestment":0.0,"proPlanFixedAssetsInvestment":0.0,"planFixedAssetsInvestment":0.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"1.建设“北斗+”位置物联服务平台，提供北斗位置服务、“北斗+”应用开发等北斗生态内的服务能力。2.建设“北斗+”产业融合创新服务平台，提供跨行业部门产业融合服务能力，向众多“北斗+”应用提供基础服务，加速北斗在工业互联网、烟草、水电站（水库）形变监测、智慧矿山、智慧消防、自然灾害监测预警与防范、智慧旅游等场景的应用。","expectedSalesCompletion":0.0,"expectedTaxCompletion":0.0,"expectedSales":0.0,"expectedTax":0.0,"projectProgress":"可研已编制完成，\n拟申请专项债。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:36:23","isDel":0,"progress":"1900.00","cityName":"曲靖市","areaName":"市辖区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":42,"projectType":2,"name":"福建睿能西南总部基地项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530114","startTime":"2020-11-01 00:00:00","endTime":"2022-01-01 00:00:00","buildingLocation":"呈贡区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"福建睿思特科技股份有限公司","isGoPublic":0,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":100000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"用地面积30亩，计划总投资10亿元。建设内容：睿思特西南总部基地、物联网、智能制造等。","projectProgress":"018年7月13日，市政府与睿思特公司签署了《战略框架合作协议》。项目用地于2019年7月17日公示挂牌出让，8月15日项目方未报名摘牌，放弃拿地，致使土地流拍。现项目方还未确定土地购置的意向和投资计划。预计2020年9月份重新启动土地供应工作。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:39:44","isDel":0,"progress":"33.96","cityName":"昆明市","areaName":"呈贡区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":116,"projectType":0,"name":"园区信息化改造及新型智慧园区建设项目","codeAndName":"39","industryCode":"39","cityCode":"530300","areaCode":"530301","startTime":"2021-04-01 00:00:00","endTime":"2023-04-01 00:00:00","buildingLocation":"曲靖经开区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"曲靖经济技术开发区数字经济局","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":90000.0,"bankLoan":0.0,"planTotalInvestment":0.0,"yearPlanInvestment":0.0,"proPlanFixedAssetsInvestment":0.0,"planFixedAssetsInvestment":0.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"计划投资9亿元对数字经济园区进行信息化改造及新型智慧园区建设，包括：1.智慧园区信息基础设施建设。建设通信管网、交换设备等基础网络，改造升级园区骨干网络，在重点区域铺设物联网节点，推进硬件设施改造，为南海子绿色水电硅产业园和数据中心产业园、西城工业园区新能源新材料产业园和生物医药产业园提供广泛的联结和计算能力。2.智慧园区管理平台建设。搭建智慧园区管理平台，通过数据计算和数据治理，推动AI智能安防、智能巡检、人机协同、企业画像、智慧水务、环境监测等应用场景落地。3.智慧园区服务平台建设。以服务园区企业为导向，利用大数据、云计算等数字技术，为企业提供集政务服务、智慧党建、共享展厅、教育培训、辅助决策、产能共享等为一体的服务平台。","projectProgress":"正在开展前期工作。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 14:14:32","isDel":0,"progress":"--","cityName":"曲靖市","areaName":"市辖区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":70,"projectType":2,"name":"曲靖会泽数字经济产业园建设项目","codeAndName":"39","industryCode":"39","cityCode":"530300","areaCode":"530326","startTime":"2020-05-01 00:00:00","endTime":"2022-06-01 00:00:00","buildingLocation":"会泽县","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"会泽县数字经济产业发展有限公司","ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":80000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目占地面积16229㎡，规划建筑总面积约13万㎡，拟规划6栋百米高层建筑，临抚军街建设数字产业园区，形成创新产业集群新地标。以“数字会泽”为主题，以八中心(大数据中心、电子商务公共服务中心、数字农业农村服务中心、智慧城市运营中心、智慧旅游服务中心、智慧教育服务中心、智慧健康服务中心、智慧仓储服务中心)、三基地（数字经济产业集聚基地、青年双创孵化基地、双创人才培训基地）、两区（新零售业街区、数字生活示范社区）、一院（数字经济产业院）、一馆（“数字会泽”VR全景体验馆）为重点建设任务，以大数据、云计算、物联网、人工智能为创新驱动，以“数字经济产业办公区、新零售商业街区、数字生活示范社区”三大物理空间为载体，构建线上线下结合、三产融合发展的数字经济产业生态圈。","projectProgress":"基础工程建设正在进行。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 11:35:41","isDel":0,"progress":"43.18","cityName":"曲靖市","areaName":"会泽县","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"},{"id":28,"projectType":0,"name":"“南天.智云”项目","codeAndName":"39","industryCode":"39","cityCode":"530100","areaCode":"530103","startTime":"2021-01-28 11:06:17","endTime":"2021-01-31 11:06:21","buildingLocation":"盘龙区","recordCertificateNo":"--","referenceNumber":"--","ownedEnterprise":"南天电子信息科技有限公司","isGoPublic":1,"ownershipNature":"--","proposedInviteUnit":"--","proposedInvestmentUnit":"--","inviteInvestmentUnit":"--","investmentUnit":"--","proTotalInvestment":60000.0,"completedInvestment":0.0,"grandTotalInvestment":0.0,"constructionContent":"项目总建筑面积24万平方米，容积率9、建筑高度220米。项目以智能计算为战略发展核心，打造云南首个“三云 ” 体系智慧型创新业产生态圈实现立足云南、辐射东亚的信息产业聚集高地。","linkman":"--","contactNumber":"18589111111","gmtCreate":"2021-01-28 10:07:15","isDel":0,"progress":"1425.00","cityName":"昆明市","areaName":"盘龙区","industryName":"计算机、通信和其他电子设备制造业","investmentProgress":"0.00"}];
        let html = "";
        for (let i = 0; i < data.length; i++) {
            html += `
                <tr>
                <td>${data[i].name}</td>
                <td>${data[i].ownedEnterprise}</td>
                <td>${data[i].proTotalInvestment}</td>
                </tr>`
                
                // <td>
                //     <div class="container">
                //         <div class="skills" style="width:${data[i].investmentProgress}%">${data[i].investmentProgress}%</div>
                //     </div></td>
        }
        document.querySelector('.settbody').innerHTML = html;


    }
    setTable();

    function echartsMap() {
        var data1 = [
            {name: '大理', value: 0},
            {name: '昭通', value: 1},
            {name: '玉溪', value: 7},
            {name: '昆明', value: 24},
            {name: '红河', value: 7},
            {name: '迪庆', value: 0},
            {name: '德宏', value: 1},
            {name: '保山', value: 5},
            {name: '西双版纳', value: 0},
            {name: '曲靖', value: 2},
            {name: '丽江', value: 1},
            {name: '文山', value: 7},
            {name: '怒江', value: 0},
            {name: '普洱', value: 0},
            {name: '临沧', value: 1},
            {name: '楚雄', value: 0},
        ]
        var data2 = [
            {name: '大理', value: 11},
            {name: '昭通', value: 8},
            {name: '玉溪', value: 33},
            {name: '昆明', value: 99},
            {name: '红河', value: 30},
            {name: '迪庆', value: 0},
            {name: '德宏', value: 0},
            {name: '保山', value: 8},
            {name: '西双版纳', value: 28},
            {name: '曲靖', value: 40},
            {name: '丽江', value: 1},
            {name: '文山', value: 4},
            {name: '怒江', value: 0},
            {name: '普洱', value: 22},
            {name: '临沧', value: 7},
            {name: '楚雄', value: 15},
        ]
        var data3 = [
            {name: '大理', value: 85},
            {name: '昭通', value: 12},
            {name: '玉溪', value: 79},
            {name: '昆明', value: 151},
            {name: '红河', value: 106},
            {name: '迪庆', value: 8},
            {name: '德宏', value: 32},
            {name: '保山', value: 93},
            {name: '西双版纳', value: 32},
            {name: '曲靖', value: 124},
            {name: '丽江', value: 14},
            {name: '文山', value: 31},
            {name: '怒江', value: 0},
            {name: '普洱', value: 48},
            {name: '临沧', value: 81},
            {name: '楚雄', value: 96},
        ]
        var data4 = [
            {name: '大理', value: 21},
            {name: '昭通', value: 23},
            {name: '玉溪', value: 22},
            {name: '昆明', value: 54},
            {name: '红河', value: 41},
            {name: '迪庆', value: 4},
            {name: '德宏', value: 27},
            {name: '保山', value: 15},
            {name: '西双版纳', value: 6},
            {name: '曲靖', value: 46},
            {name: '丽江', value: 6},
            {name: '文山', value: 28},
            {name: '怒江', value: 8},
            {name: '普洱', value: 9},
            {name: '临沧', value: 9},
            {name: '楚雄', value: 30},
        ]
        var data5 = [
            {name: '大理', value: 58},
            {name: '昭通', value: 79},
            {name: '玉溪', value: 116},
            {name: '昆明', value: 198},
            {name: '红河', value: 126},
            {name: '迪庆', value: 5},
            {name: '德宏', value: 34},
            {name: '保山', value: 59},
            {name: '西双版纳', value: 27},
            {name: '曲靖', value: 281},
            {name: '丽江', value: 31},
            {name: '文山', value: 67},
            {name: '怒江', value: 12},
            {name: '普洱', value: 44},
            {name: '临沧', value: 40},
            {name: '楚雄', value: 99},
        ]
        var data6 = [
            {name: '大理', value: 2},
            {name: '昭通', value: 0},
            {name: '玉溪', value: 5},
            {name: '昆明', value: 5},
            {name: '红河', value: 2},
            {name: '迪庆', value: 0},
            {name: '德宏', value: 0},
            {name: '保山', value: 2},
            {name: '西双版纳', value: 0},
            {name: '曲靖', value: 3},
            {name: '丽江', value: 0},
            {name: '文山', value: 1},
            {name: '怒江', value: 0},
            {name: '普洱', value: 0},
            {name: '临沧', value: 0},
            {name: '楚雄', value: 1},
        ]
        var data7 = [
            {name: '大理', value: 12},
            {name: '昭通', value: 0},
            {name: '玉溪', value: 3},
            {name: '昆明', value: 18},
            {name: '红河', value: 1},
            {name: '迪庆', value: 0},
            {name: '德宏', value: 5},
            {name: '保山', value: 0},
            {name: '西双版纳', value: 0},
            {name: '曲靖', value: 11},
            {name: '丽江', value: 0},
            {name: '文山', value: 1},
            {name: '怒江', value: 0},
            {name: '普洱', value: 0},
            {name: '临沧', value: 1},
            {name: '楚雄', value: 3},
        ]
        var data8 = [
            {name: '大理', value: 11},
            {name: '昭通', value: 1},
            {name: '玉溪', value: 12},
            {name: '昆明', value: 17},
            {name: '红河', value: 15},
            {name: '迪庆', value: 1},
            {name: '德宏', value: 2},
            {name: '保山', value: 5},
            {name: '西双版纳', value: 2},
            {name: '曲靖', value: 12},
            {name: '丽江', value: 1},
            {name: '文山', value: 4},
            {name: '怒江', value: 1},
            {name: '普洱', value: 3},
            {name: '临沧', value: 5},
            {name: '楚雄', value: 7},
        ]
        var data9 = [
            {name: '大理', value: 8},
            {name: '昭通', value: 1},
            {name: '玉溪', value: 55},
            {name: '昆明', value: 128},
            {name: '红河', value: 12},
            {name: '迪庆', value: 0},
            {name: '德宏', value: 1},
            {name: '保山', value: 5},
            {name: '西双版纳', value: 1},
            {name: '曲靖', value: 36},
            {name: '丽江', value: 1},
            {name: '文山', value: 1},
            {name: '怒江', value: 0},
            {name: '普洱', value: 0},
            {name: '临沧', value: 1},
            {name: '楚雄', value: 13},
        ]
        var data10 = [
            {name: '大理', value: 6},
            {name: '昭通', value: 3},
            {name: '玉溪', value: 10},
            {name: '昆明', value: 49},
            {name: '红河', value: 14},
            {name: '迪庆', value: 1},
            {name: '德宏', value: 5},
            {name: '保山', value: 14},
            {name: '西双版纳', value: 1},
            {name: '曲靖', value: 10},
            {name: '丽江', value: 3},
            {name: '文山', value: 12},
            {name: '怒江', value: 0},
            {name: '普洱', value: 5},
            {name: '临沧', value: 2},
            {name: '楚雄', value: 20},
        ]
        var data11 = [
            {name: '大理', value: 35},
            {name: '昭通', value: 8},
            {name: '玉溪', value: 60},
            {name: '昆明', value: 120},
            {name: '红河', value: 38},
            {name: '迪庆', value: 0},
            {name: '德宏', value: 16},
            {name: '保山', value: 38},
            {name: '西双版纳', value: 10},
            {name: '曲靖', value: 35},
            {name: '丽江', value: 0},
            {name: '文山', value: 15},
            {name: '怒江', value: 0},
            {name: '普洱', value: 26},
            {name: '临沧', value: 25},
            {name: '楚雄', value: 30},
        ]
        echartsOptions('yunnanMap1',data1)
        echartsOptions('yunnanMap2',data2)
        echartsOptions('yunnanMap3',data3)
        echartsOptions('yunnanMap4',data4)
        echartsOptions('yunnanMap5',data5)
        echartsOptions('yunnanMap6',data6)
        echartsOptions('yunnanMap7',data7)
        echartsOptions('yunnanMap8',data8)
        echartsOptions('yunnanMap9',data9)
        echartsOptions('yunnanMap10',data10)
        echartsOptions('yunnanMap11',data11)
    }

    function echartsOptions(id, data) {

        // $.ajax({
            // type: "GET",
            // url: "http://59.216.193.7:80/dv/bigScreen/getIndustryEconomyMap",
            // success: function (res) {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById(id));
                option = {
                    tooltip: {
                        trigger: 'item',
                    },
                    toolbox: {
                        show: false,
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
                            // color: ['#f2f2f2', '#fff2cc', '#ffd966', "#c65911", '#833c0c', ] 
                        }
                    },
                    dataRange: {
                        x: 'left',
                        y: 'bottom',
                        left: 50,
                        itemWidth: 50,
                        itemHeight: 50,
                        bottom: 50,
                        textStyle: {
                            fontSize: 32,
                            color: '#fff'
                        },
                        splitList: [{
                                start: 200,
                                label: '>200',
                                color: '#833c0c'
                            },
                            {
                                start: 100,
                                end: 200,
                                label: "100-200",
                                color: '#c65911'
                            },
                            {
                                start: 50,
                                label: "50-100",
                                end: 100,
                                color: '#ffd966'
                            },
                            {
                                start: 10,
                                label: "10-50",
                                end: 50,
                                color: '#fff2cc'
                            },
                            {
                                end: 10,
                                label: "<10",
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
                        data: data,
                        symbolSize: function (val) {
                            return val[2] / 15;
                        },
                        label: {
                            normal: {
                                formatter: function(e) {
                                    if(!e.value) {
                                        return e.name + '0'
                                    } else {
                                        return e.name + e.value
                                    }
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
        // });
    // }

})