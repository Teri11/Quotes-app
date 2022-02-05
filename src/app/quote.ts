export class Quote {
  showDescription:boolean;
  constructor(public topic:string,public name:string,public description:string,public author:string){
    this.showDescription = false;
  }
 

}
