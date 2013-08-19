function menuSetup() {
	var menuproposta = $('#menuproposta'),
		menumetodologia = $('#menumetodologia'),
		menuinscricao = $('#menuinscricao'),
		menuestrutura = $('#menuestrutura'),
		menuimplementacao = $('#menuimplementacao');

	menuproposta.bind('click', function () {
		$( "#proposta" ).removeClass( "show" );
		$( ".proposta" ).addClass( "display" );

		$( "#metodologia" ).addClass( "show" );
		$( ".metodologia" ).removeClass( "display" );

		$( "#inscricao" ).addClass( "show" );
		$( ".inscricao" ).removeClass( "display" );

		$( "#estrutura" ).addClass( "show" );
		$( ".estrutura" ).removeClass( "display" );

		$( "#implementacao" ).addClass( "show" );
		$( ".implementacao" ).removeClass( "display" );
	});

	menumetodologia.bind('click', function () {
		$( "#proposta" ).addClass( "show" );
		$( ".proposta" ).removeClass( "display" );

		$( "#metodologia" ).removeClass( "show" );
		$( ".metodologia" ).addClass( "display" );

		$( "#inscricao" ).addClass( "show" );
		$( ".inscricao" ).removeClass( "display" );

		$( "#estrutura" ).addClass( "show" );
		$( ".estrutura" ).removeClass( "display" );

		$( "#implementacao" ).addClass( "show" );
		$( ".implementacao" ).removeClass( "display" );
	});

	menuinscricao.bind('click', function () {
		$( "#proposta" ).addClass( "show" );
		$( ".proposta" ).removeClass( "display" );

		$( "#metodologia" ).addClass( "show" );
		$( ".metodologia" ).removeClass( "display" );

		$( "#inscricao" ).removeClass( "show" );
		$( ".inscricao" ).addClass( "display" );

		$( "#estrutura" ).addClass( "show" );
		$( ".estrutura" ).removeClass( "display" );

		$( "#implementacao" ).addClass( "show" );
		$( ".implementacao" ).removeClass( "display" );
	});

	menuestrutura.bind('click', function () {
		$( "#proposta" ).addClass( "show" );
		$( ".proposta" ).removeClass( "display" );

		$( "#metodologia" ).addClass( "show" );
		$( ".metodologia" ).removeClass( "display" );

		$( "#inscricao" ).addClass( "show" );
		$( ".inscricao" ).removeClass( "display" );

		$( "#estrutura" ).removeClass( "show" );
		$( ".estrutura" ).addClass( "display" );

		$( "#implementacao" ).addClass( "show" );
		$( ".implementacao" ).removeClass( "display" );
	});

	menuimplementacao.bind('click', function () {
		$( "#proposta" ).addClass( "show" );
		$( ".proposta" ).removeClass( "display" );

		$( "#metodologia" ).addClass( "show" );
		$( ".metodologia" ).removeClass( "display" );

		$( "#inscricao" ).addClass( "show" );
		$( ".inscricao" ).removeClass( "display" );

		$( "#estrutura" ).addClass( "show" );
		$( ".estrutura" ).removeClass( "display" );

		$( "#implementacao" ).removeClass( "show" );
		$( ".implementacao" ).addClass( "display" );
	});
}

$(document).ready(function(){
	$('.scroll-pane').jScrollPane();
	$('.bxslider').bxSlider({
		auto: true,
		speed: 1000,
		pause: 12000
	});
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		$('.scroll-current').each(function(){
			$(this).removeClass('scroll-current');
			$(this).text($(this).attr('data-normal'));
		});
		$(this).addClass('scroll-current');
		$(this).text($(this).attr('data-active'));
	});
	menuSetup();
});

$(window).resize(function(){
	//$('.scroll-pane').jScrollPane();
	$('.bxslider').bxSlider();
});
