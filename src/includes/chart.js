const options = {
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

module.exports = options