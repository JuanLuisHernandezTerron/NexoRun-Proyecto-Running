import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';
// import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports:[
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})

export class MaterialModule { }
