import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from '../models/item.model';
import { SearchResponse } from '../models/search-response.model';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  
  searchText: string = "";
  searchResponse: SearchResponse | undefined;
  items: [ItemModel] | undefined;
  categories: [string] | undefined;
  loading: boolean = true;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.initSearch();
    });
    
  }

  initSearch() {
      this.loading = true;
      let url = new URL(location.href);
      let params:any = url.searchParams;
      let searchParam = params.get("search");
      this.searchText = searchParam;
      this.itemsService.searchItems(searchParam).subscribe((result) =>{
        this.searchResponse = result;
        this.items = this.searchResponse.items;
        this.categories = this.searchResponse.categories;
        this.loading = false;
      })
  }
  navigateToItem(item: ItemModel){
    const itemId = item.id;
    if( itemId )
      this.router.navigate(['/items/' + itemId]);
  }
  
  getUrlImg(item: ItemModel){
      return "url('" + item.picture + "')"; 
  }

}
