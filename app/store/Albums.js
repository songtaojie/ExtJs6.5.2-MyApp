Ext.define('MyApp.store.Albums', {
    extend: 'Ext.data.TreeStore',
	storeId: 'albums',
    root: {
        expanded: true,
        children: [
            
            { id: 100, text: ' 加利福尼亚', expanded: true, children: [
                { id: 600, text: '大苏尔', leaf: true},
                { id: 500, text: '约塞米蒂国家公园', leaf: true}
            ] },
           { id: 400, text: ' 美国亚利桑那州', expanded: true, children: [
                { id: 300, text: '马蹄形弯道', leaf: true }
            ] },
            { id: 200, text: ' 住宅', leaf: true },
            { id: 700, text: ' 印度', expanded: true, children: [
                { id: 800, text: '乌塔卡蒙德', leaf: true },
                { id: 900, text: '金奈', leaf: true},
                { id: 1000, text: '马纳尔湾', leaf: true },
            ] },
        ]
    }
});

Ext.create('MyApp.store.Albums');