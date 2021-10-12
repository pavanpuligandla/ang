import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Messages } from 'src/app/models/message.model';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  constructor(private http: HttpClient) { }

  public GetMessagesTypes() {
    let url = `${environment.apiUrl}/Messages/Types`;
    return this.http.get(url);
  }

  public GetMessagesDurations() {
    let url = `${environment.apiUrl}/Messages/Durations`;
    return this.http.get(url);
  }

  public GetMessagesCompanies() {
    let url = `${environment.apiUrl}/Company/GetAll`;
    return this.http.get(url);
  }

  public AddMessages(Messages:Messages) {
    let url = `${environment.apiUrl}/Messages/CreateMessage`;
    return this.http.post(url, Messages);
  }
}
