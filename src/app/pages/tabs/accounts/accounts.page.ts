import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  accounts: Account[] = [
    {
      name: 'Banco de Chile',
      number: '00 2548 2569',
      type: 'debit'
    },
    {
      name: 'Banco de Chile',
      number: '00 2548 2569',
      type: 'credit'
    },
  ]

  accountSelected: Account

  constructor() { }

  ngOnInit() {
    this.accountSelected = this.accounts[Math.random().toFixed()]
  }

  nextAccount() {
    const selectedAccountId = this.accounts.findIndex(account => account === this.accountSelected);
    (selectedAccountId === this.accounts.length - 1) ? this.accountSelected = this.accounts[0] : this.accountSelected = this.accounts[selectedAccountId + 1]
  }
  
  prevAccount() {
    const selectedAccountId = this.accounts.findIndex(account => account === this.accountSelected);
    (!selectedAccountId) ? this.accountSelected = this.accounts[this.accounts.length - 1] : this.accountSelected = this.accounts[selectedAccountId - 1]
  }

  addAccount() {
    
  }

}
