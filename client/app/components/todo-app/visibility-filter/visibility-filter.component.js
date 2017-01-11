import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './../../../constants/todo-filters.constants';
require('./visibility-filter.component.scss');

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

export class Visibility {
  constructor() {
    this.filterTitles = FILTER_TITLES;
  }

  $onInit() {
    this.selectedFilter = SHOW_ALL;
  }

  selectFilter(selectedFilter) {
    this.selectedFilter = selectedFilter;
    this.onSelectFilter({ filter: selectedFilter });
  }
}
