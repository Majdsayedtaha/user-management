import { Component, OnInit } from '@angular/core';
// import { getMaxListeners } from 'process';
@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {
  user = [
    {
    name: 'Ahmad',
    role: ["Hr", "user manager", "employee"],
    email: "ahmad101@gmail.com",
    since: "7/7/2000",
    status: true,
  },
    {
    name: 'majd',
    role: ["user manager"],
    email: "majdst81@gmail.com",
    since: "7/7/2000",
    status: false,
  },
    {
    name: 'samer',
    role: ["Hr", "user manager"],
    email: "samo@gmail.com",
    since: "7/7/2000",
    status: false,
  },
    {
    name: 'lina',
    role: ["Hr", "user manager","employee"],
    email: "lolo44@gmail.com",
    since: "7/7/2000",
    status: true,
  },
    {
    name: 'naser',
    role: ["employee"],
    email: "nasr@gmail.com",
    since: "7/7/2000",
    status: true,
  },
]


  constructor() { }

  ngOnInit(): void {

  }

}
