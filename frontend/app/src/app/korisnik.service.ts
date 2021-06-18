import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  prijava(korIme, lozinka, tip) {
    const podaci = {
      korIme: korIme,
      lozinka: lozinka,
      tip: tip
    }
    return this.http.post(`${this.uri}/korisnik/prijava`, podaci);
  }

}
