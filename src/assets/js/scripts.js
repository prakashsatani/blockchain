 function openModalClient() {
   document.getElementById("clientModal").style.display = "block";
 }

 function closeModalClient() {
   document.getElementById("clientModal").style.display = "none";
 }

 var slideIndexClient = 1;
 showSlidesClient(slideIndexClient);

 function plusSlidesClient(n) {
   showSlidesClient(slideIndexClient += n);
 }

 function currentSlideClient(n) {
   showSlidesClient(slideIndexClient = n);
 }
jQuery(document).on('click', '.client .item', function () {
  slideIndexClient = jQuery(this).data('id') + 1;
  showSlidesClient(slideIndexClient);
  document.getElementById("clientModal").style.display = "block";
})
 function showSlidesClient(n) {
   var i;
   var slides = document.getElementsByClassName("mySlidesClient");
   var alt = document.getElementsByClassName("imgCaptionClient");
   var captionText = document.getElementById("captionClient");
   var captionContent = document.getElementById("captionContentClient");
   if (n > slides.length) {slideIndexClient = 1}
   if (n < 1) {slideIndexClient = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   if(slides[slideIndexClient-1] != undefined && alt[slideIndexClient-1] != undefined) {
     slides[slideIndexClient-1].style.display = "flex";
    //  captionText.innerHTML = alt[slideIndexClient-1].alt.split("/")[0];
    //  captionContent.innerHTML = alt[slideIndexClient-1].alt.split("/")[1] != undefined ? alt[slideIndexClient-1].alt.split("/")[1] : " ";
   }
 }

 function openModalPartner() {
   document.getElementById("partnerModal").style.display = "block";
 }

 function closeModalPartner() {
   document.getElementById("partnerModal").style.display = "none";
 }

 var slideIndexPartner = 1;
 showSlidesPartner(slideIndexPartner);

 function plusSlidesPartner(n) {
   showSlidesPartner(slideIndexPartner += n);
 }

 function currentSlidePartner(n) {
   showSlidesPartner(slideIndexPartner = n);
 }

 function showSlidesPartner(n) {
   var i;
   var slides = document.getElementsByClassName("mySlidesPartner");
   var alt = document.getElementsByClassName("imgCaptionPartner");
   var captionText = document.getElementById("captionPartner");
   var captionContent = document.getElementById("captionContentPartner");
   if (n > slides.length) {slideIndexPartner = 1}
   if (n < 1) {slideIndexPartner = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   if(slides[slideIndexPartner-1] != undefined && alt[slideIndexPartner-1] != undefined) {
     slides[slideIndexPartner-1].style.display = "flex";
     captionText.innerHTML = alt[slideIndexPartner-1].alt.split("/")[0];
     captionContent.innerHTML = alt[slideIndexPartner-1].alt.split("/")[1] != undefined ? alt[slideIndexPartner-1].alt.split("/")[1] : " ";
   }

 }


function setArrowOnHover(id) {
    $('#'+id).find("[id*=cardArrow]").removeClass('img-arrow-none');
    $('#'+id).find("#cardArrow").addClass('img-arrow-show');
}

function removeArrowOnHover(id) {
    $('#'+id).find("#cardArrow").addClass('img-arrow-none');
    $('#'+id).find("[id*=cardArrow]").removeClass('img-arrow-show');
}
var $owl = $('.carouselTestimonial');
if($owl){
  setTimeout(function () {
    $owl.children().each( function( index ) {
			$(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
		});

		$owl.owlCarousel({
			center: true,
			loop: false,
			items: 5,
		});

		$(document).on('click', '.owl-item>div', function() {
			var $speed = 300;  // in ms
			$owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
		});
    $owl.on('changed.owl.carousel', function(event) {
      var current = event.page.index;
      $('.testimonial-text').hide('slide');
      $('.testimonial-text.review-'+current).show('slide');
  })
  },1000);
}

//     var multiItemSlider = (function () {
//       return function (selector, config) {
//         var
//           _mainElement = document.querySelector(selector), // основный элемент блока
//           _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
//           _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
//           _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
//           _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
//           _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
//           _wrapperWidth = parseFloat(window.getComputedStyle(_sliderWrapper).width), // ширина обёртки
//           _itemWidth = parseFloat(window.getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
//           _positionLeftItem = 0, // позиция левого активного элемента
//           _transform = 0, // значение транфсофрмации .slider_wrapper
//           _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
//           _items = []; // массив элементов

//         // наполнение массива _items
//         _sliderItems.forEach(function (item, index) {
//           _items.push({ item: item, position: index, transform: 0 });
//         });

//         var position = {
//           getItemMin: function () {
//             var indexItem = 0;
//             _items.forEach(function (item, index) {
//               if (item.position < _items[indexItem].position) {
//                 indexItem = index;
//               }
//             });
//             return indexItem;
//           },
//           getItemMax: function () {
//             var indexItem = 0;
//             _items.forEach(function (item, index) {
//               if (item.position > _items[indexItem].position) {
//                 indexItem = index;
//               }
//             });
//             return indexItem;
//           },
//           getMin: function () {
//             return _items[position.getItemMin()].position;
//           },
//           getMax: function () {
//             return _items[position.getItemMax()].position;
//           }
//         }

//         var _transformItem = function (direction) {
//           var nextItem;
//           if (direction === 'right') {
//             _positionLeftItem++;
//             if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
//               nextItem = position.getItemMin();
//               _items[nextItem].position = position.getMax() + 1;
//               _items[nextItem].transform += _items.length * 100;
//               _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
//             }
//             _transform -= _step;
//           }
//           if (direction === 'left') {
//             _positionLeftItem--;
//             if (_positionLeftItem < position.getMin()) {
//               nextItem = position.getItemMax();
//               _items[nextItem].position = position.getMin() - 1;
//               _items[nextItem].transform -= _items.length * 100;
//               _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
//             }
//             _transform += _step;
//           }
//           _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
//         }

//         // обработчик события click для кнопок "назад" и "вперед"
//         var _controlClick = function (e) {
//           var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
//           e.preventDefault();
//           _transformItem(direction);
//         };

//         var _setUpListeners = function () {
//           // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
//           _sliderControls.forEach(function (item) {
//             item.addEventListener('click', _controlClick);
//           });
//         }

//         // инициализация
//         _setUpListeners();

//         return {
//           right: function () { // метод right
//             _transformItem('right');
//           },
//           left: function () { // метод left
//             _transformItem('left');
//           }
//         }

//       }
//     }());

//     var slider = multiItemSlider('.slider')

// $(window).resize(function () {
//   var slider = multiItemSlider('.slider')
// });
