import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent implements OnInit, AfterViewInit {

  @Input()
  text:string | undefined;

  @ViewChild("inputsearch")
  input: ElementRef | undefined;
  route: string | undefined;
  constructor(private router: Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
      }
    });
  }

  ngOnInit(): void {
    debugger;
  }
  ngAfterViewInit() {
    debugger
    if(this.text && this.input){
      this.input.nativeElement.value = this.text;
    }
  }

  search(){
    let textToSearch = this.input?.nativeElement.value || "";
    if(textToSearch)
      this.router.navigate(['/items'], { queryParams: { search: textToSearch } });
  }
}
