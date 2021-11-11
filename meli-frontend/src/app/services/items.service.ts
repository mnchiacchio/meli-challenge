import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';
import { ItemResponseModel } from '../models/item-response.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  private apiUrl = environment.apiUrl;

  public searchItems(queryParams:string) : Observable<SearchResponse>{
    const url = `${this.apiUrl}items?q=${queryParams}`;
    return this.httpClient.get<SearchResponse>(url);
  }

  public getItem(id:string) : Observable<ItemResponseModel>{
    const url = `${this.apiUrl}items/${id}`;
    return this.httpClient.get<ItemResponseModel>(url);
  }
}
