import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent implements OnInit, AfterViewInit {

  @ViewChild("inputsearch")
  input: ElementRef | undefined;
  text:string | undefined;
  route: string | undefined;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.setTextBasedOnUrl();
    });
  }
  
  ngAfterViewInit() {
    if(this.text && this.input){
      this.input.nativeElement.value = this.text;
    }
  }

  search(){
    let textToSearch = this.input?.nativeElement.value || "";
    if( textToSearch )
      this.router.navigate(['/items'], { queryParams: { search: textToSearch } });
  }

  navigateRoot(){
    if( this.input )
      this.input.nativeElement.value = "";
    this.router.navigate(["/"]);
  }

  setTextBasedOnUrl() {
    let url = new URL(location.href);
    let params:any = url.searchParams;
    let searchParam = params.get("search");
    this.text = searchParam || "";
    if(this.input){
      this.input.nativeElement.value = this.text;
    }
  }
}
