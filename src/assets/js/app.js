import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

$(document).foundation();

//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js

//=require slick.min.js

;(function($){
    // slow scroll start
        $('a[href*="#"]').on('click', function(){
            event.preventDefault();
            $('body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 400);
        });
    //slow scroll end
    
    // map function start
        function initMap() {
            var mapCenter = {lat: -7.962774, lng: 112.618478};
            var mapDiv = document.getElementById('ba-map');
            if(mapDiv === null) return;
    
            var map = new google.maps.Map(document.getElementById('ba-map'), {
                zoom: 14,
                center: mapCenter,
                disableDefaultUI: true
            });
        }
    
        window.onload = initMap;
    //markers function end
    
    //centerMap function start
        function centerMap($markers, map) {
            if ($markers.length == 1) {
                let lat = $markers.data('lat');
                let lng = $markers.data('lng');
                let latLng = new google.maps.LatLng( lat, lng );
                map.setCenter(latLng);
            } else {
                let bounds = new google.maps.LatLngBounds();
                $markers.each( function() {
                    let lat = $(this).data('lat');
                    let lng = $(this).data('lng');
                    let latLng = new google.maps.LatLng( lat, lng );
                    bounds.extend(latLng);
                });
                map.fitBounds(bounds);
            }
        }
    //centerMap function end
    
    //slider start & create map
        $(window).on('load', function(){
            $('.ba-works-slider').slick({
                dots: false,
                arrows: true,
                slide: '.ba-works-slide',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                prevArrow: '.ba-slider--prev',
                nextArrow: '.ba-slider--next'
            });
    
            $('.ba-team-slider').slick({
                dots: false,
                arrows: false,
                slide: '.ba-team__box',
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1200,
                centerPadding: '50px',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ],
                prevArrow: '.ba-team-arrow--prev',
                nextArrow: '.ba-team-arrow--next'
            });
    
    
            createMap();
        });
        let header = $(".ba-header"),
            scrollTop;
    
        window.addEventListener('scroll', fixHeader);
    
        function fixHeader() {
            scrollTop = window.pageYOffset;
            console.log(scrollTop);
            if (scrollTop >= 50) {
                header.addClass('ba-stick');
            } else{
                header.removeClass('ba-stick');
            }
        }
    
        fixHeader();
    
    })(jQuery);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    