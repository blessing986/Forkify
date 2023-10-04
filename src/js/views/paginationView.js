import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline'); // searches for the closet button element

      // guard clause
      if (!btn) return;

      const goToPage = Number(btn.dataset.goto); // getting the number from the button when click
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) return `${this.next(curPage)}`;

    // Last page
    if (curPage === numPages && numPages > 1) return `${this.prev(curPage)}`;

    // Other page
    if (curPage < numPages)
      return `
      ${this.prev(curPage)}
      ${this.next(curPage)}
      `;

    // Page 1, and there are No other pages
    return '';
  }
}

export default new PaginationView();
