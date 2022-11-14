/*
Google Calendar API
*/

// https://www.googleapis.com/calendar/v3/calendars/kocmoc.collective@gmail.com/events?key=AIzaSyDyNSG-eHUJ8YrGZRCojAq_AIdUYg4YPWE

// Create the top-level function to obtain the JSON using the Fetch API
async function schedule() {
  // Declare the requestURL variable to store the Google Calendar URL
  const requestURL = 'https://www.googleapis.com/calendar/v3/calendars/info.kocmoc@gmail.com/events?singleEvents=true&orderBy=startTime&maxResults=2000&key=AIzaSyAIYy9wpMQzj8VAG0BC9hdV538eer5GRjo';
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
  scheduleTitle.textContent = `Confirmed Shows`;

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
    const scheduleListItemStartDate = document.createElement('div');
    // const scheduleListItemEndDate = document.createElement('div');
    const scheduleListItemDescription = document.createElement('div');
    const scheduleListItemLocation = document.createElement('div');

    // Set attributes
    scheduleListItemTitle.classList.add('title');
    scheduleListItemStartDate.classList.add('start-date');
    // scheduleListItemEndDate.classList.add('end-date');
    scheduleListItemDescription.classList.add('description');
    scheduleListItemLocation.classList.add('location');

    // Check if title exists and add content
    if (scheduleItem.hasOwnProperty('summary')) {
      scheduleListItemTitle.textContent = `${scheduleItem.summary}`;
    }

    // Add content to start date
    scheduleListItemStartDate.textContent = `${new Date(scheduleItem.start.dateTime).toString()}`;
    // Add content to end date
    // scheduleListItemEndDate.textContent = `End date: ${scheduleItem.end.dateTime}`;

    // Check if description exists and add content
    if (scheduleItem.hasOwnProperty('description')) {
      // Strip html style tags from the content
      const descriptionString = scheduleItem.description;
      const formattedDescriptionString = descriptionString.replace(/<\/?[^>]+>/gi, '');

      scheduleListItemDescription.textContent = `${formattedDescriptionString}`;
    }

    // Check if location exists and add content
    if (scheduleItem.hasOwnProperty('location')) {
      scheduleListItemLocation.textContent = `${scheduleItem.location}`;
    }

    // Append list items into the list
    scheduleList.appendChild(scheduleListItem);
    // Append elements into each list item
    scheduleListItem.appendChild(scheduleListItemTitle);
    scheduleListItem.appendChild(scheduleListItemStartDate);
    // scheduleListItem.appendChild(scheduleListItemEndDate);
    scheduleListItem.appendChild(scheduleListItemDescription);
    scheduleListItem.appendChild(scheduleListItemLocation);
  }
  // }
}

// Init
schedule();
