import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { Proizvod } from 'src/models/proizvod';
import { ProizvodService } from '../proizvod.service';

@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css']
})
export class RadnikComponent implements OnInit {

  constructor(private proizvodiService: ProizvodService, private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.dohvatiSveProizvode();
  }

  korisnik: Korisnik;
  proizvodi: Proizvod[];
  kolicine = ['1 kg', '2 kg', '5 kg'];
  proizvod: string;
  kolicina: string;
  greska: string;

  dohvatiSveProizvode() {
    this.proizvodiService.dohvatiSveProizvode().subscribe((proizvodi: Proizvod[]) => {
      this.proizvodi = proizvodi;
    })
  }

  dodaj() {
    if(!this.proizvod || !this.kolicina) 
      this.greska = 'Odaberite proizvod i kolicinu!';
    else {
      this.greska = '';
      let kolicina: number;
      if(this.kolicina == '1 kg') {
        kolicina = 1;
      } else if(this.kolicina == '2 kg') {
        kolicina = 2;
      } else {
        kolicina = 5;
      }
      this.proizvodiService.azurirajStanje(this.proizvod, kolicina).subscribe((res) => {
        if(res['poruka'] == 'ok') {
          alert('Uspesno azuriranje stanja!');
        }
      });
    }
  }

  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['prijava']);
  }

}
