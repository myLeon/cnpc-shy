import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent }  from './simple-table.component';

@NgModule({
  imports:[CommonModule,FormsModule],
  declarations: [ SimpleTableComponent ],
  exports:[SimpleTableComponent]
})

export class SimpleTableModule {}
