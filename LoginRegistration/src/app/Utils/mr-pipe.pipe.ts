import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'mrPipe'})
export class mrPipe implements PipeTransform {
  transform(value: string, before: string): string {
    let newStr = `${before} ${value}`;
    return newStr;
  }
}