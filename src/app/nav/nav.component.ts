import { Component} from '@angular/core';

@Component({
    selector: '<nav-component></nav-component>',
    template: `
    <nav>
        <a routerLink="/dashboard" activeLink="active">dashboard</a>&nbsp;&nbsp;
        <a routerLink="/spendings" activeLink="active">spendings</a>&nbsp;&nbsp;
        <a routerLink="/transaction" activeLink="active">transaction</a>&nbsp;&nbsp;
        <a routerLink="/categories" activeLink="active">categories</a>
    </nav>`
})

export class Nav{

}