import { Pipe, PipeTransform } from '@angular/core';
import { TrainingUser } from 'src/app/model/TrainingUser';

@Pipe({
  name: 'removeDuplicate'
})
export class RemoveDuplicatePipe implements PipeTransform {

  locationArray: TrainingUser[] = [];
  platformArray: TrainingUser[] = [];
  designationArray: TrainingUser[] = [];
  leadnameArray: TrainingUser[] = [];
  mytemplocarray: string[] = [];
  mytempplatformarray: string[] = [];
  mytempdesigarray: string[] = [];
  mytempleadarray: string[] = [];
  parameter: string;
  

  transform(valuelist: any, ...args: any[]): any {
    this.parameter = args[0];


    switch (this.parameter) {
      case "location":
        this.mytemplocarray = (valuelist.map(item => item.loc).filter((value, index, self) => self.indexOf(value) === index));
        console.log(this.mytemplocarray);
        for (var i = 0; i < this.mytemplocarray.length; i++) {
          this.locationArray.push(valuelist.find(trusr => {
            return trusr.loc === this.mytemplocarray[i];
          }))
        }
        console.log(this.locationArray);
        return this.locationArray;

      case "platform":
        this.mytempplatformarray = (valuelist.map(item => item.platform).filter((value, index, self) => self.indexOf(value) === index));
        console.log(this.mytempplatformarray);
        for (var i = 0; i < this.mytempplatformarray.length; i++) {
          this.platformArray.push(valuelist.find(trusr => {
            return trusr.platform === this.mytempplatformarray[i];
          }))
        }
        console.log(this.platformArray);
        return this.platformArray;

      case "designation":
        this.mytempdesigarray = (valuelist.map(item => item.desig).filter((value, index, self) => self.indexOf(value) === index));
        console.log(this.mytempdesigarray);
        for (var i = 0; i < this.mytempdesigarray.length; i++) {
          this.designationArray.push(valuelist.find(trusr => {
            return trusr.desig === this.mytempdesigarray[i];
          }))
        }
        console.log(this.designationArray);
        return this.designationArray;

      case "leadname":
        this.mytempleadarray = (valuelist.map(item => item.lead).filter((value, index, self) => self.indexOf(value) === index));
        console.log(this.mytempleadarray);
        for (var i = 0; i < this.mytempleadarray.length; i++) {
          this.leadnameArray.push(valuelist.find(trusr => {
            return trusr.lead === this.mytempleadarray[i];
          }))
        }
        console.log(this.leadnameArray);
        return this.leadnameArray;


    }
  }

}
