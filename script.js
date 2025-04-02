document.addEventListener('DOMContentLoaded', () => {
    const planContainer = document.getElementById('plan-container');
    const todaySummaryTasks = document.getElementById('today-tasks');
    const todaySummaryDate = document.getElementById('today-date');
    const noTasksToday = document.getElementById('no-tasks-today');
    const calendarGrid = document.getElementById('calendar-grid'); // Get calendar grid element

    // Define the Study Plan Data Structure (Keep your existing structure)
    const studyPlan = [
        // Week 1
        {
            week: 1,
            title: "Building a Strong Foundation",
            dates: "April 2 - April 8",
            days: [
                { date: "2024-04-02", dayOfWeek: "Tuesday", hours: 3, tasks: { writing: ["Task 1: Analyze 1 sample + Write 1 practice under timed conditions", "Task 2: Plan + Write 1 full essay under timed conditions", "Review grammar, coherence, and structure"], speaking: ["Full Speaking test simulation (Part 1, 2, 3)", "Record & review responses, focusing on fluency & pronunciation", "Shadow native speakers (TED Talks, BBC, IELTS high scorers)"] } },
                { date: "2024-04-03", dayOfWeek: "Wednesday", hours: 3, tasks: { writing: ["Task 1: Analyze 1 sample + Write 1 practice under timed conditions", "Task 2: Plan + Write 1 full essay under timed conditions", "Review grammar, coherence, and structure"], speaking: ["Full Speaking test simulation (Part 1, 2, 3)", "Record & review responses, focusing on fluency & pronunciation", "Shadow native speakers (TED Talks, BBC, IELTS high scorers)"] } },
                { date: "2024-04-04", dayOfWeek: "Thursday", hours: 3, tasks: { writing: ["Task 1: Analyze 1 sample + Write 1 practice under timed conditions", "Task 2: Plan + Write 1 full essay under timed conditions", "Review grammar, coherence, and structure"], speaking: ["Full Speaking test simulation (Part 1, 2, 3)", "Record & review responses, focusing on fluency & pronunciation", "Shadow native speakers (TED Talks, BBC, IELTS high scorers)"] } },
                { date: "2024-04-05", dayOfWeek: "Friday", hours: 3, tasks: { writing: ["Task 1: Analyze 1 sample + Write 1 practice under timed conditions", "Task 2: Plan + Write 1 full essay under timed conditions", "Review grammar, coherence, and structure"], speaking: ["Full Speaking test simulation (Part 1, 2, 3)", "Record & review responses, focusing on fluency & pronunciation", "Shadow native speakers (TED Talks, BBC, IELTS high scorers)"] } },
                { date: "2024-04-06", dayOfWeek: "Saturday", hours: 3, tasks: { writing: ["Intensive Writing: Write 1 Task 1 + 1 Task 2 under strict exam conditions", "Get detailed feedback on at least 1 essay"], speaking: ["Intensive Speaking: Answer 10 random Part 2 questions + Part 3 discussions"] } },
                { date: "2024-04-07", dayOfWeek: "Sunday", hours: 3, tasks: { writing: ["Full Writing Mock Test (Task 1 + Task 2)", "Analyze errors & improve weak areas"], speaking: ["Full Speaking Mock Test (Part 1, 2, 3)", "Analyze errors & improve weak areas", "Revise high-level vocabulary & complex structures"] } },
                { date: "2024-04-08", dayOfWeek: "Monday", hours: 3, tasks: { writing: ["Task 1: Analyze 1 sample + Write 1 practice under timed conditions", "Task 2: Plan + Write 1 full essay under timed conditions", "Review grammar, coherence, and structure"], speaking: ["Full Speaking test simulation (Part 1, 2, 3)", "Record & review responses, focusing on fluency & pronunciation", "Shadow native speakers (TED Talks, BBC, IELTS high scorers)"] } }
            ]
        },
        // Week 2
        {
            week: 2,
            title: "Refinement & Advanced Techniques",
            dates: "April 9 - April 15",
            days: [
                { date: "2024-04-09", dayOfWeek: "Tuesday", hours: 3, tasks: { writing: ["Write 1 full Task 1 + 1 full Task 2 under timed conditions", "Focus: Paraphrasing, lexical resource, grammar accuracy", "(Aim for feedback on 2 essays this week)"], speaking: ["Full Speaking test (record & review)", "Expand Part 3 answers with examples & reasoning", "Pronunciation & stress improvement (daily shadowing)"] } },
                { date: "2024-04-10", dayOfWeek: "Wednesday", hours: 3, tasks: { writing: ["Write 1 full Task 1 + 1 full Task 2 under timed conditions", "Focus: Paraphrasing, lexical resource, grammar accuracy"], speaking: ["Full Speaking test (record & review)", "Expand Part 3 answers with examples & reasoning", "Pronunciation & stress improvement (daily shadowing)"] } },
                { date: "2024-04-11", dayOfWeek: "Thursday", hours: 3, tasks: { writing: ["Write 1 full Task 1 + 1 full Task 2 under timed conditions", "Focus: Paraphrasing, lexical resource, grammar accuracy"], speaking: ["Full Speaking test (record & review)", "Expand Part 3 answers with examples & reasoning", "Pronunciation & stress improvement (daily shadowing)"] } },
                { date: "2024-04-12", dayOfWeek: "Friday", hours: 3, tasks: { writing: ["Write 1 full Task 1 + 1 full Task 2 under timed conditions", "Focus: Paraphrasing, lexical resource, grammar accuracy", "(Get feedback if possible)"], speaking: ["Full Speaking test (record & review)", "Expand Part 3 answers with examples & reasoning", "Pronunciation & stress improvement (daily shadowing)"] } },
                { date: "2024-04-13", dayOfWeek: "Saturday", hours: 3, tasks: { writing: ["Advanced Writing Challenge: Write 1 Task 1 + 1 Task 2 under strict timing", "Get detailed feedback on at least 1 essay"], speaking: ["Advanced Speaking Challenge: Use advanced expressions & complex sentence structures"] } },
                { date: "2024-04-14", dayOfWeek: "Sunday", hours: 3, tasks: { writing: ["Full Writing Mock Test", "Identify mistakes & adapt strategy"], speaking: ["Full Speaking Mock Test", "Identify mistakes & adapt strategy", "Revise advanced vocabulary & collocations"] } },
                { date: "2024-04-15", dayOfWeek: "Monday", hours: 3, tasks: { writing: ["Write 1 full Task 1 + 1 full Task 2 under timed conditions", "Focus: Paraphrasing, lexical resource, grammar accuracy"], speaking: ["Full Speaking test (record & review)", "Expand Part 3 answers with examples & reasoning", "Pronunciation & stress improvement (daily shadowing)"] } }
            ]
        },
         // Week 3
        {
            week: 3,
            title: "Mastery & Exam Readiness",
            dates: "April 16 - April 23",
            days: [
                { date: "2024-04-16", dayOfWeek: "Tuesday", hours: 3, tasks: { writing: ["Timed Task 1 & Task 2 with full analysis", "Final focus: Task response, cohesion, and grammar", "(Aim for feedback on 3-4 essays this week)"], speaking: ["Full Speaking tests with deeper fluency & coherence focus", "Pronunciation drills (shadow high-band speakers daily)", "Random Part 2 + Part 3 discussions under exam conditions"] } },
                { date: "2024-04-17", dayOfWeek: "Wednesday", hours: 3, tasks: { writing: ["Timed Task 1 & Task 2 with full analysis", "Final focus: Task response, cohesion, and grammar"], speaking: ["Full Speaking tests with deeper fluency & coherence focus", "Pronunciation drills (shadow high-band speakers daily)", "Random Part 2 + Part 3 discussions under exam conditions"] } },
                { date: "2024-04-18", dayOfWeek: "Thursday", hours: 3, tasks: { writing: ["Timed Task 1 & Task 2 with full analysis", "Final focus: Task response, cohesion, and grammar"], speaking: ["Full Speaking tests with deeper fluency & coherence focus", "Pronunciation drills (shadow high-band speakers daily)", "Random Part 2 + Part 3 discussions under exam conditions"] } },
                { date: "2024-04-19", dayOfWeek: "Friday", hours: 3, tasks: { writing: ["Timed Task 1 & Task 2 with full analysis", "Final focus: Task response, cohesion, and grammar", "(Get feedback if possible)"], speaking: ["Full Speaking tests with deeper fluency & coherence focus", "Pronunciation drills (shadow high-band speakers daily)", "Random Part 2 + Part 3 discussions under exam conditions"] } },
                { date: "2024-04-20", dayOfWeek: "Saturday", hours: 3, tasks: { writing: ["Ultimate Test Simulation: Write 2 essays under full exam conditions"], speaking: ["Simulate full Speaking test & review performance", "Identify last-minute weaknesses"] } },
                { date: "2024-04-21", dayOfWeek: "Sunday", hours: 2, tasks: { review: ["Light Review: Revise key Writing structures & Speaking strategies", "Listen to native speaker examples for confidence", "Relax & stay focused"] } },
                { date: "2024-04-22", dayOfWeek: "Monday", hours: 0, tasks: { review: ["Relax & Refresh: No intense study, just light revision", "Review past mistakes & model answers", "Get enough rest"] } },
                { date: "2024-04-23", dayOfWeek: "Tuesday", hours: 0, tasks: { review: ["Relax & Refresh: No intense study", "Get enough rest before the exam"] } }
            ]
        }
    ];

    // --- Helper Functions ---
    function getTodayString() {
        const today = new Date();
        // Optional: Adjust for testing specific dates
        // const today = new Date('2024-04-10');
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function formatDate(dateString) {
         const [year, month, day] = dateString.split('-');
         // Add error handling for invalid dates if necessary
         const dateObj = new Date(Date.UTC(year, month - 1, day)); // Use UTC to avoid timezone issues with formatting
         return dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' });
    }

    // --- NEW: Calendar Rendering Function ---
    function renderCalendar() {
        if (!calendarGrid) return; // Safety check
        calendarGrid.innerHTML = ''; // Clear previous calendar

        const todayStr = getTodayString();
        const todayDate = new Date(todayStr + 'T00:00:00Z'); // Treat today as UTC start of day

        studyPlan.forEach(week => {
            week.days.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.classList.add('calendar-day');
                dayElement.dataset.date = day.date; // Link to the main day block

                const dayDate = new Date(day.date + 'T00:00:00Z'); // Treat plan date as UTC start of day
                const isCompleted = localStorage.getItem(`completed-${day.date}`) === 'true';

                if (isCompleted) {
                    dayElement.classList.add('completed');
                } else if (dayDate < todayDate) { // If it's a past day and not marked complete
                    dayElement.classList.add('incomplete');
                } else {
                     // Optional: Mark future days differently if needed
                    // dayElement.classList.add('future');
                    // Or just leave default styling for future/today non-complete days
                    dayElement.classList.add('incomplete'); // Default to incomplete until marked
                }

                // Extract day number (remove leading zero)
                const dayNumber = parseInt(day.date.split('-')[2], 10);
                dayElement.textContent = dayNumber;
                dayElement.title = formatDate(day.date); // Tooltip with full date

                calendarGrid.appendChild(dayElement);
            });
        });
    }

    // --- NEW: Function to Update Single Calendar Day ---
    function updateCalendarDay(date, isCompleted) {
        const calendarDayElement = calendarGrid.querySelector(`.calendar-day[data-date="${date}"]`);
        if (calendarDayElement) {
            const todayStr = getTodayString();
            const dayDate = new Date(date + 'T00:00:00Z');
            const todayDate = new Date(todayStr + 'T00:00:00Z');

            calendarDayElement.classList.remove('completed', 'incomplete', 'future'); // Clear existing status classes

            if (isCompleted) {
                calendarDayElement.classList.add('completed');
            } else {
                 calendarDayElement.classList.add('incomplete'); // Mark as incomplete if unmarked
                // Optional: Add back 'future' class if needed based on date comparison
                 // if (dayDate > todayDate) {
                 //     calendarDayElement.classList.add('future');
                 // } else {
                 //      calendarDayElement.classList.add('incomplete');
                 // }
            }
        }
    }


    // --- Core Logic ---
    const todayString = getTodayString();
    let todayTasksHtml = '';
    let foundToday = false;

    // Render the main plan details
    studyPlan.forEach(week => {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');
        weekDiv.innerHTML = `<h2>Week ${week.week}: ${week.title} (${week.dates})</h2>`;

        week.days.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.dataset.date = day.date; // Store date for saving/loading notes

            const isToday = day.date === todayString;
            if (isToday) {
                dayDiv.classList.add('today');
                foundToday = true;
                todaySummaryDate.textContent = formatDate(day.date);
            }

            const isCompleted = localStorage.getItem(`completed-${day.date}`) === 'true';
            if (isCompleted) {
                dayDiv.classList.add('completed');
            }

            // --- Task HTML Generation (Existing Code) ---
            let tasksHtml = '<div class="day-tasks">';
            // ... (keep your existing task HTML generation logic here) ...
             if (day.tasks.writing && day.tasks.writing.length > 0) {
                 tasksHtml += `<h4><i class="fas fa-pen"></i> Writing (${day.hours > 0 ? '1h 30m approx.' : ''})</h4><ul>`;
                 day.tasks.writing.forEach(task => tasksHtml += `<li>${task}</li>`);
                 tasksHtml += `</ul>`;
                 if (isToday && day.hours > 0) todayTasksHtml += `<strong>Writing:</strong> ${day.tasks.writing.join(', ')}<br>`;
            }
             if (day.tasks.speaking && day.tasks.speaking.length > 0) {
                 tasksHtml += `<h4><i class="fas fa-microphone"></i> Speaking (${day.hours > 0 ? '1h 30m approx.' : ''})</h4><ul>`;
                 day.tasks.speaking.forEach(task => tasksHtml += `<li>${task}</li>`);
                 tasksHtml += `</ul>`;
                  if (isToday && day.hours > 0) todayTasksHtml += `<strong>Speaking:</strong> ${day.tasks.speaking.join(', ')}<br>`;
            }
             if (day.tasks.review && day.tasks.review.length > 0) {
                 tasksHtml += `<h4><i class="fas fa-book-open"></i> Review/Relax (${day.hours > 0 ? day.hours + 'h' : ''})</h4><ul>`;
                 day.tasks.review.forEach(task => tasksHtml += `<li>${task}</li>`);
                 tasksHtml += `</ul>`;
                 if (isToday) todayTasksHtml += `<strong>Review/Relax:</strong> ${day.tasks.review.join(', ')}`;
            }
            tasksHtml += '</div>'; // Close day-tasks
             // --- Log HTML Generation (Existing Code) ---
            const logKey = `notes-${day.date}`;
            const savedNotes = localStorage.getItem(logKey) || '';

            const logHtml = `
                <div class="day-log">
                    <label for="log-${day.date}">Learned Today / Notes / Reflections:</label>
                    <textarea id="log-${day.date}" data-key="${logKey}">${savedNotes}</textarea>
                </div>
                <div class="day-controls">
                    <button class="complete-button ${isCompleted ? 'unmark' : ''}" data-date="${day.date}">
                        ${isCompleted ? '<i class="fas fa-check-circle"></i> Marked Complete' : '<i class="far fa-circle"></i> Mark as Complete'}
                    </button>
                </div>
            `;

            dayDiv.innerHTML = `
                <div class="day-header">
                    <h3><i class="far fa-calendar-alt"></i> ${formatDate(day.date)} (${day.dayOfWeek}) ${day.hours > 0 ? `| ~${day.hours}h` : ''}</h3>
                </div>
                ${tasksHtml}
                ${logHtml}
            `;

            weekDiv.appendChild(dayDiv);
        });

        planContainer.appendChild(weekDiv);
    });

     // Update Today's Summary section (Existing Code)
     if (foundToday) {
        if (!todayTasksHtml.trim()) { // Check if empty after trimming whitespace
             const todayEntry = studyPlan.flatMap(w => w.days).find(d => d.date === todayString);
             if (todayEntry && todayEntry.tasks.review) {
                 todayTasksHtml = `<strong>Review/Relax:</strong> ${todayEntry.tasks.review.join(', ')}`;
             } else if (todayEntry && todayEntry.hours === 0) {
                 todayTasksHtml = 'Relax & Refresh Day!';
             }
              else {
                 todayTasksHtml = 'Check the detailed plan below.';
             }
        }
         todaySummaryTasks.innerHTML = todayTasksHtml;
         noTasksToday.style.display = 'none';
         todaySummaryTasks.style.display = 'block'; // Ensure tasks are visible
     } else {
         todaySummaryDate.textContent = formatDate(todayString);
         todaySummaryTasks.style.display = 'none';
         noTasksToday.style.display = 'block';
         noTasksToday.textContent = 'You are outside the planned study dates. Feel free to review or adjust the plan!';
     }


    // --- Render the Initial Calendar ---
    renderCalendar();


    // --- Event Listeners ---

    // Save notes on input (Existing Code)
    planContainer.addEventListener('input', (event) => {
        if (event.target.tagName === 'TEXTAREA') {
            const key = event.target.dataset.key;
            const value = event.target.value;
            localStorage.setItem(key, value);
        }
    });

     // Handle Complete Button Clicks (Modified)
     planContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('complete-button') || event.target.closest('.complete-button')) {
             // Handle clicks on the button or its icon
            const button = event.target.closest('.complete-button');
            const date = button.dataset.date;
            const dayDiv = document.querySelector(`.day[data-date="${date}"]`);
            const completedKey = `completed-${date}`;
            let isNowCompleted;

            if (dayDiv.classList.contains('completed')) {
                // Unmark as complete
                localStorage.setItem(completedKey, 'false');
                dayDiv.classList.remove('completed');
                button.classList.remove('unmark');
                button.innerHTML = '<i class="far fa-circle"></i> Mark as Complete';
                isNowCompleted = false;
            } else {
                // Mark as complete
                localStorage.setItem(completedKey, 'true');
                dayDiv.classList.add('completed');
                button.classList.add('unmark');
                 button.innerHTML = '<i class="fas fa-check-circle"></i> Marked Complete';
                isNowCompleted = true;
            }

            // --- Update the corresponding day in the calendar ---
            updateCalendarDay(date, isNowCompleted);
        }
    });

}); // End DOMContentLoaded