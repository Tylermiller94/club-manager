import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, title: string) {
    var newMember: Member = new Member(name, title);
    this.memberService.addMember(newMember);
  }
}
