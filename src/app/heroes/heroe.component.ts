import { Component} from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    hola: string ='Ironman!';
    edad: number = 10;

    get mayuscula(){
        return this.hola.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.hola} - ${ this.edad}`;
    }

    cambiarheroe(): void{
        this.hola = "wenahona";
    }
    cambiaredad():void  {
        this.edad = 123;
    }
    
}