// インスタンスを生成
const Shuffle = window.Shuffle;
const element = document.querySelector('.my-shuffle-container');

const shuffleInstance = new Shuffle(element, {
  itemSelector: '.item'
});

// 絞り込み
const getFilter = e =>{
  // 選択された要素のvalue属性の値を取得
  const value = e.target.value;
  // 取得した値で絞り込む
  shuffleInstance.filter(value);
}

// 絞り込みのselect要素が変更されたら実行する
const filterOptions = document.querySelectorAll('.js-filter-options');
const filterOptionsList = Array.prototype.slice.call(filterOptions, 0);
filterOptionsList.forEach(element => {
  element.addEventListener('change', getFilter, false);
});

// ソート
const getSort = e =>{
    const value = e.target.value;
    function sortByDate(e) {
      return e.getAttribute('data-date-created');
    }

    function sortByTitle(e) {
      return e.getAttribute('data-title').toLowerCase();
    }

    // 選択された内容によってソートのオプションを変える
    var options;
    if (value === 'date-new') {
      options = {
        reverse: true, // 降順
        by: sortByDate, // data-date-created属性の値を返す関数
      };
    } else if (value === 'date-old') {
      options = {
        reverse: false, // 昇順
        by: sortByDate, // data-date-created属性の値を返す関数
      };
    } else if (value === 'title') {
      options = {
        by: sortByTitle, // data-title属性の値を返す関数
      };
    } else {
      options = {};
    }
    // セットしたオプションでソートする
    shuffleInstance.sort(options);
}

// ソートのselect要素が変更されたら実行する
const sortOptions = document.querySelectorAll('.js-sort-options');
const sortOptionsList = Array.prototype.slice.call(sortOptions, 0);
sortOptionsList.forEach(element => {
  element.addEventListener('change', getSort , false);
});

$(function() {
  $('#btn li').on('click', function() {
      var $this = $(this),
          $grid = $('#animationList');

      $('#btn .active').removeClass('active');
      $this.addClass('active');
      $grid.shuffle($this.data('group'));
  });

  $('#animationList').shuffle({
      group: 'all',
      speed: 700,
      easing: 'ease-in-out'
  });
});
window.addEventListener("scroll", function () {
  const elm = document.querySelector(".elm");
  const scroll = window.pageYOffset;
  if (scroll > 100) {
      elm.style.opacity = "1";
      // console.log(scroll);
  } else {
      elm.style.opacity = "0";
      // console.log(scroll);
  }
  });

  jQuery(document).ready(function() {
      var offset = 100;
      var duration = 200;
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery('.pagetop').fadeIn(duration);
          } else {
              jQuery('.pagetop').fadeOut(duration);
          }
      });

      jQuery('.pagetop').click(function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
      })
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
    ga('create', 'UA-44808916-1', 'n--log.net');
    ga('send', 'pageview');