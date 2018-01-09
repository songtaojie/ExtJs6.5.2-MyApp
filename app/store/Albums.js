Ext.define('MyApp.store.Albums', {
    extend: 'Ext.data.TreeStore',
	storeId: 'albums',
    root: {
        expanded: true,
        
        children: [
            { id: 100,allowDrag:true, text: ' 加利福尼亚', expanded: true, children: [
                { id: 600,allowDrag:true, text: '大苏尔', leaf: true},
                { id: 500,allowDrag:true, text: '约塞米蒂国家公园', leaf: true}
            ] },
           { id: 400,allowDrag:true, text: ' 美国亚利桑那州', expanded: true, children: [
                { id: 300, allowDrag:true,text: '马蹄形弯道', leaf: true }
            ] },
            { id: 200, allowDrag:true,text: ' 住宅', leaf: true },
            { id: 700,allowDrag:true, text: ' 印度', expanded: true, children: [
                { id: 800, allowDrag:true,text: '乌塔卡蒙德', leaf: true },
                { id: 900, allowDrag:true,text: '金奈', leaf: true},
                { id: 1000, allowDrag:true,text: '马纳尔湾', leaf: true },
            ] },
        ]
    }
});

Ext.create('MyApp.store.Albums');
