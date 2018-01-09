Ext.define('MyApp.model.Climate',{
    extend:'Ext.data.Model',
    fields: [
        'month',
        'high',
        'low',
        {
            name: 'highF',
            calculate: function (data) {
                return data.high * 1.8 + 32;
            }
        },
        {
            name: 'lowF',
            calculate: function (data) {
                return data.low * 1.8 + 32;
            }
        }
    ]
});
Ext.define('MyApp.store.Climate', {  
    extend : 'Ext.data.Store',  
    alias: 'store.climate', 
    fields: [
        'month',
        'high',
        'low',
        {
            name: 'highF',
            calculate: function (data) {
                return data.high * 1.8 + 32;
            }
        },
        {
            name: 'lowF',
            calculate: function (data) {
                return data.low * 1.8 + 32;
            }
        }
    ],  
    data : [ 
        { month: '一月', high: 14.7, low: 5.6  },
        { month: '二月', high: 16.5, low: 6.6  },
        { month: '三月', high: 18.6, low: 7.3  },
        { month: '四月', high: 20.8, low: 8.1  },
        { month: '五月', high: 23.3, low: 9.9  },
        { month: '六月', high: 26.2, low: 11.9 },
        { month: '七月', high: 27.7, low: 13.3 },
        { month: '八月', high: 27.6, low: 13.2 },
        { month: '九月', high: 26.4, low: 12.1 },
        { month: '十月', high: 23.6, low: 9.9  },
        { month: '十一月', high: 17  , low: 6.8  },
        { month: '十二月', high: 14.7, low: 5.8  }
    ] ,
    counter:0,
    generateData: function () {
        var data = this.config.data,
            i, result = [],
            temp = 15,
            min = this.counter % 2 === 1 ? 0 : temp;
        for (i = 0; i < data.length; i++) {
            result.push({
                month: data[i].month,
                high: min + temp + Math.random() * temp,
                low: min + Math.random() * temp
            });
        }
        this.counter++;
        return result;
    }, 
    refreshData: function () {
        this.setData(this.generateData());
    }
  });  
// Ext.define('MyApp.model.Population', {  
//     extend : 'Ext.data.Model',  
//     fields : [ 'year', 'population' ]  
//   });  
     
//   Ext.define('MyApp.store.Population', {  
//     extend : 'Ext.data.Store',  
//     storeId : 'population',  
//     model : 'MyApp.model.Population',  
//     data : [{  
//       "year" : "1610",  
//       "population" : 350  
//     },{  
//       "year" : "1650",  
//       "population" : 50368  
//     },{  
//       "year" : "1700",  
//       "population" : 250888  
//     },{  
//       "year" : "1750",  
//       "population" : 1170760  
//     },{  
//       "year" : "1800",  
//       "population" : 5308483  
//     },{  
//       "year" : "1900",  
//       "population" : 76212168  
//     },{  
//       "year" : "1950",  
//       "population" : 151325798  
//     },{  
//       "year" : "2000",  
//       "population" : 281421906  
//     },{  
//       "year" : "2010",  
//       "population" : 308745538  
//     }]  
//   });  
//   var store = Ext.create("MyApp.store.Population");  