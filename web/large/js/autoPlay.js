$(function () {
    //自动轮播
    // autoPlay();
    function autoPlay() {
        setInterval(() => {
            var flag = "";
            if (window.location.href.split('?')[1]) {
                flag = window.location.href.split('?')[1].split('=')[1];
            }
            if (!flag) {
                flag = 0
            }
            if (flag == 2) {
                window.location = "/web/large/index.html?flag=0"
            }
            if (flag == 0) {
                window.location = "/web/large/html/industry.html?flag=1"
            }
            if (flag == 1) {
                window.location = "/web/large/html/data.html?flag=2"
            }
            if (flag == 3) {
                window.location = "/web/large/html/industry-overview.html?flag=3"
            }
            if (flag == 4) {
                window.location = "/web/large/html/project.html?flag=4"
            }
        }, 5000)
    }

    $('.economy').on('click', () => {
        window.location = "/web/large/index.html"
    })
    $('.industry').on('click', () => {
        window.location = "/web/large/html/industry.html"
    })
    $('.data').on('click', () => {
        window.location = "/web/large/html/data.html"
    })
    $('.industry-overview').on('click', () => {
        window.location = "/web/large/html/industry-overview.html"
    })
    $('.project').on('click', () => {
        window.location = "/web/large/html/project.html"
    })

});