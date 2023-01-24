import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ListaClientesComponent } from './views/lista-clientes/lista-clientes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroProdutosComponent } from './views/cadastro-produto/cadastro-produtos.component';
import { CadastroClientesComponent } from './views/cadastro-cliente/cadastro-clientes.component';
import { CadastroPedidosClientesComponent } from './views/cadastro-pedido-cliente/cadastro-pedidos-clientes.component';
import { LoginComponent } from './views/login/login.component';
import { ListaProdutosComponent } from './views/lista-produtos/lista-produtos.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroLojasComponent } from './views/cadastro-loja/cadastro-lojas.component';
import { CadastroCampanhasComponent } from './views/cadastro-campanha/cadastro-campanhas.component';
import { ListaPedidosComponent } from './views/lista-pedidos/lista-pedidos.component';
import { ListaLojasComponent } from './views/lista-lojas/lista-lojas.component';
import { ListaCampanhasComponent } from './views/lista-campanhas/lista-campanhas.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsDemoModule } from './views/google-maps-demo/google-maps-demo.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GoogleMapsModule } from '@angular/google-maps';
import { AutenticadoGuard } from './services/guard/autenticado.guard';
import { AuthService } from './services/guard/auth-service.service';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CadastroProdutosComponent,
    CadastroClientesComponent,
    CadastroPedidosClientesComponent,
    LoginComponent,
    ListaProdutosComponent,
    FooterComponent,
    DashboardComponent,
    CadastroLojasComponent,
    CadastroCampanhasComponent,
    ListaLojasComponent,
    ListaCampanhasComponent,
    ListaClientesComponent,
    ListaPedidosComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule,
    HttpClientModule,
    GoogleMapsDemoModule,
    DragDropModule,
    GoogleMapsDemoModule,
    ReactiveFormsModule,
    GoogleMapsModule,
  ],
  providers: [AuthService, AutenticadoGuard,
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
