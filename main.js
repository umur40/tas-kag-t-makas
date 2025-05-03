<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Kağıt-Makas-Taş Oyunu</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to right, #e0f7fa, #fce4ec);
      text-align: center;
      padding-top: 50px;
    }

    h1 {
      font-size: 36px;
      margin-bottom: 20px;
      color: #333;
    }

    button {
      padding: 15px 30px;
      margin: 10px;
      font-size: 20px;
      border: none;
      border-radius: 10px;
      background-color: #2196f3;
      color: white;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    button:hover {
      transform: scale(1.1);
      background-color: #1976d2;
    }

    #sonuc {
      font-size: 28px;
      margin: 20px;
      font-weight: bold;
      transition: color 0.3s;
    }

    .secim, #skor {
      font-size: 20px;
      margin: 10px;
    }

    .kazandin { color: green; }
    .kaybettin { color: red; }
    .berabere { color: orange; }
  </style>
</head>
<body>

  <h1>✊ ✋ ✌ Kağıt-Makas-Taş Oyunu</h1>

  <div>
    <button onclick="oyna('taş')">✊ Taş</button>
    <button onclick="oyna('kağıt')">✋ Kağıt</button>
    <button onclick="oyna('makas')">✌ Makas</button>
  </div>

  <div id="sonuc"></div>
  <div id="oyuncuSecim" class="secim"></div>
  <div id="bilgisayarSecim" class="secim"></div>
  <div id="skor">Skor: Sen 0 - 0 Bilgisayar</div>

  <audio id="sesKazandın" src="https://www.soundjay.com/buttons/sounds/button-10.mp3"></audio>
  <audio id="sesKaybettin" src="https://www.soundjay.com/buttons/sounds/button-3.mp3"></audio>
  <audio id="sesBerabere" src="https://www.soundjay.com/buttons/sounds/button-09.mp3"></audio>

  <script>
    let oyuncuSkor = 0;
    let bilgisayarSkor = 0;

    function oyna(oyuncuSecimi) {
      const secimler = ['taş', 'kağıt', 'makas'];
      const emojiler = { taş: "✊", kağıt: "✋", makas: "✌" };
      const bilgisayarSecimi = secimler[Math.floor(Math.random() * 3)];

      document.getElementById('oyuncuSecim').textContent = `Senin seçimin: ${emojiler[oyuncuSecimi]} ${oyuncuSecimi}`;
      document.getElementById('bilgisayarSecim').textContent = `Bilgisayarın seçimi: ${emojiler[bilgisayarSecimi]} ${bilgisayarSecimi}`;

      let sonuc = '';
      let className = '';

      if (oyuncuSecimi === bilgisayarSecimi) {
        sonuc = 'Berabere!';
        className = 'berabere';
        document.getElementById('sesBerabere').play();
      } else if (
        (oyuncuSecimi === 'taş' && bilgisayarSecimi === 'makas') ||
        (oyuncuSecimi === 'kağıt' && bilgisayarSecimi === 'taş') ||
        (oyuncuSecimi === 'makas' && bilgisayarSecimi === 'kağıt')
      ) {
        sonuc = 'Kazandın!';
        className = 'kazandin';
        oyuncuSkor++;
        document.getElementById('sesKazandın').play();
      } else {
        sonuc = 'Kaybettin!';
        className = 'kaybettin';
        bilgisayarSkor++;
        document.getElementById('sesKaybettin').play();
      }

      const sonucElem = document.getElementById('sonuc');
      sonucElem.textContent = sonuc;
      sonucElem.className = className;
      document.getElementById('skor').textContent = `Skor: Sen ${oyuncuSkor} - ${bilgisayarSkor} Bilgisayar`;

      // Oyun biterse
      if (oyuncuSkor === 5 || bilgisayarSkor === 5) {
        setTimeout(() => {
          alert(`${oyuncuSkor === 5 ? 'Tebrikler, kazandın! 🎉' : 'Bilgisayar kazandı! 😢'}\nSkor sıfırlanıyor.`);
          oyuncuSkor = 0;
          bilgisayarSkor = 0;
          document.getElementById('skor').textContent = `Skor: Sen 0 - 0 Bilgisayar`;
          document.getElementById('sonuc').textContent = '';
          document.getElementById('oyuncuSecim').textContent = '';
          document.getElementById('bilgisayarSecim').textContent = '';
        }, 1000);
      }
    }
  </script>

</body>
</html>
