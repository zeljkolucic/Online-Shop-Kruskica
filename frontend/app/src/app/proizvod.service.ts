import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiSveProizvode() {
    return this.http.get(`${this.uri}/proizvod/dohvatiSveProizvode`);
  }

  azurirajStanje(naziv, kolicina) {
    const podaci = {
      naziv: naziv,
      kolicina: kolicina
    }
    return this.http.post(`${this.uri}/proizvod/azurirajStanje`, podaci);
  }

  dodaj(proizvod) {
    const podaci = {
      proizvod: proizvod
    }
    return this.http.post(`${this.uri}/proizvod/dodaj`, podaci);
  } 

  kupi(naziv, kolicina) {
    const podaci = {
      naziv: naziv,
      kolicina: kolicina
    }
    return this.http.post(`${this.uri}/proizvod/kupi`, podaci);
  }

}
