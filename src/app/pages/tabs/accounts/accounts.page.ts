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
      type: 'debit',
      isPrincipal: false
    },
    {
      name: 'Banco de Chile',
      number: '00 5435 1597',
      type: 'credit',
      isPrincipal: false
    },
    {
      name: 'Scotiabank',
      number: '00 8349 3154',
      type: 'credit',
      isPrincipal: true
    },
  ]

  accountSelected: Account

  constructor() { }

  ngOnInit() {
    this.accountSelected = this.accounts.find(account => account.isPrincipal)
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
