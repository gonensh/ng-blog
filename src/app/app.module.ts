import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FiltersComponent } from './post-list/filters/filters.component';
import { PostTileComponent } from './post-list/post-tile/post-tile.component';
import { JoinPipe } from './join.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    FiltersComponent,
    PostTileComponent,
    JoinPipe
  ],
  imports: [BrowserModule, AppRoutingModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
