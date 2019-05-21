import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const baseUrl = environment.urls.<%=underscore(name)%>;

@Injectable()
export class <%=classify(name)%>Service {
  private <%=camelize(name)%>Subject: BehaviorSubject<any> = new BehaviorSubject ([]);

  constructor(private http: HttpClient) {}

  get<%=classify(name)%>(): Observable<any> {
    this.fetch<%=classify(name)%>s (); // Check for new data only if needed
  return this.<%=camelize(name)%>Subject.asObservable ();
  }

  fetch<%=classify(name)%>s() {
    this.http.get (`${baseUrl}`)
      .take (1)
      .filter ((res: any) => !!res)
      .subscribe ((items: any) => {
        this.notify (items);
      });
  }

  /**
   * Update all listeners that the data has been changed
   */
  private notify(items) {
    this.<%=camelize(name)%>Subject.next (items);
  }
}
