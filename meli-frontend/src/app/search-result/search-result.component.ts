import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  
  @ViewChild("search")
  search: SearchBoxComponent | undefined;

  searchText: string = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.setTextBasedOnUrl();
    });
    
  }

  
  setTextBasedOnUrl() {
      let url = new URL(location.href);
      let params:any = url.searchParams;
      let searchParam = params.get("search");
      this.searchText = searchParam;
  }

}
