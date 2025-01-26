function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Kutuları oluşturma fonksiyonu
function createBoxes(amount) {
  // Eski kutuları temizle
  boxesContainer.innerHTML = "";
  
  let size = 30; // İlk kutunun boyutu
  const fragment = document.createDocumentFragment(); // Daha performanslı eklemek için

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div"); // Yeni bir <div> kutu oluştur
    box.style.width = `${size}px`; // Genişlik
    box.style.height = `${size}px`; // Yükseklik
    box.style.backgroundColor = getRandomHexColor(); // Rastgele arka plan rengi
    fragment.appendChild(box); // Kutuyu fragmente ekle
    size += 10; // Bir sonraki kutu 10px daha büyük olacak
  }

  boxesContainer.appendChild(fragment); // Tüm kutuları DOM'a ekle
}

// Kutuları temizleme fonksiyonu
function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Kutuları temizle
}

// Create düğmesine tıklama olayı
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10); // Kullanıcının yazdığı değeri al

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Eğer 1-100 arasındaysa kutuları oluştur
    input.value = ""; // Input'u temizle
  } else {
    alert("Lütfen 1 ile 100 arasında bir sayı girin!"); // Geçersiz sayı uyarısı
  }
});

// Destroy düğmesine tıklama olayı
destroyButton.addEventListener("click", () => {
  destroyBoxes(); // Tüm kutuları temizle
});