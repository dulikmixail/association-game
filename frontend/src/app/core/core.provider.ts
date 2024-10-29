import {provideSocket} from '@app/core/socket/socket.provider';
import {Provider} from '@angular/core';

export const provideCore: () => Provider =  () => [provideSocket()]
