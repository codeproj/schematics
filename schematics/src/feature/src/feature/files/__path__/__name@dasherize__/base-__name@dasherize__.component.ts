import { Component } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>',
  template: `<router-outlet></router-outlet>`,
})
export class Base<%=classify(name)%>Component { }
