import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDetailModel } from '../models/item-detail.model';
import { ItemResponseModel } from '../models/item-response.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {
  item: ItemDetailModel | undefined;
  itemResponse: ItemResponseModel | undefined;
  categories: [string] | undefined;
  loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService
    ) { 
    this.activatedRoute.params.subscribe((oParam) => {
      this.searchItem(oParam.id);
    })
  }

  ngOnInit(): void {
    
  }

  searchItem(itemId: string){
    this.loading = true;
    this.categories = [""];
      this.itemsService.getItem(itemId).subscribe((result) =>{
        this.item = result.item;
        this.categories = result.categories;
        this.loading = false;
      })
  }

}
