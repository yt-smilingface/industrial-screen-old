$(function () {
    echarts_1();
    echarts_4();
    echarts_31();
    echarts_33();
    echarts_34();
    menu();
    // echarts_6();


    //大屏3 左边1
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            grid: {

                containLabel: true
            },
            color: ['#a5a5a5', '#5b9bd5', '#d8722d'],
            legend: {
                left: 20,
                data: ['国家统计局', '第三方数据', '政务交换数据'],
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                bottom: 0
            },
            series: [{
                type: 'pie',
                center: ['56%', '50%'],
                radius: '60%',
                data: [{
                        value: 21.6,
                        name: '国家统计局'
                    },
                    {
                        value: 77.9,
                        name: '第三方数据'
                    },
                    {
                        value: 0.4,
                        name: '政务交换数据'
                    }
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                label: {
                    normal: {
                        fontSize: 16,
                        color: 'rgba(255, 255, 255, 1)',
                        formatter(v) {
                            let text = v.name + ':' + v.value + '%';
                            return text.length < 5 ?
                                text :
                                `${text.slice(0,4)}\n${text.slice(4)}`
                        }
                        // formatter: '{b}:{c}: ({d}%)',
                    },

                },

                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                //roseType: 'radius',
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

    //大屏3 左边3
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            dataset: {
                source: [
                    ['amount', 'product'],
                    [102, '网站关停'],
                    [226, '异常任务'],
                    [750, '正常运行'],
                    [907, '采集'],
                    [4058, '数据源'],
                ]
            },
            grid: {
                containLabel: true
            },
            xAxis: {
                name: 'amount',
                axisLabel: {
                    formatter: '{value}个',
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
            yAxis: {
                type: 'category',
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
            },
            series: [{
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                },
                itemStyle: {
                    normal: {
                        color: '#4ba7e1'
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

    //大屏1 右1
    function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#fff'
                    }
                }
            },
            grid: {
                left: '1%',
                right: '1%',

                containLabel: true
            },
            legend: {
                data: ['日服务量'],
                textStyle: {
                    fontSize: 22, //字体大小
                    color: '#ffffff' //字体颜色
                },
                bottom: 0
            },
            xAxis: [{
                type: 'category',
                data: ['12-06', '12-07', '12-08', '12-09', '12-10', '12-11', '12-12', '12-13', '12-14', '12-15', '12-16', '12-17', '12-18', '12-19', '12-20'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#7ECEF4",
                        width: 2,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "#7ECEF4",
                        fontSize: '20',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                //name: '亿元',
                min: 0,
                max: 35,
                interval: 5,
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
            }],
            series: [{
                    name: '日服务量',
                    type: 'line',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            fontSize: 30
                        }
                    },
                    data: [22, 8, 13, 22, 32, 24, 19, 25, 22, 31, 22, 32, 20, 19, 30],
                    areaStyle: {},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            fontSize: 28,
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#4ad2ff'
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

    //大屏1 右2
    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            legend: {
                color: '#fff',
                left: 20,
                data: ['工商信息', 'GDP', "其他", '工业增加值', '固定资产投资', '采矿业'],
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                bottom: 0
            },
            color: ['#70ad47', '#5b9bd5', 'orange', '#a5a5a5', '#ffc000', '#4472c4'],
            series: [{
                type: 'pie',
                radius: ['45%', '56%'],
                data: [{
                        value: 26,
                        name: '工商信息'
                    },
                    {
                        value: 20,
                        name: 'GDP'
                    },
                    {
                        value: 17,
                        name: '其他'
                    },
                    {
                        value: 15,
                        name: '工业增加值'
                    },
                    {
                        value: 11,
                        name: '固定资产投资'
                    },
                    {
                        value: 11,
                        name: '采矿业'
                    },

                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                label: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 17
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
    function echarts_34() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb4'));
        option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                left: 'center',
                data: [],
                textStyle: {
                    color: 'rgba(255,255,255)',
                    fontSize: 24
                },
                bottom: 0
            },
            radar: [{
                indicator: [{
                        text: '食品药品工业处',
                        max: 350
                    },
                    {
                        text: '石化产业处',
                        max: 350
                    }, {
                        text: '厅长',
                        max: 350
                    },

                    {
                        text: '其他',
                        max: 350
                    },
                    {
                        text: '经济运行处',
                        max: 350
                    },
                    {
                        text: '信息化推进处',
                        max: 350
                    },

                    {
                        text: '消费品工业处',
                        max: 350
                    },
                    {
                        text: '装备工业处',
                        max: 350
                    },
                    {
                        text: '原材料工业处',
                        max: 350
                    },

                    {
                        text: '发展规划处',
                        max: 350
                    },
                ],
                center: ['50%', '50%'],
                radius: 130,
                name: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    },
                    formatter(v) {
                        console.log(v);
                        let text = v;
                        return text.length < 3 ?
                            text :
                            `${text.slice(0,3)}\n${text.slice(3)}`
                    }
                },
            }, ],
            series: [{
                    type: 'radar',
                    tooltip: {
                        trigger: 'item'
                    },


                    data: [{
                        value: [0, 341, 0, 0, 0, 0, 0, 0, 0],

                    }]
                },

            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function menu() {
        let arr = ['国民经济核算', '固定资产投资', '国内贸易', '对外贸易', '财政收支', '就业与工资', '人民生活', '价格走势'];
        let i = 0;
        setInterval(() => {
            if (i == 0) {
                document.querySelector('.third-circle-1 span').innerHTML = arr[1];
                document.querySelector('.third-circle-2 span').innerHTML = arr[2];
                document.querySelector('.third-circle-3 span').innerHTML = arr[3];
                document.querySelector('.third-circle-4 span').innerHTML = arr[4];
                document.querySelector('.third-circle-5 span').innerHTML = arr[5];
                document.querySelector('.third-circle-6 span').innerHTML = arr[6];
                document.querySelector('.third-circle-7 span').innerHTML = arr[7];
                document.querySelector('.third-circle-8 span').innerHTML = arr[0];

                document.querySelector('.third-circle-bg').innerHTML = `
               <div class="third-circle-title">固定资产投资</div>
               <div class="third-circle-cont">
                   <ul>
                       <li style="padding-top:40px;">
                           <span>指标量</span>
                           221项
                       </li>
                       <li>
                           <span>数据量</span>
                           12818条
                       </li>
                   </ul>
                   <div class="third-circle-cont-title">主要来源</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">国家统计局、省统计局
                        </li>
                   </ol>
                   <div class="third-circle-cont-title">频度：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">
                           月度、年度
                           </li>
                   </ol>
                   <div class="third-circle-cont-title">地区：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">
                          全国、分省、地州</li>
                   </ol>
                   <div class="third-circle-cont-title">最早时间：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">1980年</li>
                   </ol>

                   <div class="third-circle-cont-title">最新时间：
                   </div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">2020年9月</li>
                   </ol>
                   <div class="third-circle-cont-title">热门指标TOP10</div>
                   <ol>
                       <li>全社会固定资产投资（亿元）</li>
                       <li>第一产业固定资产投资额累计增长(%)</li>
                       <li>第二产业固定资产投资额累计增长(%)</li>
                       <li>第三产业固定资产投资额累计增长(%)</li>
                       <li>国有及国有控股固定资产投资额累计增长(%)
                       </li>
                       <li>全社会固定资产投资中国家预算内资金(亿元)
                       </li>
                       <li> 全社会固定资产投资(亿元)
                       </li>
                     
                   </ol>
               </div>
               `
            }
            if (i == 1) {
                document.querySelector('.third-circle-1 span').innerHTML = arr[2];
                document.querySelector('.third-circle-2 span').innerHTML = arr[3];
                document.querySelector('.third-circle-3 span').innerHTML = arr[4];
                document.querySelector('.third-circle-4 span').innerHTML = arr[5];
                document.querySelector('.third-circle-5 span').innerHTML = arr[6];
                document.querySelector('.third-circle-6 span').innerHTML = arr[7];
                document.querySelector('.third-circle-7 span').innerHTML = arr[0];
                document.querySelector('.third-circle-8 span').innerHTML = arr[1];

                document.querySelector('.third-circle-bg').innerHTML = `
               <div class="third-circle-title">国内贸易</div>
               <div class="third-circle-cont">
                   <ul>
                       <li style="padding-top:40px;">
                           <span>指标量</span>
                           14项
                       </li>
                       <li>
                           <span>数据量</span>
                          700条
                       </li>
                   </ul>
                   <div class="third-circle-cont-title">主要来源</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">国家统计局、省统计局
                           </li>
                   </ol>
                   <div class="third-circle-cont-title">频度：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">
                           月度、季度、年度
                           </li>
                   </ol>
                   <div class="third-circle-cont-title">地区：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">
                           分省、地州</li>
                   </ol>

                   <div class="third-circle-cont-title">最早时间：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">1978年</li>
                   </ol>

                   <div class="third-circle-cont-title">最新时间：
                   </div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">2020年9月</li>
                   </ol>
                   <div class="third-circle-cont-title">热门指标TOP10</div>
                   <ol>
                       <li>社会消费品零售总额累计增长(%)</li>
                       <li>社会商品零售总额(亿元) </li>
                       <li>货物进出口总额(百万美元) </li>
                       <li>社会商品零售总额累计增长（%）</li>
                       
                   </ol>
               </div>
               `


            }
            if (i == 2) {
                document.querySelector('.third-circle-1 span').innerHTML = arr[3];
                document.querySelector('.third-circle-2 span').innerHTML = arr[4];
                document.querySelector('.third-circle-3 span').innerHTML = arr[5];
                document.querySelector('.third-circle-4 span').innerHTML = arr[6];
                document.querySelector('.third-circle-5 span').innerHTML = arr[7];
                document.querySelector('.third-circle-6 span').innerHTML = arr[0];
                document.querySelector('.third-circle-7 span').innerHTML = arr[1];
                document.querySelector('.third-circle-8 span').innerHTML = arr[2];

                document.querySelector('.third-circle-bg').innerHTML = `
                            
                <div class="third-circle-title">对外贸易</div>
                <div class="third-circle-cont">
                    <ul>
                        <li style="padding-top:40px;">
                            <span>指标量</span>
                            21项
                        </li>
                        <li>
                            <span>数据量</span>
                            1071条
                        </li>
                    </ul>
                    <div class="third-circle-cont-title">主要来源</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">国家统计局
                            </li>
                    </ol>
                    <div class="third-circle-cont-title">频度: </div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">
                            年度
                        </li>
                    </ol>
                    <div class="third-circle-cont-title">地区:</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">全国、分省</li>
                    </ol>

                    <div class="third-circle-cont-title">最早时间：</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">1950年</li>
                    </ol>

                    <div class="third-circle-cont-title">最新时间：
                    </div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">2020年</li>
                    </ol>
                    <div class="third-circle-cont-title">热门指标TOP10</div>
                    <ol>
                        <li>进出口总额(人民币)(亿元)</li>
                        <li>出口总额(人民币)(亿元)
                        </li>
                        <li>进出口差额(人民币)(亿元)</li>
                    <li> 经营单位所在地进出口总额(千美元)</li>
                    <li> 境内目的地和货源地进出口总额(千美元)</li>
                    <li> 外商投资企业进出口总额(千美元)</li>
                    <li> 外商投资企业数(户)</li>
                    <li> 外商投资企业投资总额(百万美元)</li>
                    </ol>
                </div>
            `

            }
            if (i == 3) {
                document.querySelector('.third-circle-1 span').innerHTML = arr[4];
                document.querySelector('.third-circle-2 span').innerHTML = arr[5];
                document.querySelector('.third-circle-3 span').innerHTML = arr[6];
                document.querySelector('.third-circle-4 span').innerHTML = arr[7];
                document.querySelector('.third-circle-5 span').innerHTML = arr[0];
                document.querySelector('.third-circle-6 span').innerHTML = arr[1];
                document.querySelector('.third-circle-7 span').innerHTML = arr[2];
                document.querySelector('.third-circle-8 span').innerHTML = arr[3];
                document.querySelector('.third-circle-bg').innerHTML = `
               <div class="third-circle-title">财政收支</div>
               <div class="third-circle-cont">
                   <ul>
                       <li style="padding-top:40px;">
                           <span>指标量</span>
                           47项
                       </li>
                       <li>
                           <span>数据量</span>
                           2256条
                       </li>
                   </ul>
                   <div class="third-circle-cont-title">主要来源</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">国家统计局
                         </li>
                   </ol>
                   <div class="third-circle-cont-title">频度：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">
                           年度
                           </li>
                   </ol>
                   <div class="third-circle-cont-title">地区：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">
                           分省、地州</li>
                   </ol>

                   <div class="third-circle-cont-title">最早时间：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">1950年</li>
                   </ol>

                   <div class="third-circle-cont-title">最新时间：
                   </div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">2019年</li>
                   </ol>
                   <div class="third-circle-cont-title">热门指标TOP10</div>
                   <ol>
                       
                       <li>地方财政一般预算收入(亿元)</li>
                       <li> 地方财政税收收入(亿元)</li>
                       <li>地方财政企业所得税(亿元)</li>
                       <li>地方财政专项收入(亿元)</li>
                       <li>地方财政一般预算支出(亿元)</li>
                       <li>地方财政一般公共服务支出(亿元)</li>
                       <li>地方财政公共安全支出(亿元)</li>
                       <li>地方财政其他支出(亿元)</li>
                     
                   </ol>
               </div>
               `

            }
            if (i == 4) {
                document.querySelector('.third-circle-1 span').innerHTML = arr[5];
                document.querySelector('.third-circle-2 span').innerHTML = arr[6];
                document.querySelector('.third-circle-3 span').innerHTML = arr[7];
                document.querySelector('.third-circle-4 span').innerHTML = arr[0];
                document.querySelector('.third-circle-5 span').innerHTML = arr[1];
                document.querySelector('.third-circle-6 span').innerHTML = arr[2];
                document.querySelector('.third-circle-7 span').innerHTML = arr[3];
                document.querySelector('.third-circle-8 span').innerHTML = arr[4];
                document.querySelector('.third-circle-bg').innerHTML = `
                <div class="third-circle-title">就业与工资</div>
                <div class="third-circle-cont">
                    <ul>
                        <li style="padding-top:40px;">
                            <span>指标量</span>
                            85项
                        </li>
                        <li>
                            <span>数据量</span>
                            5279条
                        </li>
                    </ul>
                    <div class="third-circle-cont-title">主要来源</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">国家统计局
                            </li>
                    </ol>
                    <div class="third-circle-cont-title">频度：</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">年度
                        </li>
                    </ol>
                    <div class="third-circle-cont-title">地区：</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">
                            全国、分省、地州</li>
                    </ol>
 
                    <div class="third-circle-cont-title">最早时间：</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">1978年</li>
                    </ol>
 
                    <div class="third-circle-cont-title">最新时间：
                    </div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">2018年</li>
                    </ol>
                    <div class="third-circle-cont-title">热门指标TOP10</div>
                    <ol>
                        
                        <li>就业人员(万人)</li>
                        <li>第一产业就业人员(万人)</li>
                        <li>第二产业就业人员(万人)</li>
                        <li>第三产业就业人员(万人)</li>
                        <li>城镇单位就业人员(万人)</li>
                        <li>城镇单位就业人员工资总额(亿元)</li>
                        <li>教育城镇单位就业人员工资总额(亿元)</li>
                        <li>在岗职工平均工资(元)</li>
                        
                    </ol>
                </div>
                `


            }
            if (i == 5) {
                document.querySelector('.third-circle-1 span').innerHTML = arr[6];
                document.querySelector('.third-circle-2 span').innerHTML = arr[7];
                document.querySelector('.third-circle-3 span').innerHTML = arr[0];
                document.querySelector('.third-circle-4 span').innerHTML = arr[1];
                document.querySelector('.third-circle-5 span').innerHTML = arr[2];
                document.querySelector('.third-circle-6 span').innerHTML = arr[3];
                document.querySelector('.third-circle-7 span').innerHTML = arr[4];
                document.querySelector('.third-circle-8 span').innerHTML = arr[5];
                document.querySelector('.third-circle-bg').innerHTML = `
                            
                <div class="third-circle-title">人民生活</div>
                <div class="third-circle-cont">
                    <ul>
                        <li style="padding-top:40px;">
                            <span>指标量</span>
                            63项
                        </li>
                        <li>
                            <span>数据量</span>
                            3717条
                        </li>
                    </ul>
                    <div class="third-circle-cont-title">主要来源</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">国家统计局
                            </li>
                    </ol>
                    <div class="third-circle-cont-title">频度：</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">
                            年度、季度
                           </li>
                    </ol>
                    <div class="third-circle-cont-title">地区：</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">
                            全国、分省</li>
                    </ol>

                    <div class="third-circle-cont-title">最早时间：</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">2002年</li>
                    </ol>

                    <div class="third-circle-cont-title">最新时间：
                    </div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">2020年第三季度</li>
                    </ol>
                    <div class="third-circle-cont-title">热门指标TOP10</div>
                    <ol>
                    
                        <li>居民人均可支配收入(元)</li>
                        <li>居民人均可支配收入同比增长(%)</li>
                        <li>城镇居民人均可支配收入(元)</li>
                        <li>城镇居民人均可支配收入同比增长(%)</li>
                        <li>农村居民人均可支配收入(元)</li>
                        <li>农村居民人均可支配收入同比增长(%)</li>
                        <li>居民人均消费支出(元)</li>
                        <li>城镇居民家庭人均其它消费支出(元)</li>
                    </ol>
                </div>
            `


            }
            if (i == 6) {
                document.querySelector('.third-circle-1 span').innerHTML = arr[7];
                document.querySelector('.third-circle-2 span').innerHTML = arr[0];
                document.querySelector('.third-circle-3 span').innerHTML = arr[1];
                document.querySelector('.third-circle-4 span').innerHTML = arr[2];
                document.querySelector('.third-circle-5 span').innerHTML = arr[3];
                document.querySelector('.third-circle-6 span').innerHTML = arr[4];
                document.querySelector('.third-circle-7 span').innerHTML = arr[5];
                document.querySelector('.third-circle-8 span').innerHTML = arr[6];
                document.querySelector('.third-circle-bg').innerHTML = `
               <div class="third-circle-title">价格走势</div>
               <div class="third-circle-cont">
                   <ul>
                       <li style="padding-top:40px;">
                           <span>指标量</span>
                           263项
                       </li>
                       <li>
                           <span>数据量</span>
                           15517条
                       </li>
                   </ul>
                   <div class="third-circle-cont-title">主要来源</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">国家统计局
                          </li>
                   </ol>
                   <div class="third-circle-cont-title">频度：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">
                           年度、季度、月度
                         </li>
                   </ol>
                   <div class="third-circle-cont-title">地区：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">
                           全国、分省</li>
                   </ol>

                   <div class="third-circle-cont-title">最早时间：</div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">1951年</li>
                   </ol>

                   <div class="third-circle-cont-title">最新时间：
                   </div>
                   <ol>
                       <li style="text-align: left;line-height: 50px;">2020年9月</li>
                   </ol>
                   <div class="third-circle-cont-title">热门指标TOP10</div>
                   <ol>
                   
                       <li> 居民消费价格指数(上年=100)</li>
                       <li> 城市居民消费价格指数(上年=100)</li>
                       <li> 农村居民消费价格指数(上年=100)</li>
                       <li> 商品零售价格指数(上年=100)</li>
                       <li> 固定资产投资价格指数(上年=100)</li>
                       <li> 工业生产者出厂价格指数(上年=100)</li>
                       <li> 固定资产投资价格指数(上年=100)</li>
                     
                   </ol>
               </div>
               `

            }
            if (i == 7) {
                document.querySelector('.third-circle-1 span').innerHTML = arr[0];
                document.querySelector('.third-circle-2 span').innerHTML = arr[1];
                document.querySelector('.third-circle-3 span').innerHTML = arr[2];
                document.querySelector('.third-circle-4 span').innerHTML = arr[3];
                document.querySelector('.third-circle-5 span').innerHTML = arr[4];
                document.querySelector('.third-circle-6 span').innerHTML = arr[5];
                document.querySelector('.third-circle-7 span').innerHTML = arr[6];
                document.querySelector('.third-circle-8 span').innerHTML = arr[7];
                document.querySelector('.third-circle-bg').innerHTML = `
                <div class="third-circle-title">国民经济核算</div>
                <div class="third-circle-cont">
                    <ul>
                        <li style="padding-top:40px;">
                            <span>指标量</span>
                            23项
                        </li>
                        <li>
                            <span>数据量</span>
                            2112条
                        </li>
                    </ul>
                    <div class="third-circle-cont-title">主要来源</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">国家统计局
                            频度：季度、年度
                            地区：全国、分省</li>
                    </ol>

                    <div class="third-circle-cont-title">最早时间：</div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">1951年</li>
                    </ol>

                    <div class="third-circle-cont-title">最新时间：
                    </div>
                    <ol>
                        <li style="text-align: left;line-height: 50px;">2020年第二季度</li>
                    </ol>
                    <div class="third-circle-cont-title">热门指标TOP10</div>
                    <ol>
                        <li>地区生产总值累计值(亿元)</li>
                        <li>地区生产总值(亿元)</li>
                        <li>第一产业增加值(亿元)</li>

                        <li>第二产业增加值当季值(亿元)
                        </li>

                        <li> 第三产业增加值当季值(亿元)
                        </li>
                        <li> 农林牧渔业增加值(亿元)</li>
                        <li> 工业增加值(亿元)</li>
                        <li> 居民消费水平(元)</li>
                    </ol>
                </div>
                `


            }
            if (i > 7) {
                i = 0;
            }
            i++;
        }, 5000)

    }
})