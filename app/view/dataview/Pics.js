Ext.define('MyApp.view.dataview.Pics', {
    extend: 'Ext.panel.Panel',

    /* Marks these are required classes to be to loaded before loading this view */
    requires: [ 'MyApp.view.dataview.PicsController' ],
   
    xtype: 'app-pics',
    controller: 'pics',

    items: [{
            xtype: 'container',
            layout: 'hbox',
            
            cls: 'pics-list',
            items: [{
                xtype: 'treepanel',                         
                width: 200,
                
                height: '100%',
                store: 'albums',
                border: true,
                useArrows: true,
                cls: 'tree',
                rootVisible: false,
                listeners:{ 
                    itemclick: 'onNodeSelect'
                }, 
                viewConfig:{
                    plugins:{
                        ptype:'treeviewdragdrop'
                    }
                },
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        { xtype: 'component', flex: 1 },
                        { xtype: 'button', text: 'Upload', cls: 'btn-blue' }
                    ]
                }]
                
            },
            {
                xtype:'dataview',
                reference: 'picsList',
                cls:'pics-list-content',
                store: 'pics',
                tpl: [
                    '<tpl for=".">',
                         '<div class="thumb"><img  src="{Url}" title=""></div>',
                    '</tpl>'
                ],
                multiSelect: true,
                minHeight: 400,
                flex:1,
                trackOver: true,
                overItemCls: 'x-item-over',
                itemSelector: 'div.thumb',
                emptyText: '没有可展示的图片'
            }
        ]
    }]
});