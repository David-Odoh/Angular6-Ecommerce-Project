import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery: any;
declare const jQuery: any;
declare const $: any;

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sliderCarousel();
    this.zoomProduct();
    this.relatedProducts();
  }

  // slider for product
  sliderCarousel() {
    $('#gallery_01').owlCarousel({
      itemsCustom: [
        [0, 2],
        [412, 3],
        [600, 4],
        [768, 3],
        [992, 3],
        [1200, 3],
        [1590, 4]
      ],
      autoPlay: 2000,
      // autoPlay: true,
      navigation: false,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      pagination: false
    });
  }
  //End - slider for product

  // zoom product start 
  zoomProduct() {
    if (jQuery(window).width() >= 1200) {
      //initiate the plugin and pass the id of the div containing gallery images
      $("#zoom_03").elevateZoom({ gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: '' });
      //pass the images to Fancybox
      $("#zoom_03").bind("click", function (e) {
        var ez = $('#zoom_03').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
      });
    }
  }
  // ZOOM END

  // Related Products
  relatedProducts() {
    $(document).ready(function () {
      $("#related").owlCarousel({
        itemsCustom: [
          [0, 1],
          [600, 2],
          [768, 2],
          [992, 3],
          [1200, 3],
          [1590, 4]
        ],
        // autoPlay: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        navigation: true,
        pagination: false
      });
    });
  }
  //End - Related Products
}


// <script type="text/javascript"><!--
// $('select[name=\'recurring_id\'], input[name="quantity"]').change(function(){
//   $.ajax({
//     url: 'index.php?route=product/product/getRecurringDescription',
//     type: 'post',
//     data: $('input[name=\'product_id\'], input[name=\'quantity\'], select[name=\'recurring_id\']'),
//     dataType: 'json',
//     beforeSend: function() {
//       $('#recurring-description').html('');
//     },
//     success: function(json) {
//       $('.alert-dismissible, .text-danger').remove();

//       if (json['success']) {
//         $('#recurring-description').html(json['success']);
//       }
//     }
//   });
// });
// //--></script>
// <script type="text/javascript"><!--
// $('#button-cart').on('click', function() {
//   $.ajax({
//     url: 'index.php?route=checkout/cart/add',
//     type: 'post',
//     data: $('#product input[type=\'text\'], #product input[type=\'hidden\'], #product input[type=\'radio\']:checked, #product input[type=\'checkbox\']:checked, #product select, #product textarea'),
//     dataType: 'json',
//     beforeSend: function() {
//       $('#button-cart').button('loading');
//     },
//     complete: function() {
//       $('#button-cart').button('reset');
//     },
//     success: function(json) {
//       $('.alert-dismissible, .text-danger').remove();
//       $('.form-group').removeClass('has-error');

//       if (json['error']) {
//         if (json['error']['option']) {
//           for (i in json['error']['option']) {
//             var element = $('#input-option' + i.replace('_', '-'));

//             if (element.parent().hasClass('input-group')) {
//               element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
//             } else {
//               element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
//             }
//           }
//         }

//         if (json['error']['recurring']) {
//           $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
//         }

//         // Highlight any found errors
//         $('.text-danger').parent().addClass('has-error');
//       }

//       if (json['success']) {
//         $('.breadcrumb').after('<div class="alert alert-success alert-dismissible">' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

//         $('#cart > button').html('<li><svg width="32px" height="31px"> <use xlink:href="#hcart"></use></svg></li><li class="text-left"><h1>my cart</h1><h2 id="cart-total">' + json['total'] + '</h2></li>');

//         $('html, body').animate({ scrollTop: 0 }, 'slow');

//         $('#cart > ul').load('indexd807.html?route=common/cart/info ul li');
//       }
//     },
//         error: function(xhr, ajaxOptions, thrownError) {
//             alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
//         }
//   });
// });
// //--></script> 
// <script type="text/javascript"><!--
// $('.date').datetimepicker({
//   language: 'en-gb',
//   pickTime: false
// });

// $('.datetime').datetimepicker({
//   language: 'en-gb',
//   pickDate: true,
//   pickTime: true
// });

// $('.time').datetimepicker({
//   language: 'en-gb',
//   pickDate: false
// });

// $('button[id^=\'button-upload\']').on('click', function() {
//   var node = this;

//   $('#form-upload').remove();

//   $('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');

//   $('#form-upload input[name=\'file\']').trigger('click');

//   if (typeof timer != 'undefined') {
//       clearInterval(timer);
//   }

//   timer = setInterval(function() {
//     if ($('#form-upload input[name=\'file\']').val() != '') {
//       clearInterval(timer);

//       $.ajax({
//         url: 'index.php?route=tool/upload',
//         type: 'post',
//         dataType: 'json',
//         data: new FormData($('#form-upload')[0]),
//         cache: false,
//         contentType: false,
//         processData: false,
//         beforeSend: function() {
//           $(node).button('loading');
//         },
//         complete: function() {
//           $(node).button('reset');
//         },
//         success: function(json) {
//           $('.text-danger').remove();

//           if (json['error']) {
//             $(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
//           }

//           if (json['success']) {
//             alert(json['success']);

//             $(node).parent().find('input').val(json['code']);
//           }
//         },
//         error: function(xhr, ajaxOptions, thrownError) {
//           alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
//         }
//       });
//     }
//   }, 500);
// });
// //--></script>
// <!--for product quantity plus minus-->
// <script type="text/javascript">
//     //plugin bootstrap minus and plus
//     $(document).ready(function() {
//     $('.btn-number').click(function(e){
//     e.preventDefault();
//     var fieldName = $(this).attr('data-field');
//     var type = $(this).attr('data-type');
//     var input = $("input[name='" + fieldName + "']");
//     var currentVal = parseInt(input.val());
//     if (!isNaN(currentVal)) {
//     if (type == 'minus') {
//     var minValue = parseInt(input.attr('min'));
//     if (!minValue) minValue = 1;
//     if (currentVal > minValue) {
//     input.val(currentVal - 1).change();
//     }
//     if (parseInt(input.val()) == minValue) {
//     $(this).attr('disabled', true);
//     }

//     } else if (type == 'plus') {
//     var maxValue = parseInt(input.attr('max'));
//     if (!maxValue) maxValue = 999;
//     if (currentVal < maxValue) {
//     input.val(currentVal + 1).change();
//     }
//     if (parseInt(input.val()) == maxValue) {
//     $(this).attr('disabled', true);
//     }

//     }
//     } else {
//     input.val(0);
//     }
//     });
//     $('.input-number').focusin(function(){
//     $(this).data('oldValue', $(this).val());
//     });
//     $('.input-number').change(function() {

//     var minValue = parseInt($(this).attr('min'));
//     var maxValue = parseInt($(this).attr('max'));
//     if (!minValue) minValue = 1;
//     if (!maxValue) maxValue = 999;
//     var valueCurrent = parseInt($(this).val());
//     var name = $(this).attr('name');
//     if (valueCurrent >= minValue) {
//     $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
//     } else {
//     alert('Sorry, the minimum value was reached');
//     $(this).val($(this).data('oldValue'));
//     }
//     if (valueCurrent <= maxValue) {
//     $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
//     } else {
//     alert('Sorry, the maximum value was reached');
//     $(this).val($(this).data('oldValue'));
//     }
//     });
//     $(".input-number").keydown(function (e) {
//     // Allow: backspace, delete, tab, escape, enter and .
//     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== - 1 ||
//             // Allow: Ctrl+A
//                     (e.keyCode == 65 && e.ctrlKey === true) ||
//                     // Allow: home, end, left, right
//                             (e.keyCode >= 35 && e.keyCode <= 39)) {
//             // let it happen, don't do anything
//             return;
//             }
//             // Ensure that it is a number and stop the keypress
//             if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//             e.preventDefault();
//             }
//             });
//     });
// </script>

// <script type="text/javascript"><!--
// $('#review').delegate('.pagination a', 'click', function(e) {
//     e.preventDefault();

//     $('#review').fadeOut('slow');

//     $('#review').load(this.href);

//     $('#review').fadeIn('slow');
// });

// $('#review').load('index35eb.html?route=product/product/review&amp;product_id=42');

// $('#button-review').on('click', function() {
//   $.ajax({
//     url: 'index.php?route=product/product/write&product_id=42',
//     type: 'post',
//     dataType: 'json',
//     data: $("#form-review").serialize(),
//     beforeSend: function() {
//       $('#button-review').button('loading');
//     },
//     complete: function() {
//       $('#button-review').button('reset');
//     },
//     success: function(json) {
//       $('.alert-dismissible').remove();

//       if (json['error']) {
//         $('#review').after('<div class="alert alert-danger alert-dismissible"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
//       }

//       if (json['success']) {
//         $('#review').after('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + '</div>');

//         $('input[name=\'name\']').val('');
//         $('textarea[name=\'text\']').val('');
//         $('input[name=\'rating\']:checked').prop('checked', false);
//       }
//     }
//   });
// });

// $(document).ready(function() {
//   $('.thumbnails').magnificPopup({
//     type:'image',
//     delegate: 'a',
//     gallery: {
//       enabled: true
//     }
//   });
// });
// //--></script>
// <!-- related -->
// <script type="text/javascript">
//     $(document).ready(function() {
//     $("#related").owlCarousel({
//     itemsCustom : [
//     [0, 1],
//     [600, 2],
//     [768, 2],
//     [992, 3],
//     [1200, 3],
//     [1590, 4]
//     ],
//       // autoPlay: 1000,
//       navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
//       navigation : true,
//       pagination:false
//     });
//     });
// </script>
// <!-- related over -->
// <!-- zoom product start -->
// <!-- zoom product start -->
// <script>
//      if (jQuery(window).width() >= 1200){
//         //initiate the plugin and pass the id of the div containing gallery images
//             $("#zoom_03").elevateZoom({gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: ''});
//         //pass the images to Fancybox
//             $("#zoom_03").bind("click", function (e) {
//             var ez = $('#zoom_03').data('elevateZoom');
//             $.fancybox(ez.getGalleryList());
//             return false;
//             });
//     }
// </script>
// <!--ZOOM END-->

// <!--slider for product-->
// <script type="text/javascript"><!--
// $('#gallery_01').owlCarousel({
//   itemsCustom : [
//         [0, 2],
//         [412, 3],
//         [600, 4],
//         [768, 3],
//         [992, 3],
//         [1200, 3],
//         [1590, 4]
//         ],
//    autoPlay: 1000,
//   autoPlay: true,
//   navigation: false,
//   navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
//   pagination: false
// });
// --></script>
// <!--over slider for product-->


// <footer>

// <div class="container">
//   <div class="row">
//     <div class="newsletter col-xs-12">
//       <div class="webi-newsletter  webi-newsletter row" id="newsletter_5b3f6f928ec24" data-mode="default">
// 		<form id="formNewLestter" method="post" action="https://opencart.webiarch.com/OC0004/OCES02/index.php?route=extension/module/webinewsletter/subscribe" class="formNewLestter" >
// 			<div class="inner">
// 				<!-- <h3 >Newsletter</h3> -->
// 				<div class="description-top col-lg-6 col-md-6 col-sm-6  col-xs-12 bestlc hidden-xs">
// 					<p>																															<ul class="list-inline">														
//     <li class="d-inline-block float-xs-left send-btn hidden-md-down"><svg width="35px" height="35px">
//             <use xlink:href="#send"></use>
//           </svg></li>
//     <li class="d-inline-block">
//       <h2>sign up for newsletter</h2>
//       <h3 class="hidden-md-down">wants to get latest updates!sign up for free.</h3>
//     </li>
// 		</ul>												
// 														</p>
// 				</div>
// 				<div class="col-lg-6 col-md-6 col-sm-6  col-xs-12 bestrc">
// 				<div class="form-group">
// 					<input type="text" class="form-control input-md inputNew"  onblur="javascript:if(this.value=='')this.value='Your email address';" onfocus="javascript:if(this.value=='Your email address')this.value='';" value="Your email address" size="18" name="email">
// 				</div>
// 				<div class="button-submit">
// 					<button type="submit" name="submitNewsletter" class="btn btn-danger">Subscribe</button>
// 				</div>	
// 				<input type="hidden" value="1" name="action">
// 				<div class="valid"></div>
// 				<div class="description-bottom">
// 				</div>
// 			</div>
// 			</div>
// 		</form>
// </div>
// <script type="text/javascript"><!--
// $("#newsletter_5b3f6f928ec24").webiNewsletter().work(  'Email is not valid!' );
// --></script>

//     </div>
//     </div>
// </div>
//   <div class="container">
//     <div class="row middle-footer">

//     <aside id="column-left1" class="col-sm-12 col-md-3 col-xs-12">
//     <div>  <div class="footleft">
// <h5>about us</h5>
// <p>Maecenas non egestas tellus. Praesent egestas elit a eros molestie bibendum. Etiam aliquam ipsum at luctus pretium. Duis mauris nisl.</p>
// <br>
// <h5 class="hidden-xs">follow us</h5>
// <ul class="list-inline list-unstyled">
//  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
//     <li><a href="#"><i class="fa fa-twitter"></i></a></li>
//     <li><a href="#"><i class="fa fa-instagram"></i></a></li>
//     <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
// </ul>
// </div></div>
// <script type="text/javascript">
//     $(document).ready(function() {
//     $("#testi").owlCarousel({
//     itemsCustom : [
//     [0, 1],
//     [600, 1],
//     [768, 1]
//     ],
//       // autoPlay: 1000,
//       navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
//       navigation : false,
//       pagination:true
//     });
//     });
// </script>