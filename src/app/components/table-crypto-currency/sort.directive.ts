import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from './sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any> = [];
  constructor(private targetElem: ElementRef) { }

  @HostListener("click")
  sortData() {
    // Create Object of Sort Class
    const sort = new Sort();
    // Get Reference Of Current Clicked Element
    const elem = this.targetElem.nativeElement;
    // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
    const order = elem.getAttribute("data-order");
    // Get The Property Type specially set [data-type=date] if it is date field
    const type = elem.getAttribute("data-type");
    // Get The Property Name from Element Attribute
    const property = elem.getAttribute("data-name");
    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
      this.hideArrowHeaderTable();
      elem.children[0].setAttribute("class","arrow-sort-up");
    }
    else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc");
      this.hideArrowHeaderTable();
      elem.children[0].setAttribute("class","arrow-sort-down");
    }
  }
  
  // Hide the arrows of the whole table to display the sorting arrow of the current table
  public hideArrowHeaderTable(): void {
    // Get The parent element
    const parentElem = this.targetElem.nativeElement.parentNode;
    for (let i=0; i < parentElem.children.length; i++) {
      parentElem.children[i].children[0].setAttribute("class","arrow-hide")
    }
    
  }
}
