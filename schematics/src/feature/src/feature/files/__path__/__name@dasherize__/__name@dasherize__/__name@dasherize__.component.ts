import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbstractEventHandler } from 'pages/sdn-cloud/common';
import { <%=classify(name)%>Service } from '../<%=dasherize(name)%>.service';

@Component({
  selector: 'dn-<%=dasherize(name)%>',
  templateUrl: './<%=dasherize(name)%>.component.html',
  styleUrls: ['./<%=dasherize(name)%>.component.css'],
})
export class <%=classify(name)%>Component extends AbstractEventHandler implements OnInit, OnDestroy {
  <%=camelize(name)%>Fetch$: Observable<any>;

  constructor(private <%=camelize(name)%>Service: <%=classify(name)%>Service) {
    super();
    this.init();
  }

  private init() {
    this.get<%=classify(name)%> ();
  }

  ngOnInit() {

  }

  private get<%=classify(name)%>() {
    this.<%=camelize(name)%>Fetch$ = this.<%=camelize(name)%>Service.get<%=classify(name)%>();
  }

  ngOnDestroy() {

  }
}
