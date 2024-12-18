document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const pickupDate = document.getElementById("pickup-date").value;
    const returnDate = document.getElementById("return-date").value;
    const carModel = document.getElementById("car-model").value;

    if (!pickupDate || !returnDate || !carModel) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    alert(
      `Вы успешно забронировали ${carModel} с ${pickupDate} по ${returnDate}`
    );
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
