/// <reference path='../Scripts/typings/sharepoint/SharePoint.d.ts'/>
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Welcome;
    return {
        setters:[],
        execute: function() {
            class Welcome {
                static message() {
                    var context = SP.ClientContext.get_current();
                    var user = context.get_web().get_currentUser();
                    context.load(user);
                    return 'Hello, ' + user.get_title();
                }
            }
            exports_1("Welcome", Welcome);
        }
    }
});
//# sourceMappingURL=app.module.js.map