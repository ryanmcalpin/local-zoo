import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalDetailComponent } from './animal-detail.component';
import { NewAnimalComponent } from './new-animal.component';
import { AgePipe } from './age.pipe';
import { EditAnimalComponent } from './edit-animal.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, AnimalDetailComponent, NewAnimalComponent, AgePipe, EditAnimalComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
