// COWORKING- mestata se rasprodadeni
let btnCoworking = document.getElementById("btnCoworking");
let h3Coworking = document.getElementById("h3Coworking");

btnCoworking.addEventListener("click", function () {
  h3Coworking.innerHTML = "Местата се распродадени.";
  h3Coworking.style.backgroundColor = "#fcd232";
  h3Coworking.style.color = "black";
  h3Coworking.style.width = "58%";
  h3Coworking.style.padding = "2%";
  h3Coworking.style.border = "1px solid";
  h3Coworking.style.borderRadius = "25px";
});

// EDUKACIJA I KOMPANII

let education = document.getElementById("education");
let company = document.getElementById("company");
let btnCompany = document.getElementById("btnCompany");
let btnAcademy1 = document.getElementById("btnAcademy-1");

btnCompany.addEventListener("click", function () {
  education.style.display = "none";
  company.style.display = "block";
});

btnAcademy1.addEventListener("click", function () {
  company.style.display = "none";
  education.style.display = "block";
});




// forma partnerstvo
$("#btn-form").on("click", function () {
  if ($("#name1").val() === "") {
    console.log("error");
    $("#error-p").text("Внесете Име и Презиме");
  } else {
    $("#error-p").hide();
  }

  if ($("#number1").val() === "") {
    console.log("error");
    $("#error-p2").text("Внесете Телефонски Број");
  } else {
    $("#error-p2").hide();
  }
});


//scroll
$("#scroll").click(function () {
    $('html,body').animate({
        scrollTop: $("#section1").offset().top
    },
        'slow');
});

//filter btn
$("#kariera").on("click", function (e) {
    e.preventDefault();
    $(".kariera-1").show();
    $("#tehnologija-1, #data-science-1, #marketing-1, .dizajn-1, .impact-1").hide()
  });
  
  $("#tehnologija").on("click", function (e) {
    e.preventDefault();
    $("#tehnologija-1").show();
    $(".kariera-1, #data-science-1, #marketing-1, .dizajn-1, .impact-1").hide()
  });
  
  $("#data-science").on("click", function (e) {
    e.preventDefault();
    $("#data-science-1").show();
    $(".kariera-1, #tehnologija-1, #marketing-1, .dizajn-1, .impact-1").hide()
  });
  
  $("#marketing").on("click", function (e) {
    e.preventDefault();
    $("#marketing-1").show();
    $(".kariera-1, #tehnologija-1, #data-science-1, .dizajn-1, .impact-1").hide()
  });
  
  $("#dizajn").on("click", function (e) {
    e.preventDefault();
    $(".dizajn-1").show();
    $(".kariera-1, #tehnologija-1, #data-science-1, #marketing-1, .impact-1").hide()
  });
  
  $("#impact").on("click", function (e) {
    e.preventDefault();
    $(".impact-1").show();
    $(".kariera-1, #tehnologija-1, #data-science-1, #marketing-1, .dizajn-1").hide()
  });
  
  $("#site").on("click", function (e) {
    e.preventDefault();
    $(".kariera-1, #tehnologija-1, #data-science-1, #marketing-1, .dizajn-1, .impact-1").show()
  });
  
  
  // // counter for sliders
  
  $('.carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
    var total = carouselData.$items.length;
    var text = (currentIndex + 1) + " / " + total;
    $('#carousel-index').text(text);
  });


  
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);


const eventsData = [
    {
        date: new Date(2020, 3, 4),
        title: 'Deep dive into Data Science',
        time: '10:00 - 18:00',
        day: "Ден 1",
        bgColor: 'navy',
        color: 'white'
    },
    {
        date: new Date(2020, 3, 5),
        title: 'Deep dive into Data Science',
        time: '10:00 - 18:00',
        day: "Ден 2",
        bgColor: 'navy',
        color: 'white'
    },
    {
        date: new Date(2020, 3, 25),
        title: 'Deep dive into Marketing',
        time: '10:00 - 18:00',
        day: "Ден 1",
        bgColor: 'red',
        color: 'white'
    },
    {
        date: new Date(2020, 3, 26),
        title: 'Deep dive into Marketing',
        time: '10:00 - 18:00',
        day: "Ден 2",
        bgColor: 'red',
        color: 'white'
    }
]

renderCalendar(currentMonth, currentYear, eventsData);

function next() {
    currentYear = (currentMonth == 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    renderCalendar(currentMonth, currentYear, eventsData);
}

function prev() {
    currentYear = (currentMonth == 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth == 0) ? 11 : currentMonth - 1;
    renderCalendar(currentMonth, currentYear, eventsData);
}


function renderCalendar(month, year, events) {
    let renderToday = new Date();
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let calendar = document.querySelector('#calendar-body');
    let monthAndYear = document.querySelector('#montyAndYear')

    monthAndYear.innerHTML = `${months[month]} ${year}`;
    calendar.innerHTML = '';

    let thisYearAndMonthEvents = events.filter(event => event.date.getFullYear() == year && event.date.getMonth() == month);

    let date = 1;

    for (let i = 0; i < 6; i++) {
        let week = document.createElement('div');
        week.classList.add('calendar-week');

        for (let j = 0; j < 7; j++) {

            if (i == 0 && j < firstDay) {
                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty-cell');
                week.appendChild(emptyCell);

            } else if (date <= daysInMonth) {
                let dayCell = document.createElement('div');
                dayCell.classList.add('day-cell');

                if (date == renderToday.getDate() && month == renderToday.getMonth() && year == renderToday.getFullYear()) {
                    dayCell.classList.add('today');
                }

                let dayCellHTML = '';

                if (thisYearAndMonthEvents.length) {

                    let todayEvent = thisYearAndMonthEvents.filter(event => event.date.getDate() == date);

                    if (todayEvent.length) {
                        dayCell.classList.add('event-day');

                        todayEvent.forEach(ev => {
                            dayCellHTML += `<div class="event" style="border-left:4px solid ${ev.bgColor}"><div>${ev.title}</div><div>${ev.time}</div><div>${ev.day}</div></div><span>${date}</span>`;
                            dayCell.style.backgroundColor = ev.bgColor;
                            dayCell.style.color = ev.color;
                        });
                    }
                }

                dayCell.innerHTML = (dayCellHTML == '') ? `<span>${date}</span>` : dayCellHTML;

                week.appendChild(dayCell);

                date++;
            } else if (date > daysInMonth) {
                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty-cell');
                week.appendChild(emptyCell);
            }
        }
        calendar.appendChild(week);
    }
}



