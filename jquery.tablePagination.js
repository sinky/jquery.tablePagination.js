/*
	tablePagination Plugin for jQuery (by Marco Krage)
	Version: 0.2
	http://my-azur.de/blog/####

	This plugin is offered under the MIT license.
	(c) 2014 by Marco Krage, http://marco.mit-license.org
*/
(function ($) {

  $.fn.tablePagination = function (options) {

    var settings = $.extend({
      perPage: 20,
      initPage: 1,
      position: 'bottom',
      paginationClass: 'tablePagination',
      showAllButton: true
    }, options);

    return this.each(function () {
      var $table = $(this);
      var $rows = $table.find('tr:has(td)');
      var $pageination;
      var pages;

      if ($rows.length > settings.perPage) {
        pages = Math.ceil($rows.length / settings.perPage);

        $pageination = $('<ol/>').addClass(settings.paginationClass);
        switch (settings.position) {
          case 'top':
            $pageination.insertBefore($table);
            break;
          case 'bottom':
          default:
            $pageination.insertAfter($table);
        }

        var clickPagination = function( i ){
          return function(){
          $pageination.find('li').removeClass('current');
          showPage(i);
          }
        }

        for (var i = 1; i <= pages; i++) {
          $('<li/>').text(i).click(clickPagination(i)).appendTo($pageination);
        }

        if(settings.showAllButton) {
          $('<li/>').text("Alle").click(function () {
            showPage(0);
          }).appendTo($pageination);
        }

        showPage(settings.initPage);
      }

      function showPage(pageNum) {
        pageNum = pageNum - 1; // working 0 based

        $pageination.find('li').removeClass('current');
        
        if(pageNum == -1) { // for displaying all rows
          $rows.show();
          $pageination.find('li:last-child').addClass('current');
          return;
        }
        if (pageNum < 0) {
          pageNum = 0;
        }
        if (pageNum > pages) {
          pageNum = pages;
        }
        
        var from = pageNum;
        var to = settings.perPage -1;
        
        if(pageNum > 0) {
          from = from * settings.perPage;
        }
        
        $pageination.find('li:eq(' + pageNum + ')').addClass('current');
        
        $rows.hide().filter(':eq(' + from + '), :gt(' + from + '):lt(' + to + ')').show();

      }
    });
  };
}(jQuery));
