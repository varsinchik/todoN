import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class LoaderService {
  public loaderShow = new Subject<boolean>();
  public loaderHide = new Subject<boolean>();
}
