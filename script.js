// script.js 
let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;
let enteredTime = null;

function startTimer() {
  console.log("startTimer");
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  console.log("updateTimer");
  const timerElement = document.getElementById('timer');
  timerElement.textContent = formatTime(minutes, seconds);

  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    displayImage();
    alert('Time is up! Take a break.');
  } else if (!isPaused) {
    if (seconds > 0) {
      // console.log()
      seconds--;
    } else {
      seconds = 59;
      minutes--;
    }
  }
  console.log("minutes: ", minutes);
  console.log("seconds: ", seconds);
}

function formatTime(minutes, seconds) {
  console.log("formatTime");
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function togglePauseResume() {
  console.log()
  const pauseResumeButton =
    document.querySelector('.control-buttons button');
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(timer);
    pauseResumeButton.textContent = 'Resume';
  } else {
    startTimer();
    pauseResumeButton.textContent = 'Pause';
  }
}

function restartTimer() {
  console.log("restartTimer");
  clearInterval(timer);
  minutes = enteredTime || 25;
  seconds = 0;
  isPaused = false;
  const timerElement =
    document.getElementById('timer');
  timerElement.textContent =
    formatTime(minutes, seconds);
  const pauseResumeButton =
    document.querySelector('.control-buttons button');
  pauseResumeButton.textContent = 'Pause';
  startTimer();
}

function chooseTime() {
  console.log("chooseTime");
  const newTime = prompt('Enter new time in minutes:');
  if (!isNaN(newTime) && newTime > 0) {
    enteredTime = parseInt(newTime);
    minutes = enteredTime;
    seconds = 0;
    isPaused = false;
    const timerElement =
      document.getElementById('timer');
    timerElement.textContent =
      formatTime(minutes, seconds);
    clearInterval(timer);
    const pauseResumeButton =
      document.querySelector('.control-buttons button');
    pauseResumeButton.textContent = 'Pause';
    startTimer();
  } else {
    alert('Invalid input. Please enter' +
      ' a valid number greater than 0.');
  }
}

function toggleExpand() {
  const expandedIframe = document.getElementById('expandedIframe');
  const expandButton = document.getElementById('expandButton');

  if (expandedIframe.classList.contains('expanded')) {
    expandedIframe.classList.remove('expanded');
    expandButton.textContent = 'Expand Playlist';
    expandedIframe.style.width = '0%';
    expandedIframe.style.height = '0';
  } else {
    expandedIframe.classList.add('expanded');
    expandButton.textContent = 'Collapse Playlist';
    expandedIframe.style.width = '25%';
    expandedIframe.style.height = '352px';
  }
}

function togglePomo() {
  const expandedPomFrame = document.getElementById('expandPomFrame');
  const expandPomodoro = document.getElementById('expandPomodoro');
  if (expandedPomFrame.classList.contains('expanded')) {
    expandedPomFrame.classList.remove('expanded');
    expandPomodoro.textContent = 'Expand Pomodoro';
    expandedPomFrame.style.width = '0%';
    expandedPomFrame.style.height = '0';
  } else {
    expandedPomFrame.classList.add('expanded');
    expandPomodoro.textContent = 'Collapse Pomodoro';
    expandedPomFrame.style.width = '25%';
    expandedPomFrame.style.height = '352px';
  }
}

function toggleAboutUs() {
  const expandedIframe = document.getElementById('expandedIframe');
  const expandButton = document.getElementById('expandButton');

  if (expandedIframe.classList.contains('expanded')) {
    expandedIframe.classList.remove('expanded');
    expandButton.textContent = 'Expand Playlist';
    expandedIframe.style.width = '0%';
    expandedIframe.style.height = '0';
  } else {
    expandedIframe.classList.add('expanded');
    expandButton.textContent = 'Collapse Playlist';
    expandedIframe.style.width = '25%';
    expandedIframe.style.height = '352px';
  }
}

startTimer();
console.log("Started the timer");

// Code to manage the tasks list
let tasks = [];

function renderTasks() {
  const tasksHolder = document.getElementById('tasksHolder');
  tasksHolder.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    if (task.completed) {
      taskElement.classList.add('completed');
    }
    taskElement.innerHTML = `
      <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
      <label for="task-${index}">${task.text}</label>
    `;
    tasksHolder.appendChild(taskElement);
  });
}

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function toggleList() {
  const tasksContainer = document.getElementById('tasks-container');
  const addTaskElements = document.getElementById('add-task-elements');

  if (tasksContainer.style.display === 'none') {
    tasksContainer.style.display = 'block';
    addTaskElements.style.display = 'block';
  } else {
    tasksContainer.style.display = 'none';
    addTaskElements.style.display = 'none';
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//   // Create an image element
//   const img = document.createElement('img');

//   // Set the source (URL) of the image
//   img.src = 'cute frog.gif'; // Replace with the actual path to your image

//   // Get the container element where you want to append the image
//   const imageContainer = document.getElementById('imageContainer');

//   // Append the image to the container
//   imageContainer.appendChild(img);
// });

// Load the Google API client library
// gapi.load('client', initClient);

// function initClient() {
//   // Initialize the Google API client with your API key
//   gapi.client.init({
//     apiKey: 'AIzaSyDe2gZvQUf4F93PdqCCWxGJNIIRlOv-ofQ',
//     discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
//   }).then(function() {
//     // Use the Calendar API to get calendar data
//     gapi.client.calendar.events.list({
//       'calendarId': 'primary',
//       'timeMin': (new Date()).toISOString(),
//       'showDeleted': false,
//       'singleEvents': true,
//       'maxResults': 10,
//       'orderBy': 'startTime'
//     }).then(function(response) {
//       console.log(response.result);
//     });
//   });
// }
// function handleClientLoad() {
//   gapi.load('client:auth2', initClient);
// }

// function handleAuthClick(event) {
//   gapi.auth2.getAuthInstance().signIn();
// }

// function updateSigninStatus(isSignedIn) {
//   if (isSignedIn) {
//     // User is signed in, make API requests
//     listUpcomingEvents();
//   } else {
//     // User is not signed in, prompt for sign-in
//     gapi.auth2.getAuthInstance().signIn();
//   }
// }

// function initClient() {
//   console.log('Inside initClient');
//   gapi.client.init({
//     apiKey: 'AIzaSyDe2gZvQUf4F93PdqCCWxGJNIIRlOv-ofQ', // You may or may not need to include this
//     clientId: '111544910248-ctencl39sbqr3nq4ur2qv0gsc7kv93hh.apps.googleusercontent.com',
//     discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
//     scope: 'https://www.googleapis.com/auth/calendar.readonly', // Adjust scope as needed
//   }).then(function() {
//     console.log('Initialization successful');
//     // Listen for sign-in state changes.
//     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

//     // Handle the initial sign-in state.
//     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//   }).catch(function(error) {
//     console.error('Initialization failed:', error);
//   });
// }
// gapi.load('client', initClient);

// function initClient() {
//   // Initialize the Google API client with your API key
//   gapi.client.init({
//     apiKey: 'AIzaSyDe2gZvQUf4F93PdqCCWxGJNIIRlOv-ofQ',
//     discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
//   }).then(function() {
//     // Use the Calendar API to get calendar data
//     gapi.client.calendar.events.list({
//       'calendarId': 'primary',
//       'timeMin': (new Date()).toISOString(),
//       'showDeleted': false,
//       'singleEvents': true,
//       'maxResults': 10,
//       'orderBy': 'startTime'
//     }).then(function(response) {
//       const events = response.result.items;
//       // Call a function to update your UI with the events
//       updateCalendarUI(events);
//     });
//   });
// }

// function updateCalendarUI(events) {
//   // Assuming you have an HTML element with the id 'calendar-container' to display events
//   const calendarContainer = document.getElementById('calendar-container');

//   // Clear existing content
//   calendarContainer.innerHTML = '';

//   // Iterate through each event and display them in your UI
//   events.forEach(function(event) {
//     const eventElement = document.createElement('div');
//     eventElement.innerHTML = '<strong>' + event.summary + '</strong><br>' + event.start.dateTime;
//     calendarContainer.appendChild(eventElement);
//   });
// }

function fetchWeatherData() {
  const apiKey = 'c0bf4776014ee747d9e8a2e05f61a230'; // Replace with your API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherDataElement = document.getElementById('weatherData');
    const temperatureElement = document.getElementById('temperature');
    const locationElement = document.getElementById('location');
    const weatherIcon = document.getElementById('weatherIcon');
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    const temperature = Math.round(data.main.temp); // Get temperature and round to nearest integer
    const location = data.name; // Get location name

    // Update weather data, temperature, and location
    locationElement.textContent = `${location}`;
    weatherDataElement.textContent = `${data.weather[0].description}`;
    temperatureElement.textContent = `${temperature}°C`;


    // Update weather icon
    weatherIcon.style.backgroundImage = `url(${iconUrl})`;
  })
}

// Fetch weather data when the page loads
window.addEventListener('load', fetchWeatherData);
initClient();

function displayImage() {
  const imageContainer = document.getElementById('imageContainer');
  const image = document.createElement('img');
  image.src = 'lotus (1).png';
  image.alt = 'Loty';
  imageContainer.appendChild(image);
}