Ext.define('MyApp.view.chart.Bar',{
    extend:'Ext.chart.CartesianChart',
    requires : [ 
        'Ext.chart.axis.Category',  
        'Ext.chart.series.Bar3D',  
        'Ext.chart.axis.Numeric',  
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.axis.Category3D',
        'Ext.chart.theme.Muted'
    ],
    controller:'barcontroller',
    xtype:'chart-bar',
    height : 500, 
    width:800, 
    padding : 10,  
    legend : {  
        docked : 'bottom'  
    },  
    insetPadding : {  
        top : 60,  
        bottom : 0,  
        left : 20,  
        right : 40  
    },  
    store : {  
        type : 'expensebymonth'  
    }, 
    animation: Ext.isIE8 ? false : {
        easing: 'backOut',
        duration: 500
    }, 
    theme: {
        type: 'muted'
    },
    axes : [ {  
        type : 'numeric',  
        position : 'left',  
        grid : true,  
        minimum : 0,  
        title : {  
            text : '开支',  
            fontSize : 16 ,
        }  
    }, {  
        type : 'category3d',  
        position : 'bottom',  
        title : {  
            text : '月份',  
            fontSize : 16,
        }, 
        label : {  
            font : 'bold Arial',
            fontWeight:'bold',  
            rotate : {  
            degrees : 300  
            }  
        },  
        renderer : 'onAxisRenderer'
    } ],  
    series : [ {  
        type : 'bar3d',  
        xField : 'date',  
        stacked : false,  
        title : [ 'Total' ],  
        yField : [ 'total' ],
        highlightCfg: {
            saturationFactor: 2
        }, 
        label: {
            field: 'total',
            display: 'insideEnd',
            renderer: 'onSeriesLabelRenderer'
        },
        tooltip: {
            trackMouse: true,
            renderer: 'onTooltipRender'
        }
    } ],  
    sprites : [ {  
        type : 'text',  
        text : '月费用',  
        font : '20px Helvetica',  
        width : 120,  
        height : 35,  
        x : 60,  
        y : 40 
    } ]  
})