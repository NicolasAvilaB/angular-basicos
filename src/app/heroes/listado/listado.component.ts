import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    heroes: string[] = ['Ironman','Hulk', 'Doctor Who'];
    hebo: string[] = [];
    // o hebo: string = '';
    borrarunheroe(){ 
      const heroeborrado = this.heroes.shift() || '';
      //con this.hebo = this.heroes.shift() || '';
      if (!heroeborrado){

      }else{        
        this.hebo.push(`${heroeborrado}`);
      }
    }
}
