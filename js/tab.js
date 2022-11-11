$(document).ready(function(){
  $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
      $('ul.tabs li').removeClass('activeTab');
      $('.tab-content').removeClass('activeTab');
      $(this).addClass('activeTab');
      $("#"+tab_id).addClass('activeTab');
  })
})