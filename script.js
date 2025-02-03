// Generates a new two-digit addition problem
function generateProblem() {
    let num1 = Math.floor(Math.random() * 90) + 10;
    let num2 = Math.floor(Math.random() * 90) + 10;

    let tens1 = Math.floor(num1 / 10) * 10;
    let tens2 = Math.floor(num2 / 10) * 10;
    let ones1 = num1 % 10;
    let ones2 = num2 % 10;

    // Update UI
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    document.getElementById('tens1').textContent = tens1;
    document.getElementById('tens2').textContent = tens2;
    document.getElementById('ones1').textContent = ones1;
    document.getElementById('ones2').textContent = ones2;

    // Reset input fields and feedback
    document.getElementById('tensAnswer').value = '';
    document.getElementById('onesAnswer').value = '';
    document.getElementById('totalAnswer').value = '';
    document.getElementById('tensFeedback').textContent = '';
    document.getElementById('onesFeedback').textContent = '';
    document.getElementById('totalFeedback').textContent = '';
}

// Function to check the tens addition
function checkTens() {
    let answer = parseInt(document.getElementById('tensAnswer').value);
    let correct = parseInt(document.getElementById('tens1').textContent) + parseInt(document.getElementById('tens2').textContent);
    
    if (answer === correct) {
        document.getElementById('tensFeedback').textContent = "✔ Correct!";
        document.getElementById('tensFeedback').className = "feedback correct";
    } else {
        document.getElementById('tensFeedback').textContent = `❌ Try again! Remember: ${document.getElementById('tens1').textContent} + ${document.getElementById('tens2').textContent} = ${correct}`;
        document.getElementById('tensFeedback').className = "feedback wrong";
    }
}

// Function to check the ones addition
function checkOnes() {
    let answer = parseInt(document.getElementById('onesAnswer').value);
    let correct = parseInt(document.getElementById('ones1').textContent) + parseInt(document.getElementById('ones2').textContent);
    
    if (answer === correct) {
        document.getElementById('onesFeedback').textContent = "✔ Correct!";
        document.getElementById('onesFeedback').className = "feedback correct";
    } else {
        document.getElementById('onesFeedback').textContent = `❌ Try again! Remember: ${document.getElementById('ones1').textContent} + ${document.getElementById('ones2').textContent} = ${correct}`;
        document.getElementById('onesFeedback').className = "feedback wrong";
    }
}

// Function to check the final total addition
function checkTotal() {
    let answer = parseInt(document.getElementById('totalAnswer').value);
    let correct = parseInt(document.getElementById('num1').textContent) + parseInt(document.getElementById('num2').textContent);
    
    if (answer === correct) {
        document.getElementById('totalFeedback').textContent = "🎉 You got it!";
        document.getElementById('totalFeedback').className = "feedback correct";
    } else {
        document.getElementById('totalFeedback').textContent = `❌ Not quite! First, add the tens: ${document.getElementById('tens1').textContent} + ${document.getElementById('tens2').textContent} = ${parseInt(document.getElementById('tens1').textContent) + parseInt(document.getElementById('tens2').textContent)}. Then add the ones: ${document.getElementById('ones1').textContent} + ${document.getElementById('ones2').textContent} = ${parseInt(document.getElementById('ones1').textContent) + parseInt(document.getElementById('ones2').textContent)}. Now try adding them together!`;
        document.getElementById('totalFeedback').className = "feedback wrong";
    }
}

// Start the first problem on load
generateProblem();
