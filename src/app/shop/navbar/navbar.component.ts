import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      var flag = false;
      var ajax_search_enable = $('#ajax-search-enable').val();

      var current_cate_value = $('ul.cate-items li.selected').data('value');
      var current_cate_text = $('ul.cate-items li.selected').html();

      $('.cate-selected').attr('data-value', current_cate_value);
      $('.cate-selected').html(current_cate_text);

      $('.hover-cate p').click(function () {
        $(".cate-items").slideToggle("slow");
        $(".cate-items").addCss('display', 'block');
      });

      $('.ajax-result-container').hover(
        function () {
          flag = true;
        },
        function () {
          flag = false;
        }
      );

      $('.hover-cate').hover(
        function () {
          flag = true;
        },
        function () {
          flag = false;
        }
      );

      $('#search-by-category').focusout(function () {
        if (flag == true) {
          $('.ajax-result-container').show();
        } else {
          $('.ajax-result-container').hide();
        }
      });

      $('#search-by-category').focusin(function () {
        $('.ajax-result-container').show();
      });

      $('#text-search').keypress(function (e) {
        if (e.which == 13) {//Enter key pressed
          $('#btn-search-category').click();//Trigger search button click event
        }
      });


      $('#btn-search-category').click(function () {
        var url = '';
        var text_search = $('#text-search').val();
        if (text_search) {
          url += '&search=' + encodeURIComponent(text_search);
        }

        var category_search = $('.cate-selected').attr("data-value");
        if (category_search) {
          url += '&category_id=' + encodeURIComponent(category_search);
        }

        location.href = url;
      });

      if (ajax_search_enable == '1') {
        $('#text-search').keyup(function (e) {
          var text_search = $(this).val();
          var cate_search = $('.cate-selected').attr("data-value");
          if (text_search != null && text_search != '') {
            ajaxSearch(text_search, cate_search);
          } else {
            $('.ajax-result-container').html('');
            $('.ajax-loader-container').hide();
          }
        });

        $('ul.cate-items li.item-cate').click(function () {
          var cate_search = $(this).data('value');
          var text_search = $('#text-search').val();
          $('.cate-selected').attr('data-value', cate_search);
          $('.cate-selected').html($(this).html());
          if (text_search != null && text_search != '') {
            ajaxSearch(text_search, cate_search);
          } else {
            $('.ajax-result-container').html('');
            $('.ajax-loader-container').hide();
          }
          $(".cate-items").hide();
          $('#text-search').focus();
        });

      }

      function ajaxSearch(text_search, cate_search) {
        $.ajax({
          url: '',
          type: 'post',
          data: { text_search: text_search, cate_search: cate_search },
          beforeSend: function () {
            $('.ajax-loader-container').show();
          },
          success: function (json) {
            if (json['success'] == true) {
              $('.ajax-result-container').html(json['result_html']);
              $('.ajax-loader-container').hide();
            }
          }
        });
      }

  }
  
}