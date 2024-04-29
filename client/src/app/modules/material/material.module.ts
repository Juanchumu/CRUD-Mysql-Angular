import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




//import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { NgIf } from "@angular/common";

//import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatButtonModule }		from "@angular/material/button";
import { MatCardModule }		from '@angular/material/card'
import { MatDatepickerModule }	from "@angular/material/datepicker";
import { MatExpansionModule }	from '@angular/material/expansion';
import { MatFormFieldModule }	from "@angular/material/form-field";
import { MatGridListModule }	from '@angular/material/grid-list';
import { MatIconModule}			from '@angular/material/icon'; 
import { MatInputModule }		from "@angular/material/input";
import { MatListModule }		from '@angular/material/list';
import { MatNativeDateModule }	from "@angular/material/core";
import { MatSelectModule }		from '@angular/material/select';
import { MatSidenavModule }		from '@angular/material/sidenav';
//import { MatSnackBar }			from '@angular/material/snack-bar';
import { MatStepperModule }		from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule }		from '@angular/material/tabs';
import { MatTableModule }		from '@angular/material/table';
import { MatToolbarModule }		from '@angular/material/toolbar'; 


import { GamesService } from '../../services/games.service';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,

		MatButtonModule,
		MatCardModule,
		MatDatepickerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatNativeDateModule,
		MatSidenavModule,
		MatSelectModule,
		//MatSnackBar,
		MatSlideToggleModule,
		MatStepperModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,

		HttpClientModule

	],
	exports: [

		MatButtonModule,
		MatCardModule,
		MatDatepickerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatNativeDateModule,
		MatSidenavModule,
		MatSelectModule,
		//MatSnackBar,
		MatSlideToggleModule,
		MatStepperModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,


		HttpClientModule

	],
	providers: [ GamesService ]
})
export class MaterialModule { }
