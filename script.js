// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    if (document.body.classList.contains('dark')) {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Light Mode';
    } else {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Dark Mode';
    }
}

// Load theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('theme-icon').textContent = '🌙';
    document.getElementById('theme-text').textContent = 'Light Mode';
} else {
    document.getElementById('theme-icon').textContent = '☀️';
    document.getElementById('theme-text').textContent = 'Dark Mode';
}

// Welcome Alert
function showWelcomeAlert() {
    alert("Welcome to my JavaScript Project!");
}

// Color Changer
function changeButtonColor() {
    const button = document.getElementById('colorButton');
    const colors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f39c12'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;
}

// Grade Calculator
function calculateGrade() {
    const score = parseInt(document.getElementById('gradeInput').value);
    let result = document.getElementById('gradeResult');
    
    if (isNaN(score)) {
        result.textContent = "Please enter a valid number";
        result.className = "text-error";
        return;
    }
    
    if (score >= 90) result.textContent = "Grade: A";
    else if (score >= 80) result.textContent = "Grade: B";
    else if (score >= 70) result.textContent = "Grade: C";
    else if (score >= 60) result.textContent = "Grade: D";
    else result.textContent = "Grade: F (Fail)";
    
    result.className = "text-muted";
}

// Even/Odd Checker
function checkEvenOdd() {
    const num = parseInt(document.getElementById('numberInput').value);
    const result = document.getElementById('evenOddResult');
    
    if (isNaN(num)) {
        result.textContent = "Please enter a valid number";
        result.className = "text-error";
        return;
    }
    
    result.textContent = num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;
    result.className = "text-muted";
}

// Counters
function countUp() {
    let countResult = document.getElementById('countResult');
    countResult.textContent = "";
    for (let i = 1; i <= 10; i++) {
        countResult.textContent += i + " ";
    }
    countResult.className = "text-muted";
}

function countDown() {
    let countResult = document.getElementById('countResult');
    countResult.textContent = "";
    for (let i = 5; i >= 1; i--) {
        countResult.textContent += i + " ";
    }
    countResult.className = "text-muted";
}

// Number Operations
function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultsDiv = document.getElementById('operationResults');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultsDiv.innerHTML = '<span class="text-error">Please enter valid numbers</span>';
        return;
    }
    
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const division = num2 !== 0 ? (num1 / num2).toFixed(2) : "Undefined";
    const modulo = num2 !== 0 ? num1 % num2 : "Undefined";
    const isGreater = num1 > num2;
    const logicalCheck = num1 > 5 && num2 < 10;
    
    resultsDiv.innerHTML = `
        <p>Sum: ${sum}</p>
        <p>Difference: ${difference}</p>
        <p>Product: ${product}</p>
        <p>Division: ${division}</p>
        <p>Modulo: ${modulo}</p>
        <p>${num1} > ${num2}: ${isGreater}</p>
        <p>a>5 && b<10: ${logicalCheck}</p>
    `;
}

// Multiplication Table
function generateTable() {
    const num = parseInt(document.getElementById('multiplierInput').value);
    const tableDiv = document.getElementById('multiplicationTable');
    
    if (isNaN(num) || num < 1) {
        tableDiv.innerHTML = '<span class="text-error">Please enter a valid positive number</span>';
        return;
    }
    
    let tableHTML = "<table>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr><td>${num} × ${i}</td><td>=</td><td>${num * i}</td></tr>`;
    }
    tableHTML += "</table>";
    tableDiv.innerHTML = tableHTML;
}

// Color Mixer
function updateColor() {
    const red = document.getElementById('redSlider').value;
    const green = document.getElementById('greenSlider').value;
    const blue = document.getElementById('blueSlider').value;
    
    document.getElementById('redValue').textContent = red;
    document.getElementById('greenValue').textContent = green;
    document.getElementById('blueValue').textContent = blue;
    
    document.getElementById('colorDisplay').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
updateColor();

// Digital Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);

// Interactive Counter
let counter = 0;
function updateCounterDisplay() {
    document.getElementById('counterValue').textContent = counter;
}
function incrementCounter() { counter++; updateCounterDisplay(); }
function decrementCounter() { counter--; updateCounterDisplay(); }
function resetCounter() { counter = 0; updateCounterDisplay(); }

// Password Toggle
function togglePassword() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleButton = passwordInput.nextElementSibling;
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
}

// Light Bulb
function toggleLight() {
    let lightbulb = document.getElementById("lightbulb");
    if (lightbulb.src.includes("lightbulb_off.png")) {
        lightbulb.src = "media/lightbulb_on.png";
    } else {
        lightbulb.src = "media/lightbulb_off.png";
    }
}

// Session Storage
function storeSessionName() {
    const name = document.getElementById('sessionName').value.trim();
    if (name) {
        sessionStorage.setItem('userName', name);
        displaySessionName();
    }
}

function displaySessionName() {
    const name = sessionStorage.getItem('userName');
    const display = document.getElementById('sessionDisplay');
    if (name) {
        display.textContent = `Stored Name: ${name}`;
    } else {
        display.textContent = "No name stored in session";
    }
}
displaySessionName();

// Simple Calculator
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('calcDisplay').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('calcDisplay').value = '';
}

function calculateResult(operator) {
    if (operator === '=') {
        try {
            currentInput = eval(currentInput).toString();
            document.getElementById('calcDisplay').value = currentInput;
        } catch (e) {
            document.getElementById('calcDisplay').value = 'Error';
            currentInput = '';
        }
    } else {
        currentInput += operator;
        document.getElementById('calcDisplay').value = currentInput;
    }
}

// Registration Form
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("regPassword").value;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").style.display = "block";
        document.getElementById("name").style.borderColor = "var(--error)";
        valid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
        document.getElementById("name").style.borderColor = "";
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").style.borderColor = "var(--error)";
        valid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
        document.getElementById("email").style.borderColor = "";
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        document.getElementById("regPassword").style.borderColor = "var(--error)";
        valid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
        document.getElementById("regPassword").style.borderColor = "";
    }

    if (valid) {
        document.getElementById("successMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("registerForm").reset();
            document.getElementById("successMessage").style.display = "none";
        }, 2000);
    }
});

// Task Manager
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === "") return;
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = "task-item";
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)" class="secondary" style="padding: 0.25rem 0.5rem;font-size:0.8rem;">Delete</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
}

function removeTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li span').forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    tasks.forEach(taskText => {
        const li = document.createElement('li');
        li.className = "task-item";
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)" class="secondary" style="padding: 0.25rem 0.5rem;font-size:0.8rem;">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
loadTasks();

// Notes App
function saveNote() {
    const note = document.getElementById("noteInput").value;
    localStorage.setItem("savedNote", note);
    displayNote();
}

function clearNote() {
    localStorage.removeItem("savedNote");
    document.getElementById("noteInput").value = "";
    displayNote();
}

function displayNote() {
    const saved = localStorage.getItem("savedNote");
    const display = document.getElementById("displayNote");
    if (saved && saved.trim() !== "") {
        display.innerHTML = `<strong>Saved Note:</strong><p style="margin-top:0.5rem;">${saved}</p>`;
        document.getElementById("noteInput").value = saved;
    } else {
        display.innerHTML = '<span class="text-muted">No saved note</span>';
    }
}
displayNote();
