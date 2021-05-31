import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';


// FormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Date Pipe
import { DatePipe } from '@angular/common';
// Mat Icon
import {MatIconModule} from '@angular/material/icon';
//Loader
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// DatePicker
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

// Tooltip
import {MatTooltipModule} from '@angular/material/tooltip';




const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatTableModule,
  MatSelectModule,
  MatTabsModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatCheckboxModule
];

@NgModule({
  imports: [
    ...materialModules

  ],
  exports: [
    ...materialModules,
  ],
  providers:[DatePipe]
})

export class SharedModule { }
