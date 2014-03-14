jquery.tablePagination.js
=========================

jQuery Plugin for Table Pagination 

Adds a table pagination below the specified element

Blog: https://my-azur.de/blog/jquery-table-pagination-plugin/

Demo: https://my-azur.de/blog/cinematic/ (Alternative: http://jsfiddle.net/sinky/5SJ9U/)

## Usage

Call this

``` js
$('table').tablePagination({
  perPage: 20,                        // Items per Page
  initPage: 1,                        // Set Page on start
  position: 'bottom',                 // Position of pagination [top|bottom]
  paginationClass: 'tablePagination'  // CSS Class for Pagination <ol> Element
});
```

Sample CSS

``` css
.tablePagination {
    padding-left: 0;
    margin-top: 1em;
}
.tablePagination:before {
    content:"Seiten: ";
}
.tablePagination li {
    cursor: pointer;
    display: inline-block;
    list-style: none;
    padding: 2px 9px;
}
.tablePagination li:hover {
    background: #eee;
}
.tablePagination .current {
    background: #26b;
    color: #fff;
}
```

## Todo
  - Permalink
