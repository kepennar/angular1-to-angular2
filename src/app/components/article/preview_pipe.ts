import {
  isString,
  isPresent,
  isBlank,
} from 'angular2/src/facade/lang';

import {
  Pipe,
  PipeTransform,
  Injectable
} from 'angular2/angular2';

@Pipe({name: 'preview', pure: true})
@Injectable()
export class PreviewPipe implements PipeTransform {
	private static DEFAULT_LENGTH: number = 10;
  
  transform(value: any, args: any[]): string {
    if (isBlank(value)) return null;

    if (!isString(value)) {
      throw `Invalid argument '${value}' for pipe '${PreviewPipe}'`;
    }

    const maxLength: number = isPresent(args) && args.length > 0 ? args[0] : PreviewPipe.DEFAULT_LENGTH;
    return value.length > 500 ? value.slice(0, maxLength) + ' ...' : value
  }
}