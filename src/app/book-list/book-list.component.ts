import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private service:SharedService) { }

  BookList:any=[];

  ngOnInit(): void {
    this.refreshBookList();
  }

  refreshBookList(){
    this.service.getBooksList().subscribe(data=>{
        this.BookList=data;
    });
  }
}
