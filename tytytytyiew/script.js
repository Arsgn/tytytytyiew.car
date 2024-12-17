// Обработчик отправки формы бронирования
document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

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

// Пример для плавных переходов на странице
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
