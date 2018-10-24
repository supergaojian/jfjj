var pages = document.querySelectorAll('.page');

var currentIndex = 0;

var info = {
  name: '',
  sex: '',
  age: '',
  idCard: '',
  tel: '',
  pName: '',
  pIdCard: '',
  pTel: '',
  addition: ''
}

function changePage(idx) {
  pages[idx - 1].style.display = 'none';
  pages[idx].style.display = 'block';
}
// page 1 start
document.querySelector('.top-join-btn').addEventListener('click', function(){
  currentIndex++;
  changePage(currentIndex);
});
document.querySelector('.bottom-join-btn').addEventListener('click', function(){
  currentIndex++;
  changePage(currentIndex);
});

// page 1 end

// page 2 start
document.querySelector('.submit-red-btn').addEventListener('click', function() {
  Object.keys(info).forEach(function(item){
    info[item] = document.querySelector('.' + item).value
  })
  var flag = true;
  Object.keys(info).forEach(function(item){
    if (item === 'pName' || item === 'pIdCard' || item === 'pTel' || item === 'addition') {
      return;
    }
    !info[item] && (flag = false);
  })
  if (!flag) {
    alert('信息填写不全');
    return;
  }

  Object.keys(info).forEach(function(item){
    if (item === 'pName' || item === 'pIdCard' || item === 'pTel') {
      return;
    }
    document.querySelector('.' + item + '.value').innerHTML = info[item];
  })

  currentIndex++;
  changePage(currentIndex);
})
// page 2 end

// page 3 start
document.querySelector('.cancel-btn').addEventListener('click', function(){
  currentIndex--;
  pages[currentIndex].style.display = 'none';
  changePage(currentIndex);
})
document.querySelector('.submit-join-btn').addEventListener('click', function(){
  alert('已提交成功')
})
// page 3 end