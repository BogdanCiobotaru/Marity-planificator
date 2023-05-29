import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent {

  public bottomNavigationIcons = [{ src: '/assets/images/icons/bottom-navigation/home.svg', text: 'Planificator' }, { src: '/assets/images/icons/bottom-navigation/search.svg', text: 'Furnizori' }, { src: '/assets/images/icons/bottom-navigation/marity.svg', text: 'Marity' }, { src: '/assets/images/icons/bottom-navigation/business.svg', text: 'Business' }]
}
