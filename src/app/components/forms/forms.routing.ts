import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
// Components
import { SimpleFormComponent } from '@app/components/forms/index';
import { ValidationFormComponent } from './validation-form/validation-form.component';

export const formsRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'simple-form',
                pathMatch: 'full'
            },
            {
                path: 'simple-form',
                component: SimpleFormComponent
            },
            {
                path: 'validation-form',
                component: ValidationFormComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        SimpleFormComponent,
        ValidationFormComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(formsRouting)
    ],
    exports: [RouterModule]
})
export class FormsRoutingModule { }
