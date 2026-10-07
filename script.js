$(function(){
  $(".menu").on("click",function(){$(".site-nav nav").toggleClass("open")});
  $(".site-nav nav a").on("click",function(){$(".site-nav nav").removeClass("open")});
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
  $(".statement,.editorial,.split-story,.big-quote,.details>a,.resume-row,.bio-feature,.bio-cell,.strengths").addClass("reveal").each(function(){observer.observe(this)});
  $(window).on("scroll",function(){$(".site-nav").css("background",$(window).scrollTop()>30?"rgba(238,234,227,.96)":"rgba(238,234,227,.9)")});
});