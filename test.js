import { Chart, LineController, LineElement, PointElement, LinearScale, Title } from `chart.js`

Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

const chart = new Chart(ctx, {
    type: 'line',
    // data: ...
    options: {
        scales: {
            x: {
            type: 'time',
            display: true,
            title: {
                display: true,
                text: 'Date'
            },
            ticks: {
                major: {
                enabled: true
                },
                color: (context) => context.tick && context.tick.major && '#FF0000',
                font: function(context) {
                if (context.tick && context.tick.major) {
                    return {
                    weight: 'bold'
                    };
                }
                }
            }
            },
            y: {
            display: true,
            title: {
                display: true,
                text: 'value'
            }
            }
        }
    }
      
})
