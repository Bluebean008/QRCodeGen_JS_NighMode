let qrcode = document.getElementById('img');
let qrtext = document.getElementById('txtarea');
let qrbtn = document.getElementById('qrbtn');
let status = document.getElementById('status');
let dlbtn = document.getElementById('downloadbtn');

qrbtn.addEventListener('click', () => {
  //   SAMPLE API -->
  //   https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

  const size = '1000x1000';
  if (qrtext.value) {
    let data = qrtext.value;
    let URL = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${data}`;
    qrcode.src = URL;

    status.classList.add('active');
  } else {
    alert('Please insert a link');
  }
});

dlbtn.addEventListener('click', () => {
  let imgCanvas = document.createElement('canvas');

  let imgContext = imgCanvas.getContext('2d');
  imgCanvas.width = qrcode.width;
  imgCanvas.height = qrcode.height;
  imgContext.drawImage(qrcode, 0, 0, qrcode.width, qrcode.height);

  let imgAsDataURL = imgCanvas.toDataURL('image/png');

  let a = document.createElement('a');
  a.href = imgAsDataURL;
  a.download = 'image.png';
  a.click();
});
