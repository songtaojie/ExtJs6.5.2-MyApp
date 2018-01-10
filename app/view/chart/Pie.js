Ext.define('MyApp.view.chart.Pie', {  
    extend : 'Ext.chart.PolarChart',  
    requires : [ 
      'Ext.chart.series.Pie3D' 
    ], 
    xtype : 'chart-pie', 
    width:'100%', 
    height : 400, 
    controller:'chart-pie', 
    legend : {  
      type:'sprite',
      docked : 'bottom'  
    }, 
    padding:10, 
    insetPadding : {  
        top : 40,  
        bottom : 40,  
        left : 0,  
        right : 0  
    },  
    listeners : {  
      beforerender : function() {  
        var dateFiter = new Ext.util.Filter({  
          filterFn : function(item) {  
            return item.data.date.getMonth() == 0;  
          }  
        });  
        Ext.getStore('expense').addFilter(dateFiter);  
      }  
    },  
    store : {  
      type : 'expense'  
    },  
    series : [ {  
      type : 'pie3d',  
      donut : 30,  
      thickness : 40,  
      distortion : 0.5,  
      angleField : 'spent',  
      label : {  
        field : 'cat',  
      },
      highlight:{
        margin:40
      },
      tooltip: {
        trackMouse: true,
        renderer: 'onSeriesTooltipRender'
      } 
    }]  
  });  