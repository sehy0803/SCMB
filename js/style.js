// 팝업 오픈및 가운데 정렬
function openPopup() {
  var popHeight = 142;
  var popWidth = 300;
  var winHeight = document.body.clientHeight;
  var winWidth = document.body.clientWidth;
  var winX = window.screenLeft;
  var winY = window.screenTop;
  var popX = winX + (winWidth - popWidth) / 2;
  var popY = winY + (winHeight - popHeight) / 2;
  window.open(
    "area-coordinates.html",
    "pop",
    "top=" +
      popY +
      ", left=" +
      popX +
      ",width=" +
      popWidth +
      ",height=" +
      popHeight +
      ", scrollbars=yes, resizable=yes"
  );
}
// 팝업 오픈및 가운데 정렬 end

// 맵 선택 버튼 그룹
$(document).ready(function () {
  $(".map-menu>button").click(function () {
    $(this).next("div").toggleClass("hide");
  });
});
// 맵 선택 버튼 그룹 end

// 좌측 콘텐츠(open, close)
$(document).ready(function () {
  $(".leftmenuArea").show();
  $(".siteMapBtn").click(function () {
    $(".siteMapBtn div").toggle();
    $(".leftmenuArea").animate(
      {
        width: "toggle",
      },
      210
    );
  });
});
// 좌측 콘텐츠(open, close) end

// 좌측메뉴
$(document).ready(function () {
  $(".link_navbar01").click(function () {
    $(this).toggleClass("active link_navbar01s");
    console.log($(this).hasClass("active link_navbar01s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar02").click(function () {
    $(this).toggleClass("active link_navbar02s");
    console.log($(this).hasClass("active link_navbar02s"));
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar03").click(function () {
    $(this).toggleClass("active link_navbar03s");
    console.log($(this).hasClass("active link_navbar03s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar04").click(function () {
    $(this).toggleClass("active link_navbar04s");
    console.log($(this).hasClass("active link_navbar04s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar05").click(function () {
    $(this).toggleClass("active link_navbar05s");
    console.log($(this).hasClass("active link_navbar05s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar06").click(function () {
    $(this).toggleClass("active link_navbar06s");
    console.log($(this).hasClass("active link_navbar01s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar07").click(function () {
    $(this).toggleClass("active link_navbar07s");
    console.log($(this).hasClass("active link_navbar07s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar08").click(function () {
    $(this).toggleClass("active link_navbar08s");
    console.log($(this).hasClass("active link_navbar08s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar09").click(function () {
    $(this).toggleClass("active link_navbar09s");
    console.log($(this).hasClass("active link_navbar09s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar10").click(function () {
    $(this).toggleClass("active link_navbar10s");
    console.log($(this).hasClass("active link_navbar10s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar01").removeClass("active link_navbar01s");
    $(".link_navbar11").removeClass("active link_navbar11s");
  });
  $(".link_navbar11").click(function () {
    $(this).toggleClass("active link_navbar10s");
    console.log($(this).hasClass("active link_navbar10s"));
    $(".link_navbar02").removeClass("active link_navbar02s");
    $(".link_navbar03").removeClass("active link_navbar03s");
    $(".link_navbar04").removeClass("active link_navbar04s");
    $(".link_navbar05").removeClass("active link_navbar05s");
    $(".link_navbar06").removeClass("active link_navbar06s");
    $(".link_navbar07").removeClass("active link_navbar07s");
    $(".link_navbar08").removeClass("active link_navbar08s");
    $(".link_navbar09").removeClass("active link_navbar09s");
    $(".link_navbar10").removeClass("active link_navbar10s");
    $(".link_navbar01").removeClass("active link_navbar01s");
  });
});
// 좌측메뉴 end

// 맵 제어 버튼 그룹
$(document).ready(function () {
  $(".control_btn01").click(function () {
    $(this).toggleClass("control_btn01_active");
    console.log($(this).hasClass("control_btn01_active"));
    $(".control_btn02").removeClass("control_btn02_active");
    $(".control_btn03").removeClass("control_btn03_active");
    $(".control_btn04").removeClass("control_btn04_active");
    $(".control_btn05").removeClass("control_btn05_active");
    $(".control_btn06").removeClass("control_btn06_active");
    $(".control_btn07").removeClass("control_btn07_active");
  });
  $(".control_btn02").click(function () {
    $(this).toggleClass("control_btn02_active");
    console.log($(this).hasClass("control_btn02_active"));
    $(".control_btn01").removeClass("control_btn01_active");
    $(".control_btn03").removeClass("control_btn03_active");
    $(".control_btn04").removeClass("control_btn04_active");
    $(".control_btn05").removeClass("control_btn05_active");
    $(".control_btn06").removeClass("control_btn06_active");
    $(".control_btn07").removeClass("control_btn07_active");
  });
  $(".control_btn03").click(function () {
    $(this).toggleClass("control_btn03_active");
    console.log($(this).hasClass("control_btn03_active"));
    $(".control_btn02").removeClass("control_btn02_active");
    $(".control_btn01").removeClass("control_btn03_active");
    $(".control_btn04").removeClass("control_btn04_active");
    $(".control_btn05").removeClass("control_btn05_active");
    $(".control_btn06").removeClass("control_btn06_active");
    $(".control_btn07").removeClass("control_btn07_active");
  });
  $(".control_btn04").click(function () {
    $(this).toggleClass("control_btn04_active");
    console.log($(this).hasClass("control_btn04_active"));
    $(".control_btn02").removeClass("control_btn02_active");
    $(".control_btn03").removeClass("control_btn03_active");
    $(".control_btn01").removeClass("control_btn01_active");
    $(".control_btn05").removeClass("control_btn05_active");
    $(".control_btn06").removeClass("control_btn06_active");
    $(".control_btn07").removeClass("control_btn07_active");
  });
  $(".control_btn05").click(function () {
    $(this).toggleClass("control_btn05_active");
    console.log($(this).hasClass("control_btn05_active"));
    $(".control_btn02").removeClass("control_btn02_active");
    $(".control_btn03").removeClass("control_btn03_active");
    $(".control_btn04").removeClass("control_btn04_active");
    $(".control_btn01").removeClass("control_btn01_active");
    $(".control_btn06").removeClass("control_btn06_active");
    $(".control_btn07").removeClass("control_btn07_active");
  });
  $(".control_btn06").click(function () {
    $(this).toggleClass("control_btn06_active");
    console.log($(this).hasClass("control_btn06_active"));
    $(".control_btn02").removeClass("control_btn02_active");
    $(".control_btn03").removeClass("control_btn03_active");
    $(".control_btn04").removeClass("control_btn04_active");
    $(".control_btn05").removeClass("control_btn05_active");
    $(".control_btn01").removeClass("control_btn01_active");
    $(".control_btn07").removeClass("control_btn07_active");
  });
  $(".control_btn07").click(function () {
    $(this).toggleClass("control_btn07_active");
    console.log($(this).hasClass("control_btn07_active"));
    $(".control_btn02").removeClass("control_btn02_active");
    $(".control_btn03").removeClass("control_btn03_active");
    $(".control_btn04").removeClass("control_btn04_active");
    $(".control_btn05").removeClass("control_btn05_active");
    $(".control_btn06").removeClass("control_btn06_active");
    $(".control_btn01").removeClass("control_btn01_active");
  });
});
// 맵 제어 버튼 그룹 end

// 맵 선택 버튼 그룹01
$(document).ready(function () {
  $(".mChoice-Bbtn01").click(function () {
    $(this).toggleClass("mCB-active");
    console.log($(this).hasClass("mCB-active"));
    $(".mChoice-Bbtn02").removeClass("mCB-active");
  });
  $(".mChoice-Bbtn02").click(function () {
    $(this).toggleClass("mCB-active");
    console.log($(this).hasClass("mCB-active"));
    $(".mChoice-Bbtn01").removeClass("mCB-active");
  });
});

$(document).ready(function () {
  $(".mChoice-btn01").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn02").removeClass("mC-active");
    $(".mChoice-btn03").removeClass("mC-active");
  });
  $(".mChoice-btn02").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn01").removeClass("mC-active");
    $(".mChoice-btn03").removeClass("mC-active");
  });
  $(".mChoice-btn03").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn01").removeClass("mC-active");
    $(".mChoice-btn02").removeClass("mC-active");
  });
});

$(document).ready(function () {
  $(".mChoice-btn04").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn05").removeClass("mC-active");
    $(".mChoice-btn06").removeClass("mC-active");
    $(".mChoice-btn07").removeClass("mC-active");
    $(".mChoice-btn08").removeClass("mC-active");
    $(".mChoice-btn09").removeClass("mC-active");
    $(".mChoice-btn10").removeClass("mC-active");
  });
  $(".mChoice-btn05").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn04").removeClass("mC-active");
    $(".mChoice-btn06").removeClass("mC-active");
    $(".mChoice-btn07").removeClass("mC-active");
    $(".mChoice-btn08").removeClass("mC-active");
    $(".mChoice-btn09").removeClass("mC-active");
    $(".mChoice-btn10").removeClass("mC-active");
  });
  $(".mChoice-btn06").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn04").removeClass("mC-active");
    $(".mChoice-btn05").removeClass("mC-active");
    $(".mChoice-btn07").removeClass("mC-active");
    $(".mChoice-btn08").removeClass("mC-active");
    $(".mChoice-btn09").removeClass("mC-active");
    $(".mChoice-btn10").removeClass("mC-active");
  });
  $(".mChoice-btn07").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn05").removeClass("mC-active");
    $(".mChoice-btn06").removeClass("mC-active");
    $(".mChoice-btn04").removeClass("mC-active");
    $(".mChoice-btn08").removeClass("mC-active");
    $(".mChoice-btn09").removeClass("mC-active");
    $(".mChoice-btn10").removeClass("mC-active");
  });
  $(".mChoice-btn08").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn05").removeClass("mC-active");
    $(".mChoice-btn06").removeClass("mC-active");
    $(".mChoice-btn07").removeClass("mC-active");
    $(".mChoice-btn04").removeClass("mC-active");
    $(".mChoice-btn09").removeClass("mC-active");
    $(".mChoice-btn10").removeClass("mC-active");
  });
  $(".mChoice-btn09").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn05").removeClass("mC-active");
    $(".mChoice-btn06").removeClass("mC-active");
    $(".mChoice-btn07").removeClass("mC-active");
    $(".mChoice-btn08").removeClass("mC-active");
    $(".mChoice-btn04").removeClass("mC-active");
    $(".mChoice-btn10").removeClass("mC-active");
  });
  $(".mChoice-btn10").click(function () {
    $(this).toggleClass("mC-active");
    console.log($(this).hasClass("mC-active"));
    $(".mChoice-btn05").removeClass("mC-active");
    $(".mChoice-btn06").removeClass("mC-active");
    $(".mChoice-btn07").removeClass("mC-active");
    $(".mChoice-btn08").removeClass("mC-active");
    $(".mChoice-btn09").removeClass("mC-active");
    $(".mChoice-btn04").removeClass("mC-active");
  });
});
// 맵 선택 버튼 그룹 end

// 좌측 콘텐츠(버튼 클릭시 div 변경)
function viewDiv(idx) {
  if (idx == 1) {
    $(".leftContents01").css("display", "block");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 2) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "block");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 3) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "block");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 4) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "block");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 5) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "block");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 6) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "block");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 7) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "block");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 8) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "block");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 9) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "block");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "none");
  } else if (idx == 10) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "block");
    $(".leftContents11").css("display", "none");
  } else if (idx == 11) {
    $(".leftContents01").css("display", "none");
    $(".leftContents02").css("display", "none");
    $(".leftContents03").css("display", "none");
    $(".leftContents04").css("display", "none");
    $(".leftContents05").css("display", "none");
    $(".leftContents06").css("display", "none");
    $(".leftContents07").css("display", "none");
    $(".leftContents08").css("display", "none");
    $(".leftContents09").css("display", "none");
    $(".leftContents10").css("display", "none");
    $(".leftContents11").css("display", "block");
  }
}
// 좌측 콘텐츠(버튼 클릭시 div 변경) end

// 공지사항 좌측메뉴
$(document).ready(function () {
  $(".menu01").click(function () {
    $(this).toggleClass("menu-active");
    console.log($(this).hasClass("menu-active"));
    $(".menu02").removeClass("menu-active");
    $(".menu03").removeClass("menu-active");
  });
  $(".menu02").click(function () {
    $(this).toggleClass("menu-active");
    console.log($(this).hasClass("menu-active"));
    $(".menu01").removeClass("menu-active");
    $(".menu03").removeClass("menu-active");
  });
  $(".menu03").click(function () {
    $(this).toggleClass("menu-active");
    console.log($(this).hasClass("menu-active"));
    $(".menu02").removeClass("menu-active");
    $(".menu01").removeClass("menu-active");
  });
});
// 공지사항 좌측메뉴 end

// 공지사항 파일 선택
$("#file").on("change", function () {
  //var fileName = $("#file").val();
  var fileName = $("#file").val().split("/").pop().split("\\").pop();
  $(".upload-name").val(fileName);
});
// 공지사항 파일 선택 end

// div 닫기
$(".mo01").on("click", function () {
  $(".layer_wrap").css("display", "none");
});
// div 닫기 end

// div 드래그
dragElement(document.getElementById("mover"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// div 드래그 end
