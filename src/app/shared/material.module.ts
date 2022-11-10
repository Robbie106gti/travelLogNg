import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCommonModule} from '@angular/material/core';
import {CdkMenuModule} from '@angular/cdk/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    MatCommonModule,
    CdkMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatInputModule
  ],
  exports: [
    MatCommonModule,
    CdkMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatInputModule
  ]
})
export class MaterialModule { }