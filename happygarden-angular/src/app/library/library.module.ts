import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryListComponent } from './library-list/library-list.component';
import { PlantSingleComponent } from './plant-single/plant-single.component';

@NgModule({
  declarations: [LibraryListComponent, PlantSingleComponent],
  imports: [CommonModule, LibraryRoutingModule]
})
export class LibraryModule {}
