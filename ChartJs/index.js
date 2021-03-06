const lineChartContainer = "lineChart"
$("#content").load("template.html");

function init() {

    // create chart object
    const chart = new CanvasJS.Chart(lineChartContainer, _getOptions())
    chart.render();


    function _getOptions() {
        return {
            legend: {

                itemclick: function (e) {
                    console.log(e.dataSeries.legendText = "clicked")
                    chart.render();
                }

            },
            title: _getTitle(),
            data: [_getData("stackedColumn", "eth"), _getData("line", "btc")]
        }

        function _getTitle() {
            return { text: "Currency exchange" }
        }

        function _getData(t, c) {
            return {
                showInLegend: true,
                legendText: c,
                type: t,
                dataPoints: generateData()
            }
        }
    }

}

function generateData() {
    let data = []
    for (let index = 0; index < 30; index++) {
        data.push({ x: new Date(2022, 00, index), y: Math.ceil(Math.random() * 500) })
    }
    return data
}

init();


