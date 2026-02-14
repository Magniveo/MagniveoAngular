import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiSelectModule,
    TuiSliderModule,
} from '@taiga-ui/kit';

import {ModuleDialogComponent} from './module-dialog.component';

@NgModule({
    imports: [
        TuiInputModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
        TuiAutoFocusModule,
        FormsModule,
        TuiButtonModule,
        TuiSliderModule
    ],
    declarations: [ModuleDialogComponent],
    exports: [ModuleDialogComponent],
})
export class ModuleDialog {}