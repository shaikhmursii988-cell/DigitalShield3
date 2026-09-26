/* =========================================================
   DIGITALSHIELD
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   GLOBAL DATA
   ========================================================= */

const learningContent = {

    social: {

        title: "📱 Social Media Safety",

        html: `
            <h2>📱 Social Media Safety</h2>

            <p>
                Social media is useful for communication and learning,
                but personal information should be shared carefully.
            </p>

            <h3>Use Strong Account Security</h3>

            <ul>
                <li>Use a unique password for important accounts.</li>
                <li>Enable two-factor authentication when available.</li>
                <li>Review active sessions and logged-in devices.</li>
            </ul>

            <h3>Protect Personal Information</h3>

            <ul>
                <li>Avoid publicly sharing sensitive personal information.</li>
                <li>Review who can see your posts and profile information.</li>
                <li>Be careful when accepting requests from unknown accounts.</li>
            </ul>

            <h3>Think Before Posting</h3>

            <p>
                Information posted online can be copied, shared or stored.
                Consider the possible impact before publishing something.
            </p>
        `
    },


    footprint: {

        title: "🌐 Digital Footprint",

        html: `
            <h2>🌐 Digital Footprint</h2>

            <p>
                Your digital footprint is the collection of information
                and activity you leave behind while using the internet.
            </p>

            <h3>Examples</h3>

            <ul>
                <li>Social media posts and comments.</li>
                <li>Online searches and website activity.</li>
                <li>Accounts created on different services.</li>
                <li>Photos, videos and public profiles.</li>
            </ul>

            <h3>Manage Your Footprint</h3>

            <ul>
                <li>Review old public posts.</li>
                <li>Delete accounts you no longer need.</li>
                <li>Check app permissions regularly.</li>
                <li>Think before sharing information online.</li>
            </ul>
        `
    },


    password: {

        title: "🔑 Password Safety",

        html: `
            <h2>🔑 Password Safety</h2>

            <p>
                Strong account security begins with good password habits.
            </p>

            <h3>Good Password Practices</h3>

            <ul>
                <li>Use long and unique passwords.</li>
                <li>Avoid using easily guessed personal information.</li>
                <li>Do not reuse the same password everywhere.</li>
                <li>Use two-factor authentication where possible.</li>
            </ul>

            <h3>Password Strength</h3>

            <p>
                Longer passwords with a mixture of different character
                types are generally harder to guess.
            </p>

            <p>
                Use the password checker on this page only with a
                sample password, not a real password.
            </p>
        `
    },


    privacy: {

        title: "🔒 Online Privacy",

        html: `
            <h2>🔒 Online Privacy</h2>

            <p>
                Privacy means having control over what personal information
                you share and who can access it.
            </p>

            <h3>Privacy Checklist</h3>

            <ul>
                <li>Review privacy settings on social platforms.</li>
                <li>Check app permissions.</li>
                <li>Limit unnecessary location access.</li>
                <li>Be careful with public Wi-Fi and shared devices.</li>
                <li>Do not share sensitive information unnecessarily.</li>
            </ul>

            <h3>Regular Reviews</h3>

            <p>
                Make privacy checks a regular habit instead of changing
                settings only after something goes wrong.
            </p>
        `
    },


    tips: {

        title: "🧠 Online Safety Tips",

        html: `
            <h2>🧠 Online Safety Tips</h2>

            <p>
                Small daily habits can make your online experience much safer.
            </p>

            <h3>Remember These Habits</h3>

            <ul>
                <li>Keep your operating system and apps updated.</li>
                <li>Use screen locks on your devices.</li>
                <li>Verify unexpected requests before responding.</li>
                <li>Keep backups of important files.</li>
                <li>Review account security notifications.</li>
                <li>Think carefully before clicking unknown links.</li>
            </ul>

            <h3>Key Message</h3>

            <p>
                Stop, think and verify before taking an action that could
                expose your information or account.
            </p>
        `
    }

};


/* =========================================================
   NEWS CONTENT
   ========================================================= */

const newsContent = {

    accounts: {

        title: "🛡️ Protect Your Online Accounts",

        html: `
            <h2>🛡️ Protect Your Online Accounts</h2>

            <p>
                Account security is one of the most important parts of
                digital safety.
            </p>

            <h3>Recommended Habits</h3>

            <ul>
                <li>Use unique passwords for important accounts.</li>
                <li>Use two-factor authentication when available.</li>
                <li>Review account activity regularly.</li>
                <li>Keep recovery information updated.</li>
            </ul>

            <p>
                Never share your password or authentication codes with
                another person.
            </p>
        `
    },


    privacy: {

        title: "🔐 Privacy Update",

        html: `
            <h2>🔐 Review Your Privacy Settings</h2>

            <p>
                Apps and websites may request access to different types
                of information.
            </p>

            <h3>Quick Privacy Check</h3>

            <ul>
                <li>Review microphone and camera permissions.</li>
                <li>Check location permissions.</li>
                <li>Review profile visibility.</li>
                <li>Remove permissions that are not necessary.</li>
            </ul>

            <p>
                Regular privacy reviews help you stay aware of what
                information you are sharing.
            </p>
        `
    },


    click: {

        title: "📱 Think Before You Click",

        html: `
            <h2>📱 Think Before You Click</h2>

            <p>
                Unexpected messages and links should be treated carefully.
            </p>

            <h3>Before Taking Action</h3>

            <ul>
                <li>Check who sent the message.</li>
                <li>Read the request carefully.</li>
                <li>Do not rush because of pressure or urgency.</li>
                <li>Verify important requests through another trusted channel.</li>
            </ul>

            <p>
                Taking a few seconds to verify can prevent many avoidable
                security mistakes.
            </p>
        `
    }

};


const tickerMessages = [

    "Stay alert. Keep your accounts protected.",

    "Use unique passwords for important accounts.",

    "Review your privacy settings regularly.",

    "Keep your devices and apps updated.",

    "Think before sharing personal information.",

    "Verify unexpected requests before responding.",

    "Enable two-factor authentication when available."
];


/* =========================================================
   QUIZ DATA
   ========================================================= */

const quizQuestions = [

    {
        question:
            "Which is the strongest password practice?",

        options: [
            "Use the same password everywhere",
            "Use a unique, long password",
            "Use your birthday",
            "Use your name"
        ],

        answer: 1,

        explanation:
            "Unique and longer passwords provide better protection than predictable or reused passwords."
    },

    {
        question:
            "What does two-factor authentication add?",

        options: [
            "A second layer of account verification",
            "A faster internet connection",
            "More storage space",
            "A new username"
        ],

        answer: 0,

        explanation:
            "Two-factor authentication adds another verification step in addition to your password."
    },

    {
        question:
            "What is a digital footprint?",

        options: [
            "A computer component",
            "A collection of your online activity and information",
            "A type of password",
            "A mobile application"
        ],

        answer: 1,

        explanation:
            "Your digital footprint includes information and activity you leave behind online."
    },

    {
        question:
            "Which action improves online privacy?",

        options: [
            "Sharing everything publicly",
            "Using the same account everywhere",
            "Reviewing privacy settings",
            "Posting sensitive information"
        ],

        answer: 2,

        explanation:
            "Regularly reviewing privacy settings helps control who can access your information."
    },

    {
        question:
            "What should you do with an unexpected request for sensitive information?",

        options: [
            "Respond immediately",
            "Share the information",
            "Verify the request first",
            "Forward it to everyone"
        ],

        answer: 2,

        explanation:
            "Unexpected requests should be verified before sharing sensitive information."
    },

    {
        question:
            "Why are software updates important?",

        options: [
            "They only change wallpapers",
            "They can include security fixes",
            "They remove all files",
            "They disable security"
        ],

        answer: 1,

        explanation:
            "Updates can contain security improvements and fixes for known problems."
    },

    {
        question:
            "Which is a good social media habit?",

        options: [
            "Accept every unknown request",
            "Share private information publicly",
            "Review who can see your content",
            "Share account passwords"
        ],

        answer: 2,

        explanation:
            "Reviewing visibility and privacy controls helps reduce unnecessary exposure."
    },

    {
        question:
            "What is a good approach to suspicious links?",

        options: [
            "Click immediately",
            "Verify before opening",
            "Share them publicly",
            "Ignore all security warnings"
        ],

        answer: 1,

        explanation:
            "Verifying unexpected links before opening them is a safer habit."
    },

    {
        question:
            "Which information should be handled carefully online?",

        options: [
            "Sensitive personal information",
            "Public weather information",
            "General educational topics",
            "Public news headlines"
        ],

        answer: 0,

        explanation:
            "Sensitive personal information should only be shared when necessary and with trusted services."
    },

    {
        question:
            "What is the best general cybersecurity habit?",

        options: [
            "Trust everything",
            "Ignore updates",
            "Stop, think and verify",
            "Use one password everywhere"
        ],

        answer: 2,

        explanation:
            "Stopping, thinking and verifying before taking action is a useful general safety habit."
    }

];


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let currentQuizQuestion = 0;

let quizAnswers = new Array(quizQuestions.length).fill(null);

let loggedIn = false;


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeApp() {

    setupNavigation();

    setupLogin();

    setupPasswordChecker();

    setupLearningButtons();

    setupNewsButtons();

    setupModal();

    setupQuiz();

    setupSmartScore();

    setupTheme();

    startNewsTicker();

    loadLoginState();

}


/* =========================================================
   VIEW MANAGEMENT
   ========================================================= */

function showView(viewName) {

    const views = document.querySelectorAll(".app-view");

    views.forEach(view => {

        view.classList.remove("active");

    });


    const selectedView =
        document.getElementById(`view-${viewName}`);

    if (!selectedView) {
        return;
    }

    selectedView.classList.add("active");


    const footer =
        document.getElementById("appFooter");

    if (footer) {

        if (viewName === "login") {

            footer.classList.remove("visible");

        } else {

            footer.classList.add("visible");

        }
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (viewName === "quiz") {

        renderQuizQuestion();

    }
}


/* =========================================================
   LOGIN
   ========================================================= */

function setupLogin() {

    const form =
        document.getElementById("loginForm");

    if (!form) {
        return;
    }


    form.addEventListener("submit", event => {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        if (!email || !password) {

            alert("Please enter your email and password.");

            return;
        }


        loggedIn = true;

        localStorage.setItem(
            "digitalShieldLoggedIn",
            "true"
        );

        localStorage.setItem(
            "digitalShieldUser",
            email
        );


        showView("intro");

    });


    const demoButton =
        document.getElementById("demoFillBtn");

    if (demoButton) {

        demoButton.addEventListener("click", () => {

            document.getElementById("loginEmail").value =
                "student@digitalshield.demo";

            document.getElementById("loginPassword").value =
                "DigitalShield@123";

            updatePasswordStrength(
                "DigitalShield@123",
                "strengthFill",
                "strengthText"
            );

        });
    }


    const passwordToggle =
        document.getElementById("passwordToggle");

    if (passwordToggle) {

        passwordToggle.addEventListener("click", () => {

            togglePassword(
                "loginPassword",
                passwordToggle
            );

        });
    }
}


function loadLoginState() {

    const savedLogin =
        localStorage.getItem("digitalShieldLoggedIn");

    if (savedLogin === "true") {

        loggedIn = true;

        showView("intro");

    } else {

        showView("login");

    }
}


/* =========================================================
   PASSWORD STRENGTH
   ========================================================= */

function calculatePasswordStrength(password) {

    let score = 0;

    if (password.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }


    return score;
}


function getStrengthLabel(score) {

    if (score === 0) {
        return "-";
    }

    if (score <= 2) {
        return "Weak";
    }

    if (score === 3) {
        return "Medium";
    }

    if (score === 4) {
        return "Strong";
    }

    return "Very Strong";
}


function updatePasswordStrength(
    password,
    fillId,
    textId
) {

    const fill =
        document.getElementById(fillId);

    const text =
        document.getElementById(textId);


    if (!fill || !text) {
        return;
    }


    const score =
        calculatePasswordStrength(password);

    const percent =
        (score / 5) * 100;


    fill.style.width =
        `${percent}%`;

    text.textContent =
        getStrengthLabel(score);


    if (score === 0) {

        fill.style.opacity = "0.3";

    } else {

        fill.style.opacity = "1";

    }
}


function setupPasswordChecker() {

    const loginPassword =
        document.getElementById("loginPassword");

    if (loginPassword) {

        loginPassword.addEventListener(
            "input",
            () => {

                updatePasswordStrength(
                    loginPassword.value,
                    "strengthFill",
                    "strengthText"
                );

                updatePasswordRules(
                    loginPassword.value
                );

            }
        );

    }


    const livePassword =
        document.getElementById("livePassword");

    if (livePassword) {

        livePassword.addEventListener(
            "input",
            () => {

                updatePasswordStrength(
                    livePassword.value,
                    "liveStrengthFill",
                    "liveStrengthText"
                );

            }
        );

    }


    const liveToggle =
        document.getElementById("livePasswordToggle");

    if (liveToggle) {

        liveToggle.addEventListener(
            "click",
            () => {

                togglePassword(
                    "livePassword",
                    liveToggle
                );

            }
        );

    }
}


function updatePasswordRules(password) {

    const rules = {

        ruleLength:
            password.length >= 8,

        ruleUpper:
            /[A-Z]/.test(password),

        ruleNumber:
            /[0-9]/.test(password),

        ruleSpecial:
            /[^A-Za-z0-9]/.test(password)

    };


    Object.entries(rules).forEach(
        ([id, valid]) => {

            const element =
                document.getElementById(id);

            if (!element) {
                return;
            }

            if (valid) {

                element.classList.add("valid");

                element.textContent =
                    element.textContent.replace(
                        "○",
                        "✓"
                    );

            } else {

                element.classList.remove("valid");

                element.textContent =
                    element.textContent.replace(
                        "✓",
                        "○"
                    );

            }

        }
    );
}


function togglePassword(inputId, button) {

    const input =
        document.getElementById(inputId);

    if (!input) {
        return;
    }


    if (input.type === "password") {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁️";

    }
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle(
                    "mobile-active"
                );

            }
        );

    }
}


function closeMobileMenu() {

    const navLinks =
        document.getElementById("navLinks");

    if (navLinks) {

        navLinks.classList.remove(
            "mobile-active"
        );

    }
}


function scrollToNews() {

    const news =
        document.getElementById("news");

    if (news) {

        news.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =========================================================
   LEARNING MODALS
   ========================================================= */

function setupLearningButtons() {

    const buttons =
        document.querySelectorAll(
            ".explore-btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const topic =
                    button.dataset.topic;

                const data =
                    learningContent[topic];

                if (!data) {
                    return;
                }

                openModal(data.html);

            }
        );

    });
}


/* =========================================================
   NEWS BUTTONS
   ========================================================= */

function setupNewsButtons() {

    const buttons =
        document.querySelectorAll(
            ".news-read-btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const topic =
                    button.dataset.news;

                const data =
                    newsContent[topic];

                if (!data) {
                    return;
                }

                openModal(data.html);

            }
        );

    });
}


/* =========================================================
   MODAL
   ========================================================= */

function setupModal() {

    const modal =
        document.getElementById("infoModal");

    const closeButton =
        document.getElementById("modalCloseBtn");


    if (!modal) {
        return;
    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );

    }


    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {

                closeModal();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("show")
            ) {

                closeModal();

            }

        }
    );
}


function openModal(content) {

    const modal =
        document.getElementById("infoModal");

    const body =
        document.getElementById("modalBody");


    if (!modal || !body) {
        return;
    }


    body.innerHTML = content;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeModal() {

    const modal =
        document.getElementById("infoModal");

    if (!modal) {
        return;
    }


    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* =========================================================
   NEWS TICKER
   ========================================================= */

function startNewsTicker() {

    const ticker =
        document.getElementById("newsTickerText");

    if (!ticker) {
        return;
    }


    let index = 0;


    setInterval(() => {

        index =
            (index + 1) %
            tickerMessages.length;

        ticker.style.opacity = "0";

        setTimeout(() => {

            ticker.textContent =
                tickerMessages[index];

            ticker.style.opacity = "1";

        }, 200);

    }, 3500);
}


/* =========================================================
   SMART SAFETY SCORE
   ========================================================= */

function setupSmartScore() {

    const items =
        document.querySelectorAll(
            ".score-item"
        );


    items.forEach(item => {

        item.addEventListener(
            "change",
            calculateSmartScore
        );

    });

}


function calculateSmartScore() {

    const items =
        document.querySelectorAll(
            ".score-item"
        );

    const checked =
        document.querySelectorAll(
            ".score-item:checked"
        ).length;


    const total =
        items.length;


    if (!total) {
        return;
    }


    const percentage =
        Math.round(
            (checked / total) * 100
        );


    const score =
        document.getElementById(
            "smart-score-number"
        );

    const label =
        document.getElementById(
            "smart-score-label"
        );

    const fill =
        document.getElementById(
            "smart-score-fill"
        );


    if (score) {

        score.textContent =
            `${percentage}%`;

    }


    if (fill) {

        fill.style.width =
            `${percentage}%`;

    }


    if (label) {

        if (percentage === 0) {

            label.textContent =
                "Beginner";

        } else if (percentage <= 40) {

            label.textContent =
                "Getting Started";

        } else if (percentage <= 80) {

            label.textContent =
                "Good Awareness";

        } else {

            label.textContent =
                "Excellent Awareness";

        }

    }

}


/* =========================================================
   QUIZ
   ========================================================= */

function setupQuiz() {

    const nextButton =
        document.getElementById(
            "nextQuestionBtn"
        );

    const prevButton =
        document.getElementById(
            "prevQuestionBtn"
        );

    const retakeButton =
        document.getElementById(
            "retakeQuizBtn"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextQuestion
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            previousQuestion
        );

    }


    if (retakeButton) {

        retakeButton.addEventListener(
            "click",
            restartQuiz
        );

    }


    renderQuizQuestion();

}


function renderQuizQuestion() {

    const question =
        quizQuestions[currentQuizQuestion];

    if (!question) {
        return;
    }


    const questionNumber =
        document.getElementById(
            "quizQuestionNumber"
        );

    const questionTitle =
        document.getElementById(
            "quizQuestion"
        );

    const optionsContainer =
        document.getElementById(
            "quizOptions"
        );

    const progressText =
        document.getElementById(
            "quizProgressText"
        );

    const progressPercent =
        document.getElementById(
            "quizProgressPercent"
        );

    const progressFill =
        document.getElementById(
            "quizProgressFill"
        );

    const nextButton =
        document.getElementById(
            "nextQuestionBtn"
        );


    const number =
        currentQuizQuestion + 1;

    const percent =
        Math.round(
            (number / quizQuestions.length) * 100
        );


    if (questionNumber) {

        questionNumber.textContent =
            `QUESTION ${String(number).padStart(2, "0")}`;

    }


    if (questionTitle) {

        questionTitle.textContent =
            question.question;

    }


    if (progressText) {

        progressText.textContent =
            `Question ${number} of ${quizQuestions.length}`;

    }


    if (progressPercent) {

        progressPercent.textContent =
            `${percent}%`;

    }


    if (progressFill) {

        progressFill.style.width =
            `${percent}%`;

    }


    if (nextButton) {

        nextButton.textContent =
            currentQuizQuestion ===
            quizQuestions.length - 1
                ? "Finish Quiz ✓"
                : "Next →";

    }


    if (optionsContainer) {

        optionsContainer.innerHTML = "";


        question.options.forEach(
            (option, index) => {

                const label =
                    document.createElement("label");

                label.className =
                    "quiz-option-label";


                if (
                    quizAnswers[currentQuizQuestion]
                    === index
                ) {

                    label.classList.add(
                        "selected"
                    );

                }


                label.innerHTML = `

                    <span class="custom-radio"></span>

                    <span class="option-text">
                        ${escapeHtml(option)}
                    </span>

                `;


                label.addEventListener(
                    "click",
                    () => {

                        quizAnswers[
                            currentQuizQuestion
                        ] = index;

                        renderQuizQuestion();

                    }
                );


                optionsContainer.appendChild(
                    label
                );

            }
        );

    }


    renderQuizDots();

}


function renderQuizDots() {

    const container =
        document.getElementById(
            "quizJumpDots"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    quizQuestions.forEach(
        (_, index) => {

            const dot =
                document.createElement("button");

            dot.type = "button";

            dot.className =
                "jump-dot";


            if (
                index === currentQuizQuestion
            ) {

                dot.classList.add(
                    "current"
                );

            }


            if (
                quizAnswers[index] !== null
            ) {

                dot.classList.add(
                    "answered"
                );

            }


            dot.textContent =
                index + 1;


            dot.addEventListener(
                "click",
                () => {

                    currentQuizQuestion =
                        index;

                    renderQuizQuestion();

                }
            );


            container.appendChild(dot);

        }
    );
}


function nextQuestion() {

    if (
        quizAnswers[currentQuizQuestion]
        === null
    ) {

        alert(
            "Please select an answer first."
        );

        return;
    }


    if (
        currentQuizQuestion <
        quizQuestions.length - 1
    ) {

        currentQuizQuestion++;

        renderQuizQuestion();

    } else {

        finishQuiz();

    }
}


function previousQuestion() {

    if (currentQuizQuestion > 0) {

        currentQuizQuestion--;

        renderQuizQuestion();

    }
}


function finishQuiz() {

    let score = 0;


    quizQuestions.forEach(
        (question, index) => {

            if (
                quizAnswers[index]
                === question.answer
            ) {

                score++;

            }

        }
    );


    showResults(score);

}


function showResults(score) {

    const scoreNumber =
        document.getElementById(
            "scoreNumber"
        );

    const title =
        document.getElementById(
            "resultTitle"
        );

    const description =
        document.getElementById(
            "resultDescription"
        );

    const reviewList =
        document.getElementById(
            "reviewCardsList"
        );


    if (scoreNumber) {

        scoreNumber.textContent =
            score;

    }


    let resultTitle =
        "Keep Learning!";

    let resultDescription =
        "Review the learning modules and try the quiz again.";


    if (score >= 9) {

        resultTitle =
            "Excellent Awareness! 🛡️";

        resultDescription =
            "You demonstrated strong digital safety awareness.";

    } else if (score >= 7) {

        resultTitle =
            "Great Job! 🔐";

        resultDescription =
            "You have a good understanding of important online safety habits.";

    } else if (score >= 5) {

        resultTitle =
            "Good Start! 🌐";

        resultDescription =
            "You know several important concepts. Keep learning to strengthen your awareness.";

    }


    if (title) {

        title.textContent =
            resultTitle;

    }


    if (description) {

        description.textContent =
            resultDescription;

    }


    if (reviewList) {

        reviewList.innerHTML = "";


        quizQuestions.forEach(
            (question, index) => {

                const userAnswer =
                    quizAnswers[index];

                const correct =
                    userAnswer ===
                    question.answer;


                const card =
                    document.createElement("article");

                card.className =
                    `review-card ${
                        correct
                            ? "correct"
                            : "incorrect"
                    }`;


                const userAnswerText =
                    userAnswer === null
                        ? "Not answered"
                        : question.options[userAnswer];


                const correctAnswerText =
                    question.options[
                        question.answer
                    ];


                card.innerHTML = `

                    <div class="review-card-top">

                        <span class="review-q-num">
                            QUESTION ${index + 1}
                        </span>

                        <span class="review-badge ${
                            correct
                                ? "correct"
                                : "incorrect"
                        }">

                            ${
                                correct
                                    ? "Correct"
                                    : "Incorrect"
                            }

                        </span>

                    </div>


                    <div class="review-question">
                        ${escapeHtml(question.question)}
                    </div>


                    <div class="review-answers-box">

                        <div class="review-ans-item">

                            <span class="review-ans-label">
                                Your Answer
                            </span>

                            ${escapeHtml(userAnswerText)}

                        </div>


                        <div class="review-ans-item">

                            <span class="review-ans-label">
                                Correct Answer
                            </span>

                            ${escapeHtml(correctAnswerText)}

                        </div>

                    </div>


                    <div class="review-explanation">

                        💡 ${escapeHtml(question.explanation)}

                    </div>

                `;


                reviewList.appendChild(card);

            }
        );

    }


    showView("results");

}


function restartQuiz() {

    currentQuizQuestion = 0;

    quizAnswers =
        new Array(
            quizQuestions.length
        ).fill(null);

    showView("quiz");

}


/* =========================================================
   THEME
   ========================================================= */

function setupTheme() {

    const button =
        document.getElementById(
            "themeToggle"
        );


    if (!button) {
        return;
    }


    const savedTheme =
        localStorage.getItem(
            "digitalShieldTheme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-theme"
        );

        button.textContent = "☀️";

    }


    button.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-theme"
            );


            const light =
                document.body.classList.contains(
                    "light-theme"
                );


            localStorage.setItem(
                "digitalShieldTheme",
                light
                    ? "light"
                    : "dark"
            );


            button.textContent =
                light
                    ? "☀️"
                    : "🌙";

        }
    );
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   GLOBAL LOGOUT HELPER
   ========================================================= */

function logoutDigitalShield() {

    localStorage.removeItem(
        "digitalShieldLoggedIn"
    );

    localStorage.removeItem(
        "digitalShieldUser"
    );

    loggedIn = false;

    showView("login");

}


/* =========================================================
   END
   ========================================================= */