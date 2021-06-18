import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit(): void {
  }

  korIme: string;
  lozinka: string;
  tip: string;
  greska: string;

  prijava() {
    this.korisnikService.prijava(this.korIme, this.lozinka, this.tip).subscribe((kor: Korisnik) => {
      if(kor){
        localStorage.setItem('ulogovan', JSON.stringify(kor));
        if(kor.tip == 'kupac') {
          this.router.navigate(['kupac']);
        } else if(kor.tip == 'radnik'){
          this.router.navigate(['radnik']);
        }
      } else {
        this.greska = 'Greska!';
      }
    })
  }

}
