import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {
  idItem: string | undefined;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((oParam) => {
      this.searchItem(oParam.id);
    })
  }

  ngOnInit(): void {
    
  }

  searchItem(itemId: string){
    debugger;
    this.idItem = itemId;
  }

}
