import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

import {ProgressSocketEvent} from './models/progress.socket-event';
import {environment} from '@env/environment';

@Injectable()
export class SocketService {
  progressEvents$: Observable<ProgressSocketEvent>;

  private socket = new Socket({ url: environment.socketHost, options: {} });

  constructor() {
    this.progressEvents$ = this.socket.fromEvent<ProgressSocketEvent>('progress');
    this.connect();
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }
}
