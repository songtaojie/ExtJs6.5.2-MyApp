/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',
    requires:[
        // 'MyApp.view.main.Main'
        'MyApp.view.login.Login'
    ],
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    launch:function(){
        var loginStatus = localStorage.getItem('LoginStatus');
        //debugger;
        Ext.create({
            xtype:loginStatus?'app-main':'login'
        });
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
