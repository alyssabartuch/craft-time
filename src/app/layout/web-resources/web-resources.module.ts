import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { WebResourcesRoutingModule } from './web-resources-routing.module';
import { WebResourcesComponent } from './web-resources.component';

import {ModalComponent} from './components';
import { WebResourceFormComponent } from './components/web-resource-form/web-resource-form.component';


import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        WebResourcesRoutingModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        FormsModule
    ],
    declarations: [
        WebResourcesComponent,
        ModalComponent,
        WebResourceFormComponent

    ]
})
export class WebResourcesModule {}
