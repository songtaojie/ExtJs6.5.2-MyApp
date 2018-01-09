
Ext.define('MyApp.view.chart.Climate', {  
    extend:'Ext.panel.Panel',
    //layout : 'hbox',  
    xtype: 'column-basicChart',
    controller: 'column-basic',
    requires:[
        'MyApp.store.Climate',
        'Ext.chart.interactions.ItemEdit',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar'
    ],
    items: [{
        xtype:'container',
        layout:'hbox',
        items:[
            {
                xtype:'textfield'
            },{
                xtype:'container',
                layout:'fit',
                width:500,
                height : 500, 
                items:[{
                    xtype: 'chart',
                    reference: 'chart',
                    flex:1,
                    captions: {
                        title: {
                            text: '气候数据',
                            align: 'left'
                        }
                    },
                    store: {
                        type: 'climate'
                    },
                    interactions: {
                        type: 'itemedit',
                        tooltip: {
                            renderer: 'onEditTipRender'
                        },
                        renderer: 'onColumnEdit'
                    },
                    axes: [{
                        type: 'numeric',
                        position: 'left',
                        minimum: 30,
                        titleMargin: 20,
                        title: {
                            text: '温度 °F'
                        },
                        listeners: {
                            rangechange: 'onAxisRangeChange'
                        }
                    }, {
                        type: 'category',
                        position: 'bottom'
                    }],
                    animation: Ext.isIE8 ? false : true,
                    series: {
                        type: 'bar',
                        xField: 'month',
                        yField: 'highF',
                        style: {
                            minGapWidth: '20px',
                        },
                        highlight: {
                            strokeStyle: 'black',
                            fillStyle: 'gold'
                        },
                        label: {
                            field: 'highF',
                            display: 'insideEnd',
                            renderer: 'onSeriesLabelRender'
                        }
                    },
                    listeners: {
                        afterrender: 'onAfterRender',
                        beginitemedit: 'onBeginItemEdit',
                        enditemedit: 'onEndItemEdit'
                    }
                }]
            }]
    }]
});  
  