$(function() {

  // your code will go here

  $.ajax({
  url: 'https://www.codeschool.com/users/MagerTom.json',
  dataType: 'jsonp',
  success: function(data) {
    // handle response
    populateWithCourses(data.courses.completed);
    populateWithBadges(data.badges);


  }
  });

  function populateWithCourses(courses) {

    var $courses = $('#courses');

    courses.forEach(function(course) {
      $div = $('<div />', {
        'class': 'course'
      }).appendTo($courses);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

  function populateWithBadges(badges) {

    var $badges = $('#badges');

    badges.forEach(function(badge) {
      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: badge.name
      }).appendTo($div);

      $('<img />', {
        src: badge.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: badge.course_url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

});
