/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onLogoutClick:function(){
        this.getView().destroy();
        localStorage.removeItem('LoginStatus');
        Ext.create('MyApp.view.login.Login');
    },
    onMonthSelect: function (combo, record) {
            console.log(record);
            Ext.getStore('expense').clearFilter();
            var dateFiter = new Ext.util.Filter({
                filterFn: function(item) {
                    return item.data.date.getMonth() ==['一月', '二月', '三月', '四月', '五月'].indexOf(combo.rawValue);
                }
            });
            Ext.getStore('expense').addFilter(dateFiter);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
