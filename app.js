$(document).ready(function () {
	let isCardVisible = false;

	$('.container').click(function () {
		if (!isCardVisible) {
			$('.card').stop().animate(
				{
					top: '-90px',
				},
				'slow'
			);
		} else {
			$('.card').stop().animate(
				{
					top: 0,
				},
				'slow'
			);
		}
		isCardVisible = !isCardVisible;
	});
});
