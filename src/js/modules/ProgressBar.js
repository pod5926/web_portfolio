import ProgressBar from 'progressbar.js'
// barつき  分割
export function progressbar() {

const bar = new ProgressBar.Circle('.c-splash__text', {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 3000,
  from: { color: '#aaa', width: 1 },
  to: { color: '#848484', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    const value = Math.round(circle.value() * 100);
    if (value === 100) {
      circle.setText('<font size="5px"></font><br><div align="center">' + value + '%</div>');
    } else {
      circle.setText('<font size="5px"></font><br><div align="center">' + value + '%</div>');
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0



  // const bar = new ProgressBar.Line('.c-splash__text', {
  //   easing: 'easeInOut',//アニメーション
  //   duration: 3000,//時間
  //   strokeWidth: 1,//太さ
  //   color: '#555',//色
  //   trailWidth: 1,//ゲージベースの太さ
  //   trailColor: '#ccc',//ゲージベース色
  //   text: {
  //     style: {
  //       position: 'absolute',
  //       left: '50%',
  //       top: '50%',
  //       padding: '0',
  //       margin: '-30px 0 0 0',
  //       transform: 'translate(-50%,-50%)',
  //       'font-size': '1.2rem',
  //       color: '#fff',
  //     },

  //     autoStyleContainer: false
  //   },

  //   step: function (state, bar) {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(1.0);
}