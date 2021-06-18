import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proizvod } from 'src/models/proizvod';
import { ProizvodService } from '../proizvod.service';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  constructor(private proizvodService: ProizvodService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('korpa')) {
      this.korpa = JSON.parse(localStorage.getItem('korpa'));
      this.racun = JSON.parse(localStorage.getItem('racun'));
    } else {
      this.korpa = [];
      this.racun = 0.0;
    }
  }

  korpa: Proizvod[];
  racun: number;

  kupi() {
    this.korpa.forEach((proizvod) => {
      let naziv = proizvod.naziv;
      let kolicina = proizvod.stanje_g;
      this.proizvodService.kupi(naziv, kolicina).subscribe((res) => {
        if(res['poruka'] != 'ok') {
          alert('Greska!');
        }
      })
    })
    this.korpa = [];
    localStorage.setItem('korpa', JSON.stringify(this.korpa));
  }

  nazad() {
    this.router.navigate(['kupac']);
  }

}
