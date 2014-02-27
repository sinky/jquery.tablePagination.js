/*
	tablePagination Plugin for jQuery (by Marco Krage)
	
	Version: 0.1
		
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
            paginationClass: 'tablePagination'
        }, options);

        return this.each(function () {
            var $table = $(this);
            var $rows = $table.find('tr:has(td)');

            if ($rows.length > settings.perPage) {
                var pages = Math.ceil($rows.length / settings.perPage);
                var pageCount = 1;
                $rows.each(function (i) {
                    if (i + 1 > settings.perPage * pageCount) {
                        pageCount++;
                    }
                    $(this).attr('data-page', pageCount);
                });

                var $pageination = $('<ol/>').addClass(settings.paginationClass);
                switch (settings.position) {
                    case 'top':
                        $pageination.insertBefore($table);
                        break;
                    case 'bottom':
                    default:
                        $pageination.insertAfter($table);
                }

                for (i = 1; i <= pages; i++) {
                    var pageNumber = $('<li/>').attr('data-page', i).text(i).appendTo($pageination);
                    pageNumber.click(function () {
                        showPage($(this).attr('data-page'));
                    });
                }
                showPage(settings.initPage);
            }

            function showPage(pageNum) {
                if (pageNum < 1) {
                    pageNum = 1;
                }
                if (pageNum > pages) {
                    pageNum = pages;
                }
                $rows.hide();
                $rows.filter('[data-page=' + pageNum + ']').show();
                $pageination.find('li').removeClass('current');
                $pageination.find('[data-page=' + pageNum + ']').addClass('current');
            }
        });
    };
}(jQuery));
