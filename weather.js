const weatherData = {
  "تهران":   { temp: 32, condition: "آفتابی",      humidity: 20, wind: 12, kind: "sunny" },
  "اصفهان":  { temp: 29, condition: "نیمه ابری",   humidity: 28, wind: 10, kind: "partly" },
  "مشهد":    { temp: 24, condition: "بارانی",      humidity: 65, wind: 18, kind: "rainy" },
  "شیراز":   { temp: 27, condition: "ابری",        humidity: 40, wind: 14, kind: "cloudy" },
  "تبریز":   { temp: 21, condition: "شرجی",        humidity: 80, wind: 9,  kind: "humid" },
  "یزد":     { temp: 36, condition: "غبار و گرد",  humidity: 12, wind: 22, kind: "dust" }
};

const body = document.body;
const input = document.getElementById('cityInput');
const btn = document.getElementById('searchBtn');
const result = document.getElementById('result');

function clearBg(){
  body.classList.remove('bg-sunny','bg-rainy','bg-cloudy','bg-partly','bg-dust','bg-humid');
}

function applyBg(kind){
  clearBg();
  const map = { sunny:'bg-sunny', rainy:'bg-rainy', cloudy:'bg-cloudy', partly:'bg-partly', dust:'bg-dust', humid:'bg-humid' };
  body.classList.add(map[kind] || '');
}

function renderCity(name){
  const data = weatherData[name];
  if(!data){
    result.className = 'result';
    result.innerHTML = `<div class="error">شهر مورد نظر یافت نشد.</div>`;
    clearBg();
    return;
  }

  applyBg(data.kind);

  result.className = 'result';
  result.innerHTML = `
    <div class="city">${name}</div>
    <div class="row">
      <span class="pill">دمـا: <strong>${data.temp}°C</strong></span>
      <span class="pill">وضعیت: <strong>${data.condition}</strong></span>
      <span class="pill">رطوبت: <strong>${data.humidity}%</strong></span>
      <span class="pill">سرعت باد: <strong>${data.wind} km/h</strong></span>
    </div>
  `;
}

function onSearch(){
  const name = input.value.trim();
  if(!name){
    result.className = 'result';
    result.innerHTML = '<div class="error">نام شهر را وارد کنید.</div>';
    clearBg();
    return;
  }
  renderCity(name);
}

btn.addEventListener('click', onSearch);
input.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') onSearch();
});

