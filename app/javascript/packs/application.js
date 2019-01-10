/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import 'bootstrap';
import 'aos/dist/aos.css'

import 'slick-carousel';
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'

import '../components/slick';
import '../components/aos';
import '../components/video';

import { loadDynamicBannerText } from '../components/banner';
// loadDynamicBannerText();

var AOS = require('aos');
AOS.init();


console.log('Hello World from Webpacker')
