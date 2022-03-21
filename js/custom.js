$(document).ready(function () {
  subWrap()   //필수
  naviEvent() //필수
  iptFile()   //필수
  sweetAlert()
  displayRadio()
  timepicker()
  datepicker()
  tagsinput()
});

function subWrap() {
  //sub-wrap 슬라이드
  $('.sub-wrap').slideUp(0);
  $('.profile-wrap').on('mouseover',function(){
    $('.sub-wrap').slideDown()
  });
  $('.sub-wrap').on('mouseleave',function(){
    $(this).slideUp()
  });
}

function naviEvent() {
  //네비 사이즈 버튼
  $('.navbar-minimalize').click(function () {
    $('body').toggleClass('mini-navbar');
  });

  //반응형 사이즈 조절
  $(window).resize(function () {
    if (window.outerWidth > 992) {
      $('body').removeClass('mini-navbar');
    } else if (window.outerWidth < 992) {
      $('body').addClass('mini-navbar');
    } else if (window.outerWidth < 768) {
      $('body').removeClass('mini-navbar');
    } else if (window.outerWidth > 768) {
      $('body').addClass('body-small');
    }
  });

  //네비 서브메뉴 이벤트
  $('#side-menu > li').click(function () {
    $(this).find('.nav-second-level').toggleClass('in');
  });
}

function iptFile() {
  //파일명 추가
  $("input[type='file']").on('change', function () {
    $(this).next('.custom-file-label').html(event.target.files[0].name);
  })
}

function displayRadio() {
  if ($('input:radio[id=Y]').is(':checked')) {
    $('#booking').show();
  } else {
    $('#booking').hide();
  }
}

function timepicker() {
  $("#time").timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '9',
    maxTime: '6:00pm',
    defaultTime: '9',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: false
  });
  $("#st-time").timepicker({
    timeFormat: 'h:mm p',
    interval: 10,
    minTime: '8',
    maxTime: '9:00pm',
    defaultTime: '9',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: false
  });
  $("#ed-time").timepicker({
    timeFormat: 'h:mm p',
    interval: 10,
    minTime: '9',
    maxTime: '10:00pm',
    defaultTime: '10',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: false
  });
}

function datepicker() {
  $('#datepicker').datepicker({
    calendarWeeks: false,
    todayHighlight: true,
    autoclose: true,
    format: "yyyy/mm/dd",
    language: "kr"
  });
}

function sweetAlert() {
  //확인창
  $("#alert").click(function () {
    Swal.fire({
      icon: 'question',
      title: '푸시 발송 취소 확인',
      text: '푸시발송을 취소 하시겠습니까?',
      confirmButtonColor: '#1c84c6',
      confirmButtonText: '확인',
      showCancelButton: true,
      cancelButtonColor: '#ccc',
      cancelButtonText: '취소'
    });
  });

  //제한 팝업
  $("#confirm").click(function () {
    Swal.fire({
      icon: 'error',
      title: '대면일정 등록 제한',
      text: '2명 이상 대면평가 일정을 등록할 수 없습니다.',
      confirmButtonColor: '#1c84c6',
      confirmButtonText: '확인'
    });
  });
}
