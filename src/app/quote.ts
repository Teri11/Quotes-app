export class Quote {
  showDescription:boolean;
  constructor(public topic:string,public name:string,public description:string,public completeDate:Date,public author:string,public likes: number,
    public dislikes: number,){
    this.showDescription = false;
  }
 

}
