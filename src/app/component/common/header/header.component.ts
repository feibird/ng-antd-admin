import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

interface Menu {
  id:number,
  name:string,
  children:Array<any>,
}

export class HeaderComponent{
  menuSource?:Array<Menu>;
  activeIndex:number
  getMenu():void{
    let arr:Array<Menu>=[];
    for(let i:number=0;i<3;i++){
      arr.push({id:~~(Math.random()*10000),name:'测试'+i,children:[]})
    }
    console.log(arr);
    
    this.menuSource = arr;
  }
}
