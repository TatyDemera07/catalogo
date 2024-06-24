import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  searchCourses() {
    const searchMapping: { [key: string]: string } = {
      'desarrollo de software': '/desarrollo-sf',
      'diseño de modas': '/modas',
      'arte culinario': '/arte-culinario',
      'control de incendios': '/control-incendios',
      'guia nacional de turismo': '/guia-nacional',
      'marketing': '/marketing'
    };

    const query = this.searchQuery.toLowerCase();

    if (query in searchMapping) {
      this.router.navigate([searchMapping[query]]);
    } else {
      alert('Carrera no encontrada');
    }
  }
}
