import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/reducers';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './components/material.module';
import { StatCardComponent } from './ui-kit/stat-card/stat-card.component';
import { TopCardsComponent } from './components/top-cards/top-cards.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/efffects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingInterceptor } from './interceptors/loader.interceptor';
import { NgxSpinnerComponent, NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    StatCardComponent,
    TopCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([DashboardEffects]),
    StoreModule.forRoot({dashboardData: dashboardReducer}),
    StoreDevtoolsModule.instrument({}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
