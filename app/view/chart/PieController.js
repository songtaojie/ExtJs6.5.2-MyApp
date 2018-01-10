Ext.define('MyApp.view.chart.PieController',{
    extend:'Ext.app.ViewController',
    alias:'controller.chart-pie',
    onSeriesTooltipRender:function(tooltip, record, item){
        var total = record.store.sum('spent');
        var value = parseFloat(record.get('spent'));
        var percent = Ext.Number.toFixed(value*100/total,2);
        tooltip.setHtml(record.get('cat')+':'+percent+'%');
    }
});