// $(function() {
//   let mainbottom = $('#main').offset().top;
//
//   $(window).on('scroll', function() {
//     if (w > 580 && navbar.is(':hidden')) {
//       ('.navbar').addClass('past-main')
//     }
//   })
// })

$(document).on('click.nav', '.navbar-collapse.in', function(e) {
  if ($(e.target).is('a')) {
    $(this).removeClass('in').addClass('collapse')
  }
})
