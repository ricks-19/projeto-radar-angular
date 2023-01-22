import { Component } from '@angular/core';
import { AutenticadoGuard } from './services/autenticado.guard';
import { AuthService } from './services/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radar';

  mostrarMenu: boolean = false;
  constructor(private autenticadoGuard: AutenticadoGuard) { }
  

  ngOnInit(): void {
    this.autenticadoGuard.mostrarNav.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    
  }

  

}
