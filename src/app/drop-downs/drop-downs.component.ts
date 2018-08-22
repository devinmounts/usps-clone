import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-downs',
  templateUrl: './drop-downs.component.html',
  styleUrls: ['./drop-downs.component.css']
})
export class DropDownsComponent {

  showInfo: boolean = false;
  downArrow: boolean = true;
  upArrow: boolean = false;

  showCollapsable(){
    this.showInfo = !this.showInfo;
    this.downArrow = !this.downArrow;
    this.upArrow = !this.upArrow;
  }

  toggleCollapser(){
    if (this.showInfo === true){
      return "collapser-style";
    } else{
      return "collapser-span";
    }
  }

  // collapserStyle(){
  //   if (this.showInfo === true){
  //     return "collapser-style"
  //   } else{
  //     return "collapser-span"
  //   }
  // }
}
