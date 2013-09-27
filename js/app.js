// The application specific JS goes in here

(function () {
  $.ajax({
    url: "stats.json"
  }).done(function (data) {
    var dom = "";

    // @TODO:
    // 0. Turn this into a for..of loop
    // 1. Use arrow-function for components' weight
    for (var i in data) {
      var item = data[i];

      dom += '<tr id="' + item.email + '">' +
        '<td><img class="avatar" src="http://www.gravatar.com/avatar/' + item.gravatar + '?s=48"></td>' +
        '<td><a href="#">' + item.name + '</a></td>' +
        '<td align="center"><span class="badge assigned" value="' + item.bugzilla.assigned + '">' + item.bugzilla.assigned + '</span></td>' +
        '<td align="center"><span class="badge fixed" value="' + item.bugzilla.fixed + '">' + item.bugzilla.fixed + '</span></td>' +
        '<td align="center">' + item.level + '</td>' +
        '<td align="right" class="component">' + JSON.stringify(item.components) + '</td>' +
        '</tr>';
    }

    $("#list").append(dom);
  }).fail(function (error) {
    console.log(error);
  });
})();
