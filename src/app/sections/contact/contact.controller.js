(function () {
  'use strict';

  angular
    .module('front.contact')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController() {
    var vm = this;

    activate();

    function activate() {
      vm.map = {
        tiles: {
          name: 'Mapbox Park',
          url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
          type: 'xyz',
          options: {
            apikey: 'pk.eyJ1Ijoia2VwZW5uYXIiLCJhIjoiVl9UakZqayJ9.DdlQRSLK7rpwQwyQszLyOg',
            mapid: 'mapbox.light'
          }
        },
        zenika: {
          lat: 48.1139121,
          lng: -1.678973,
          zoom: 15
        },
        markers: {
          current: {
            lat: 48.1114695,
            lng: -1.6847242,
            focus: true,
            title: 'Current',
            message: '18, rue de la Monnaie, 35000 RENNES',
          },
          next: {
            lat: 48.1148827,
            lng: -1.6741693,
            focus: true,
            title: 'Next',
            message: 'Place Saint-Mélaine 35000 Rennes'
          }
        }
      };
    }
  }
})();
