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

