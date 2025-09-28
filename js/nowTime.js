const n = new Date();

const time = n.toLocaleString("ja-JP", {timeZone: "Asia/Tokyo"});

const tf = document.querySelector('#tf');
tf.innerHTML = time + "(JST:日本標準時, 多分)"