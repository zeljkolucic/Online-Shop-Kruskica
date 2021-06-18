import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { Proizvod } from 'src/models/proizvod';
import { ProizvodService } from '../proizvod.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private proizvodService: ProizvodService, private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.dohvatiSveProizvode();
  }

  korisnik: Korisnik;
  proizvodi: Proizvod[];

  dohvatiSveProizvode() {
    this.proizvodService.dohvatiSveProizvode().subscribe((proizvodi: Proizvod[]) => {
      this.proizvodi = proizvodi;
    })
  }

  naruci(proizvod) {
    localStorage.setItem('narudzbina', JSON.stringify(proizvod));
    this.router.navigate(['narudzbina']);
  }

  odjava() {
    localStorage.removeItem('ulogovan');
    localStorage.removeItem('korpa');
    this.router.navigate(['prijava']);
  }

}
