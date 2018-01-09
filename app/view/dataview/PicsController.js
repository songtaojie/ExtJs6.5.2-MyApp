Ext.define('MyApp.view.dataview.PicsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pics',
    views: ['MyApp.view.dataview.Pics'],
    requires: ['MyApp.store.Pics','MyApp.store.Albums'],
    
    onNodeSelect: function(node, rec, item, index, e)
    { 
       var albums = [];
       albums.push(rec.id);
       rec.childNodes.forEach(function(item){
           albums.push(item.id);
       });
       
       Ext.getStore('pics').filter({
            property: 'albumId',
            operator: 'in',
            value   : albums
        }); 
    }
});


