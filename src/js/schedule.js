/*
The fetch() API is asynchronous. We need to add the keyword async 
before the name of the function that uses the fetch API, and add 
the keyword await before the calls to any asynchronous functions.

TODO: Make the request URL secret.
*/

// Create the top-level function to obtain the JSON using the Fetch API
async function schedule() {
  // Declare the requestURL variable to store the Google Calendar URL
  const requestURL = 'https://www.googleapis.com/calendar/v3/calendars/info.kocmoc%40gmail.com/events?key=AIzaSyAIYy9wpMQzj8VAG0BC9hdV538eer5GRjo';
  // Use the URL to initialize a new Request object
  const request = new Request(requestURL);
  // Make the network request using the fetch() function, and this returns a Response object
  const response = await fetch(request);
  // Retrieve the response as JSON using the json() function of the Response object
  const items = await response.json();

  // Pass the JavaScript object to a function call with the data
  scheduleData(items);
}

// Create the function that displays the object data
function scheduleData(object) {
  // Select the app.
  const schedule = document.querySelector('#schedule');

  // Create a variable that contains the object items
  const scheduleItems = object.items;

  // Create the app title
  const scheduleTitle = document.createElement('h2');
  scheduleTitle.textContent = `Schedule API`;

  // Create the list that wraps the schedule items
  const scheduleList = document.createElement('ul');

  // Append the title and list into the app
  schedule.appendChild(scheduleTitle);
  schedule.appendChild(scheduleList);

  // Loop through each item in the items array
  for (const scheduleItem of scheduleItems) {
    // Set the current date
    const currentDate = new Date();
    // Convert the current date to JSON format to compare
    const currentDateJSON = currentDate.toJSON();

    // Check for upcoming events
    // if (scheduleItem.end.dateTime > currentDateJSON) {

    // Create several HTML elements
    const scheduleListItem = document.createElement('li');
    const scheduleListItemTitle = document.createElement('div');
    const scheduleListItemDescription = document.createElement('div');
    const scheduleListItemLocation = document.createElement('div');
    const scheduleListItemStartDate = document.createElement('div');
    const scheduleListItemEndDate = document.createElement('div');

    // Set attributes
    scheduleListItemTitle.classList.add('title');
    scheduleListItemDescription.classList.add('description');
    scheduleListItemLocation.classList.add('location');
    scheduleListItemStartDate.classList.add('start-date');
    scheduleListItemEndDate.classList.add('end-date');

    // Check if title exists and add content
    if (scheduleItem.hasOwnProperty('summary')) {
      scheduleListItemTitle.textContent = `Title: ${scheduleItem.summary}`;
    } else {
      scheduleListItemTitle.textContent = `Title: No title`;
    }

    // Check if description exists and add content
    if (scheduleItem.hasOwnProperty('description')) {
      // Strip html style tags from the content
      const descriptionString = scheduleItem.description;
      const formattedDescriptionString = descriptionString.replace(/<\/?[^>]+>/gi, '');

      scheduleListItemDescription.textContent = `Description: ${formattedDescriptionString}`;
    } else {
      scheduleListItemDescription.textContent = `Description: no description`;
    }

    // Check if location exists and add content
    if (scheduleItem.hasOwnProperty('location')) {
      scheduleListItemLocation.textContent = `Location: ${scheduleItem.location}`;
    } else {
      scheduleListItemLocation.textContent = `Location: no location`;
    }

    // Add content to start date
    scheduleListItemStartDate.textContent = `Start date: ${scheduleItem.start.dateTime}`;
    // Add content to end date
    scheduleListItemEndDate.textContent = `End date: ${scheduleItem.end.dateTime}`;

    // Append list items into the list
    scheduleList.appendChild(scheduleListItem);
    // Append elements into each list item
    scheduleListItem.appendChild(scheduleListItemTitle);
    scheduleListItem.appendChild(scheduleListItemDescription);
    scheduleListItem.appendChild(scheduleListItemLocation);
    scheduleListItem.appendChild(scheduleListItemStartDate);
    scheduleListItem.appendChild(scheduleListItemEndDate);
  }
  // }
}

// Init
schedule();
