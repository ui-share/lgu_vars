

$(document).ready(function() {
	//$(".custom-info.hasClear > .custom-inp").on("keydown keyup change", function(){
	//	var value = $(this).val();
	//	var visible = Boolean($this.val());
	//	if (value.length  < 10){
	//		$(".error-txt").removeClass("hidden")
	//		$(".error-txt").text("휴대폰 번호를 정확히 입력해주세요.");
	//	}
	//	else {
	//		$(".error-txt").addClass("hidden")
	//		$('.custom-info.hasClear .clear-btn').removeClass("hidden");
	//	} var regex = /^(01[0-9]{1}-?[0-9]{4}-?[0-9]{4}|01[0-9]{8})$/;
	//});
	$('#testtest').click(function(){
        $('.bellringMent-1').removeClass('hidden');
        $('body').addClass('openModal');
    });
	
	$(".custom-info.hasClear > .custom-inp").on("keydown keyup change", function(){
		var value = $(this).val();
		
		if (value.length  < 11){
			$(this).parents().next(".error-txt").removeClass("hidden")
			$(this).parents().next(".error-txt").text("휴대폰 번호를 정확히 입력해주세요.");
			}
		else {
			$(this).parents().next(".error-txt").addClass("hidden")
		}
	});
	// input clear
	$('.custom-info.hasClear > .custom-inp').on('input propertychange', function() {
		var $this = $(this);
		var visible = Boolean($this.val());
		$(this).siblings('.custom-info.hasClear .clear-btn').toggleClass('hidden', !visible);
	}).trigger('propertychange');

	$('.custom-info.hasClear .clear-btn').click(function() {
		$(this).siblings('.custom-info.hasClear  > .custom-inp').val('').trigger('propertychange').focus();
		$(this).addClass("hidden");
	});
	// modal close
	$('.pop-header .c-btn').click(function(){
		$('.popup ').addClass('hidden');
		$('#body').removeClass('openModal');
	});
	$('.pop-tit .c-btn').click(function(){
		$('.popup ').addClass('hidden');
		$('#body').removeClass('openModal');
	});
	$('.popup-header .c-btn').click(function(){
		$('.popup-wrapper ').addClass('hidden');
		$('#body').removeClass('openModal');
	});
	$('.page-wrapper .c-btn').click(function(){
		$('#scenario').removeClass('active');
	});
	$('.page-wrapper .c-btn').click(function(){
		$('#scenario').removeClass('active');
	});
	$('.hk_popup-header .c-btn').click(function(){
		$('.hk_popup-wrapper').addClass('hidden');
	});

 	$("#ch01").change(function(){
		if($("#ch01").is(":checked")){
			$('.addPhoto').removeClass("hidden");
		}else{
			$('#photoDel_pop2').removeClass("hidden");

		}
	});
	$("#sh01").change(function(){
		if($("#sh01").is(":checked") == true){
			$('.addModel').removeClass("hidden");
			$('#modalSSSS').trigger('propertychange').focus();
		}
		else{
				$('#modelDel_pop').removeClass("hidden");
		}
	});

	$("#modalSSSS").on("keydown keyup change", function(){
		var value = $(this).val();
		if (value.length  < 3){
			$(".notify.progress").removeClass("hidden")
			$(".notify.type1.progress .text-special").text("모델명을 3자 이상 입력해주세요.");
		}
		else {
			$(".notify.progress").addClass("hidden")
			$('#modalSSS').removeClass("hidden");
		}
	});
	$('.b05 .clearerBT').click(function() {
		$(this).siblings('input.hasicon').val('').trigger('propertychange').focus();
		$('#modalSSS').addClass("hidden");
	});
 	$('#modelPic').click(function() {
   		$('#modalSSS').addClass("hidden");
		$('#modalSSSS').val('55EEG8A7L-NB_3');
		$('#productGr').val('TV / 프로젝터');
		$('#productCo').val('올레드');

	});
   $('#productPic').click(function() {
   		$('#selectP_pop').addClass("hidden");
		$('#productGr').val('모바일');
		$('#productCo').val('스마트폰');

	});
	$('#modelDel_pop #closePop').click(function(){
   		$('#modelDel_pop').addClass("hidden");
   		$('#modalSSSS').trigger('propertychange').focus();
	});
   $('#modelDel_pop #okPop').click(function(){
   		$('#modalSSSS').val('');
   		$('#modalSSSS').blur();
		$('.noticeModal').addClass('hidden');
		$('.addModel.searches').addClass('hidden');
		$('#modalSSS').addClass("hidden");
	});



   
   $('#photoDel_pop #closePop').click(function(){
   		$('#photoDel_pop').addClass("hidden");
   		$("#sh01").attr("checked", true);
   		$("#sh01 label:after").css("style = 'color: #a50034;'");
	});
   $('#photoDel_pop2 #closePop').click(function(){

   		$('#photoDel_pop2').addClass("hidden");
   		$("#ch01").attr("checked", true);
   		$("#ch01 label:after").css("color:","#a50034");
	});
   $('#photoDel_pop #okPop').click(function(){
   		$('#photoDel_pop').addClass("hidden");
   		$(".upload-display").remove();
		$(".upload-name").val("");
		$('.file-image').removeClass('on');

	});
   $('#photoDel_pop2 #okPop').click(function(){
   		$('#photoDel_pop2').addClass("hidden");
   		$('.upload-display').remove();
		$('.file-image').removeClass('on');
		$('.addPhoto').addClass('hidden');
		$('.upload-name').val('');
	});

  
   $('#select2').change(function() {
		var state = jQuery('#select2 option:selected').val();
		if ( state == 'option2' ) {
			$('#exampleGuide').removeClass("hidden");
		} else {
			$('#exampleGuide').addClass('hidden');
		}
	});

	$('.smile input[type=radio]').click(function()  {
	if ( $('.stars input[type=radio]:checked').val("") ) {
		$('.stars').addClass("survey_focus");
	}else{
			$('.stars').removeClass("survey_focus");
		}

	});
		

	$('.s01').ready(function()   {
		var stars = $('.stars input[type="radio"]');
		var stars = $('.stars input[type="radio"]');
		var idea = $('.idea textarea');
		idea.focus(function(){
			if ( $('.stars input[type="radio"type]:checked').val("") ) {
				$('.stars').addClass("survey_focus");
			}
			else{
				$('.stars').removeClass("survey_focus");
			}
		});

	});



   //b07
   $("#cg01").change(function(){
		if($("#cg01").is(":checked")){
			$('.etcInfo').removeClass("hidden");
		}else{
			$('.etcInfo').addClass('hidden');
		}
	});
   $(".b07#modalFullBody .button.special.fit").click(function () {
		$('b07.noticeModal').addClass('hidden');
	});
   $("#selectAdd").click(function () {
		$(location).attr('href','b06.html');
	});
   $("#nextb08").click(function () {
		$(location).attr('href','b08.html');
	});
   $("#acc01").click(function () {
		$('#acc01_pop').removeClass("hidden");
	});
   $("#acc02").click(function () {
		$('#acc02_pop').removeClass("hidden");
	});

//b20
	$('#fnMove').click(function(){

		var offset = $('.map-container').offset();
		$('.contents').animate({scrollTop : offset.top}, 400);

	});
	$("#waiting-state").click(function () {
		if($("#waiting-state").hasClass("off") === true) {
			$('#waiting-state').removeClass('off');
			/*$('.toggle-fold').addClass('hidden');
			$('.toggle-unfold').removeClass("hidden");*/
		}else{
			$('#waiting-state').addClass('off');
			/*$('.toggle-fold').removeClass('hidden');
			$('.toggle-unfold').addClass("hidden");*/
		}
	});





  



   $("#nextb09").click(function () {
		$(location).attr('href','b09.html');
	});

   $(".dateChoiceBtn").click(function () {

	if($(".dateChoiceBtn.active").length) {
			$(".dateChoiceBtn").removeClass('active');
		} else {
			$(this).addClass('active');
		}
	$(this).addClass('active');
	$(".dateSelect .foldBT").addClass('hidden');
	$(".dateSelect .unfoldBT").removeClass("hidden");
	$('.scheduleSelect.dateSelect').addClass('unfolder');
	$(".timeSelect .unfoldBT").addClass('hidden');
	$(".timeSelect .foldBT").removeClass("hidden");
	$('.section.formDetail.scheduleSelect.timeSelect').removeClass('unfolder');

	});
   $(".timeChoiceBtn").click(function () {
	if($(".timeChoiceBtn.active").length) {
			$(".timeChoiceBtn").removeClass('active');
		} else {
			$(this).addClass('active');
		}
	$(this).addClass('active');
	});
	$(".seChoiceBtn").click(function () {
		if($(".seChoiceBtn.active").length) {
				$(".seChoiceBtn").removeClass('active');
			} else {
				$(this).addClass('active');
			}
		$(this).addClass('active');
		});


	$("#qr-info").click(function () {
		if($("#qr-info").hasClass("off") === true) {
			$('#qr-info').removeClass('off');
			// $('.cateSelect').addClass('hidden');
			// $('.cateSelect').removeClass("hidden");
		}else{
			$('#qr-info').addClass('off');
			// $('.cateSelect').removeClass('hidden');
			// $('.cateSelect').addClass("hidden");
		}
	});





	// 눈콜봇 ----------------------------------------------------------------------------

	// 아코디언 안내
	//$(".d-accoBox > .accordion-header").click(function(){
	//	if($(this).parent(".d-accoBox").hasClass("acco-active") == true){
	//		$('.d-accoBox').removeClass("acco-active");
			// $(this).next(".accordion-body").slideToggle(200);
			// $(this).parent(".d-accoBox").siblings(".d-accoBox").children(".accordion-body").slideUp(200);
			
	//	}
	//	else{
	//		$(this).parent('.d-accoBox').addClass('acco-active');
			// $(this).next(".accordion-body").slideToggle(200);
			// $(this).parent(".d-accoBox").siblings(".d-accoBox").removeClass("acco-active");
	//	}
	//});

	

	// 탭
	
	$(".dx-tab > a").click(function(){		
		if($(this).hasClass("active") == false){
			$(this).addClass("active");
	 		$(this).parent(".dx-tab").siblings(".dx-tab").children("a").removeClass("active");
			 $(".tab").toggleClass("hidden");
	 	}
		 else{
			
		}
	 });
	 $(".moreBtn").click(function () {	
		$(this).addClass("hidden");	
		if($(".tab .item").hasClass("hidden") == true){
			$('.tab .item').removeClass("hidden");			
		}
		
	});
	
	 

	$("#addOpen").click(function () {
		$('#addOpen-pop').removeClass("hidden");
		if($("#body").hasClass("openModal") == true){
			$('#body').removeClass("openModal");
			
		}
		else{
			$('#body').addClass('openModal');
		}
	});
	
	$(".cd0003 .calendar").click(function () {
		
		
			$('#pop01').removeClass("hidden");
			if($("#body").hasClass("openModal") == true){
				$('#body').removeClass("openModal");
				
			}
			else{
				$('#body').addClass('openModal');
			}
		

	});
	$("#cancel01").click(function () {
		
			$('#cancel01-pop').removeClass("hidden");
			if($("#body").hasClass("openModal") == true){
				$('#body').removeClass("openModal");
				
			}
			else{
				$('#body').addClass('openModal');
			}
		

	});

	$(".find-btn").click(function () {		
		
		
		$('.find-btn-open').removeClass("hidden");
		
	

	});


	// 해외로밍 부가서비스
	// 데이터로밍차단 신청하기
	$(".dataroaming-1 .d-bt").click(function () {			
		$('.rmcomfirm-1').removeClass("hidden");
	});
	// 데이터로밍차단 신청 확인
	$(".rmcomfirm-1 .d-bt ").click(function () {			
		$('.dataroaming-3').removeClass("hidden");
	});
	// 데이터로밍차단 신청 완료
	$(".rmcomfirm-1 .d-bt ").click(function () {			
		$('.dataroaming-3').removeClass("hidden");
	});

	// 데이터로밍차단 해지하기
	$(".dataroaming-2 .d-bt").click(function () {			
		$('.rmcomfirm-2').removeClass("hidden");
	});		
	// 데이터로밍차단 해지 확인
	$(".rmcomfirm-2 .d-bt ").click(function () {			
		$('.dataroaming-4').removeClass("hidden");
	});	

	// 데이터로밍차단 신청/해지 완료
	$(".dataroaming-3 .d-bt ").click(function () {			
		$('.popup-wrapper').addClass('hidden');
	});
	$(".dataroaming-4 .d-bt ").click(function () {			
		$('.popup-wrapper ').addClass('hidden');
	});



	
	// 음성로밍차단 신청하기
	$(".voiceroaming-1 .d-bt").click(function () {			
		$('.rmcomfirm-3').removeClass("hidden");
	});
	// 음성로밍차단 해지하기
	$(".voiceroaming-2 .d-bt").click(function () {			
		$('.rmcomfirm-4').removeClass("hidden");
	});
	// 음성로밍차단 신청 확인
	$(".rmcomfirm-3 .d-bt").click(function () {			
		$('.voiceroaming-3').removeClass("hidden");
	});
	// 음성로밍차단 해지 확인
	$(".rmcomfirm-4 .d-bt").click(function () {			
		$('.voiceroaming-4').removeClass("hidden");
	});


	// 음성로밍차단 신청/해지 완료
	$(".voiceroaming-3 .d-bt").click(function () {			
		$('.popup-wrapper').addClass('hidden');
	});
	$(".voiceroaming-4 .d-bt").click(function () {			
		$('.popup-wrapper ').addClass('hidden');
	});
	$(".g-line").click(function () {			
		$('.popup-wrapper ').addClass('hidden');
		
	});




	// check-history
	

	$(".check-history .select-form").on("change", function(){
		//selected value
		$(this).val();
		$("option:selected", this).attr("value");
		//selected option element
		$("option:selected", this);
		$("option:selected", this).text();
		$(this).find("option:selected").text();
	});









	
	$("#start").click(function () {			
		$('#scenario').addClass('active');
		
	});
	
	$("#roaming2").click(function () {			
		$('#roaming2-2').removeClass('hidden');
		
	});

	
	$("#multiMenu").click(function () {			
		$('#multipopUp').addClass('popUpActive');
		
	});
	$("#rp0001").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'rp0001.html');
	});
	$("#rp0002").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'rp0002.html');
	});
	$("#rp0003").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'rp0003.html');
	});
	$("#rp0004").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'rp0004.html');
	});
	$("#rp0005").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'rp0005.html');
	});
	$("#rp0006").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'rp0006.html');
	});




	$("#mr0001").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'mr0001.html');		
		
	});	
	$("#mr0002").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'mr0002.html');		
		
	});


	$("#rp0007").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'rp0007.html');		
		
	});
	
	$("#mr0002").click(function () {			
		$('#multipopUp').removeClass('popUpActive');
		$('#scenframe').attr('src', 'mr0002.html');		
		
	});


	// IPTV요금제

	$("#tp01").click(function () {			
		$('#tp01_p').removeClass('hidden');
		$('#body').addClass('openModal');		
		
	});
	$("tp01_pa").click(function () {			
		$('#tp01_p').addClass('hidden');		
		
	});
	$("tp02_pa").click(function () {			
		$('#tp02_p').addClass('hidden');		
		
	});
	$("#tp02").click(function () {			
		$('#tp02_p').removeClass('hidden');
		$('#body').addClass('openModal');		
		
	});
	$("#tp03").click(function () {			
		$('#tp03_p').removeClass('hidden');
		$('#body').addClass('openModal');		
		
	});
	$("#tp04").click(function () {			
		$('#tp04_p').removeClass('hidden');
		$('#body').addClass('openModal');		
		
	});
	$("#tp05").click(function () {			
		$('#tp05_p').removeClass('hidden');
		$('#body').addClass('openModal');		
		
	});
	$("#tp06").click(function () {			
		$('#tp06_p').removeClass('hidden');
		$('#body').addClass('openModal');		
		
	});
	$("#tp07").click(function () {			
		$('#tp06_p').removeClass('hidden');
		$('#body').addClass('openModal');		
		
	});

	$("#bd01").click(function () {			
		$('#bd01_p').removeClass('hidden');
		$('#body').addClass('openModal');		
		
	});


	
	
	$(".arrow_ico").click(function () {
		if($(".multi_service_menu").hasClass("active") === true) {
			$('.multi_service_menu').removeClass('active');
			$('.multi_service_menu').addClass('defult');
		}else{
			$('.multi_service_menu').removeClass('defult');
			$('.multi_service_menu').addClass('active');
		}
	});

});
