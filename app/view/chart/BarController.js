Ext.define('MyApp.view.chart.BarController',{
    extend:'Ext.app.ViewController',
    alias:'controller.barcontroller',
    onAxisRenderer:function(axis,date,item) { 
        return [ "一月", "二月", "三月", "四月", "五月" ][date.getMonth()];  
    } , 
    onSeriesLabelRenderer:function (v) {
        return Ext.util.Format.number(v, '0,000');
    },
    onTooltipRender:function (tooltip, record, item) {
        tooltip.setHtml(record.get('date').getMonth() +1+ '月: ' +
            Ext.util.Format.number(record.get('total'), '0,000'));
    },
});