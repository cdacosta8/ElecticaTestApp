import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableTimeRoutingModule } from './table-time-routing.module';
import { TableTimeComponent } from './container/table-time/table-time.component';
import { TableTimeListComponent } from './components/table-time-list/table-time-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [  
    TableTimeComponent, TableTimeListComponent
  ],
  imports: [
    CommonModule,
    TableTimeRoutingModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [ { provide: MAT_DATE_LOCALE, useValue: 'en-US' }],
})
export class TableTimeModule { }
