$(document).ready(function () {
  var calendar = new tui.Calendar(document.getElementById('calendar'), {
    defaultView: 'month',
    month: {
      daynames: ['일', '월', '화', '수', '목', '금', '토'],
      startDayOfWeek: 0,
    },
    taskView: true,
    scheduleView: true,
    useCreationPopup: true, //일정 생성 팝업
    useDetailPopup: true, //일정 상세보기 팝업
    template: {
      milestone: function (schedule) {
        return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
      },
      milestoneTitle: function () {
        return 'Milestone';
      },
      task: function (schedule) {
        return '&nbsp;&nbsp;#' + schedule.title;
      },
      taskTitle: function () {
        return '<label><input type="checkbox" />Task</label>';
      },
      allday: function (schedule) {
        return schedule.title + ' <i class="fa fa-refresh"></i>';
      },
      alldayTitle: function () {
        return 'All Day';
      },
      time: function (schedule) {
        return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
      },
      
    },
  });
});