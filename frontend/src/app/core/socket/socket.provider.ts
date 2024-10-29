import {importProvidersFrom, Provider} from '@angular/core';
import {SocketIoModule} from 'ngx-socket-io';

import {SocketService} from './socket.service';

export const provideSocket: () => Provider = () => [importProvidersFrom(SocketIoModule), SocketService];
