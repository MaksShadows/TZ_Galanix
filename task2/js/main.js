
// Форматирование даты
function formatDate(d = new Date) {
    return [d.getDate(), d.getMonth()+1, d.getFullYear(), d.getHours(), d.getMinutes()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('.');
  }
  
 // Вывод количества изображений и даты
 function showImagesAndDate () {

    let  h1 = document.querySelector('.text')

    let imageLength = document.querySelector('.gallery').getElementsByClassName('gallery-item').length;
 
    

    h1.innerHTML = 'В галереи всего ' + imageLength + ' изображений. <br> Cегодня ' + formatDate();
};
showImagesAndDate()



$(document).ready(function() {

	// Показ изображения в полном размере
	(function () {
		$('.gallery-item').click(function() {
			var newHtml = $(this).parent().html();
			$('#wrapper').show();
			$('.close').show();
			$('.modal').show().html(newHtml);
			$('.modal > .delete').remove();
		});

		$('.close').click(function() {
			$('#wrapper').hide();
			$('.close').hide();
			$('.modal').hide();
		});
	})();

	// Удаление изображений из галереи
	$('.delete').click(function() {
		var item = $(this).siblings();
		item.css('visibility', 'hidden');
		$(this).hide(item);
	});
	
	// Восстановление изображений в галерею
	$('.btn').click(function() {
		$('*').css('visibility', 'visible');
	});

});