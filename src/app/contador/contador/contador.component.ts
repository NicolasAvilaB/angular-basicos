import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <h1> {{ saludo }}</h1>
            <h3> La Base es: <strong>{{ base }}</strong> </h3 >
            <button (click)="sumaresta(base)" > +{{ base }}</button>
            <span> {{ numero }}</span>
            <button (click)="sumaresta(-base)" > -{{ base }}</button>`
})
export class ContadorComponent{
    saludo: string = 'Hola Mundo!';
    numero: number = 10;
    base: number = 5

    sumaresta(valor: number) {
        this.numero += valor;
    }
}