import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class LoaderService {
  public load = new Subject<boolean>();
}
