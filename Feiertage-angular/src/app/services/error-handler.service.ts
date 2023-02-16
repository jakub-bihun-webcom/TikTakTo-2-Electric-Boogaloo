import { Injectable } from '@angular/core';
import iziToast from 'izitoast';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  handleError(error: any): void {
    iziToast.error({ title: 'Falsche Eingabe', message: error.message, position: 'topRight' });
  }
}
