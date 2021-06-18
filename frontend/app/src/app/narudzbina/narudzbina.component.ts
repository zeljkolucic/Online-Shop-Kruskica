import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proizvod } from 'src/models/proizvod';
import { ProizvodService } from '../proizvod.service';

@Component({
  selector: 'app-narudzbina',
  templateUrl: './narudzbina.component.html',
  styleUrls: ['./narudzbina.component.css']
})
export class NarudzbinaComponent implements OnInit {

  constructor(private proizvodService: ProizvodService, private router: Router) { }

  ngOnInit(): void {
    this.proizvod = JSON.parse(localStorage.getItem('narudzbina'));
  }

  proizvod: Proizvod;
  kolicina: string;
  greska: string;

  dodaj() {
    let kolicina = parseInt(this.kolicina);
    this.proizvodService.dodaj(this.proizvod).subscribe((res: Proizvod) => {
      if(res) {
        if(res.stanje_g < kolicina) {
          this.greska = 'Nema dovoljno proizvoda na stanju!';
        } else {
          this.greska = '';
          let korpa: Proizvod[] = [];
          let racun: number = 0.0;
          if(localStorage.getItem('korpa') != null) {
            korpa = JSON.parse(localStorage.getItem('korpa'));
            racun = JSON.parse(localStorage.getItem('racun'));
          }
          let vecPostoji: boolean = false;
          let index = -1;
          for(let i = 0; i < korpa.length; i++) {
            if(res.naziv == korpa[i].naziv) {
              vecPostoji = true;
              index = i;
              break;
            }
          }
          if(vecPostoji) {
            if(korpa[index].stanje_g + kolicina > res.stanje_g) {
              this.greska = 'Nema dovoljno proizvoda na stanju!';
              return;
            } else {
              korpa[index].stanje_g += kolicina;
              racun += korpa[index].stanje_g * korpa[index].cena_kg / 1000.0;
            }
          } else {
            let proizvod = new Proizvod();
            proizvod.naziv = res.naziv;
            proizvod.stanje_g = kolicina;
            proizvod.cena_kg = res.cena_kg;
            korpa.push(proizvod);
            racun += proizvod.stanje_g * proizvod.cena_kg / 1000.0;
          }
          localStorage.setItem('korpa', JSON.stringify(korpa));
          localStorage.setItem('racun', JSON.stringify(racun));
        }
      } else {
        alert('Greska!');
      }
    })
  }

  korpa() {
    this.router.navigate(['korpa']);
  }

  nazad() {
    this.router.navigate(['kupac']);
  }

}
