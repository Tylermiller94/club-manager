import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class MemberlistComponent {
  members: Member[] = [
   new Member("James", "president"),
   new Member("Charlie", "Vice-president"),
   new Member("Momiji", "Treasurer"),

 ];
}
