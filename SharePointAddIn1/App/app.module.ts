/// <reference path='../Scripts/typings/sharepoint/SharePoint.d.ts'/>

export class Welcome {
    public static message(): string {        
        var context = SP.ClientContext.get_current();
        var user = context.get_web().get_currentUser();

        context.load(user);

        return 'Hello, ' + user.get_title();
    }
}