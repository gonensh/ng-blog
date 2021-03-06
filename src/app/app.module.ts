import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostTileComponent } from './posts/post-tile/post-tile.component';
import { FiltersComponent } from './posts/filters/filters.component';
import { JoinPipe } from './pipes/join.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    FiltersComponent,
    PostTileComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    PostsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
