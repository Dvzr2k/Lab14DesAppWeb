import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fichas: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerFichasPrestamo();
  }

  obtenerFichasPrestamo() {
    this.http.get<any[]>('http://localhost:5000/api/ficha/prestamo').subscribe(
      (response) => {
        this.fichas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
