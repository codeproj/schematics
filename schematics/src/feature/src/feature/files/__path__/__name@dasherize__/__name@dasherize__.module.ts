import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../app.translation.module';
import { DNmModule } from '../../../theme/dnm.module';
import { routing } from './<%=dasherize(name)%>.routing';
import { DNCommonModule } from 'common/common.module';
import { <%=classify(name)%>Component } from './<%=dasherize(name)%>/<%=dasherize(name)%>.component';
import { <%=classify(name)%>Service } from './<%=dasherize(name)%>.service';
import { Base<%=classify(name)%>Component } from './base-<%=dasherize(name)%>.component';


@NgModule ({
  imports: [
    CommonModule,
    DNCommonModule,
    FormsModule,
    AppTranslationModule,
    DNmModule,
    routing,
  ],
  declarations: [
    <%=classify(name)%>Component,
    Base<%=classify(name)%>Component
  ],
  entryComponents: [],
  providers: [<%=classify(name)%>Service ],
  exports: [
    <%=classify(name)%>Component,
    Base<%=classify(name)%>Component
    ],
})
export class <%=classify(name)%>Module {
}
