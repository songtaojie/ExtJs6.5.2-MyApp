Ext.define('Pic', {
    extend: 'Ext.data.Model',
    fields: ['Id', 'Url', 'AlbumId']
});

Ext.define('MyApp.store.Pics', {
    extend: 'Ext.data.Store',
    storeId: 'pics',
    model: 'Pic',
    data:[
        {
            Id: 1,
            Url:"/resources/images/thumbs/1.jpg",
            AlbumId: 200,
        },{
            Id: 2,
            Url:"/resources/images/thumbs/2.jpg",
            AlbumId: 200,
        },{
            Id: 3,
            Url:"/resources/images/thumbs/3.jpg",
            AlbumId: 200,
        },{
            Id: 4,
            Url:"/resources/images/thumbs/4.jpg",
            AlbumId: 400,
        },{
            Id:5,
            Url:"/resources/images/thumbs/7.jpg",
            AlbumId: 300,
        },{
            Id: 7,
            Url:"/resources/images/thumbs/10.jpg",
            AlbumId: 600,
        },{
            Id: 8,
            Url:"/resources/images/thumbs/11.jpg",
            AlbumId: 600,
        },{
            Id: 9,
            Url:"/resources/images/thumbs/12.jpg",
            AlbumId: 600,
        },{
            Id: 10,
            Url:"/resources/images/thumbs/14.jpg",
            AlbumId: 600,
        },{
            Id: 11,
            Url:"/resources/images/thumbs/15.jpg",
            AlbumId: 600,
        },{
            Id: 12,
            Url:"/resources/images/thumbs/16.jpg",
            AlbumId: 800,
        },{
            Id: 13,
            Url:"/resources/images/thumbs/17.jpg",
            AlbumId: 600,
        },{
            Id: 14,
            Url:"/resources/images/thumbs/18.jpg",
            AlbumId: 600,
        },{
            Id: 15,
            Url:"/resources/images/thumbs/19.jpg",
            AlbumId: 600,
        },{
            Id: 16,
            Url:"/resources/images/thumbs/20.jpg",
            AlbumId: 200,
        },{
            Id: 17,
            Url:"/resources/images/thumbs/21.jpg",
            AlbumId: 400,
        },{
            Id: 18,
            Url:"/resources/images/thumbs/22.jpg",
            AlbumId: 400,
        },{
            Id: 19,
            Url:"/resources/images/thumbs/23.jpg",
            AlbumId: 200,
        }
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
    
    
});
var pics = Ext.create('MyApp.store.Pics')
pics.load();
