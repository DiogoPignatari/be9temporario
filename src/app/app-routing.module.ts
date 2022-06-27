import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './@shared/services/guard/guard.service';
import { HomeModule } from './pages/home/home.module';
import { MainComponent } from './pages/main/main.component';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { ServicosModule } from './pages/servicos/servicos.module';
import { ContatoModule } from './pages/contato/contato.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => HomeModule,
  },
  {
    path: 'home',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => HomeModule,
  },
  {
    path: 'politicadeprivacidade',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => PortfolioModule,
  },
  {
    path: 'termos',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => ServicosModule,
  },
  {
    path: 'termos1',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => ContatoModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
