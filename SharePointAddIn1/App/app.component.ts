import {Welcome} from './app.module'
import {Component} from 'angular2/core'

@Component({
    selector: 'app-main',
    template: `<h1>{{message}}</h1>`
})

export class AppComponent {
    public message: string;

    ngOnInit() {
        var context = SP.ClientContext.get_current();
        var user = context.get_web().get_currentUser();

        context.load(user);        
        context.executeQueryAsync(() => {
            this.message = 'You can reach ' + user.get_title() + ' at ' + user.get_email();
        }, (sender, args) => {
            this.message = 'Failed to get user name. Error: ' + args.get_message();
        });
    }
}