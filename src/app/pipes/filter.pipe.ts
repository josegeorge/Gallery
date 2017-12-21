import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(args: any[],value: any): any {
    console.log(value);
    console.log(args);
    if(value=='all') { return args; } else
    return args.filter(item=> {return item.category == value });
  }

}
