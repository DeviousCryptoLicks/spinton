
$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
         * sc - в переменную заносим информацию о том, к какому блоку надо перейти
         * dn - определяем положение блока на странице
         */

        $('html, body').animate({
            scrollTop: dn
        }, 1000);

        /*
         * 1000 скорость перехода в миллисекундах
         */
    });
});


$(document).ready(function () {
  var wheel = $("#wheel");
  var spinButton = $("#spin-button");
  var spinDuration = 9000; // 3 seconds
  var spinAngle = 1080; // degrees
  var modal = $(".modal"); // селектор для элемента с классом modal
  var hasSpun = localStorage.getItem("hasSpun"); // проверяем, был ли уже нажат спин

  if (!hasSpun) {
    spinButton.on("click", function () {
      wheel.css("transition", "transform " + spinDuration + "ms ease-in-out");
      wheel.css("transform", "rotate(" + spinAngle + "deg)");
      setTimeout(function () {
        wheel.css("transition", "none");
        wheel.css("transform", "rotate(0deg)");
      }, spinDuration);

      // добавляем класс modal_active к элементу с классом modal через 15 секунд
      setTimeout(function () {
        modal.addClass("modal_active");
      }, 10000);

      // сохраняем информацию о том, что спин был нажат
      localStorage.setItem("hasSpun", true);
    });
  } else {
    // если спин уже был нажат, добавляем класс modal_active сразу
    modal.addClass("modal_active");
  }
});
