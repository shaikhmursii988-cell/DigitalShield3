/* =========================================================
   DIGITALSHIELD - SCRIPT.JS
   ========================================================= */


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    document.querySelectorAll(selector);


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

const pages = [
    ...$$(".page")
];


function go(page) {

    pages.forEach((p) => {

        p.classList.toggle(
            "active",
            p.id === page
        );

    });


    $$("[data-page]").forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.page === page
        );

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    const sidebar =
        $("#sidebar");

    if (sidebar) {
        sidebar.classList.remove("open");
    }

}


/* =========================================================
   PAGE BUTTONS
   ========================================================= */

$$("[data-page]").forEach((element) => {

    element.addEventListener(
        "click",
        () => go(element.dataset.page)
    );

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const hamburger =
    $("#hamb");

if (hamburger) {

    hamburger.addEventListener(
        "click",
        () => {

            const sidebar =
                $("#sidebar");

            if (sidebar) {
                sidebar.classList.toggle("open");
            }

        }
    );

}


/* =========================================================
   THEME BUTTON
   ========================================================= */

const themeButton =
    $("#themeBtn");

if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light"
            );

        }
    );

}


/* =========================================================
   PASSWORD CHECKER
   ========================================================= */

const pwd =
    $("#pwdInput");

const bar =
    $("#pwdBar");

const res =
    $("#pwdResult");

const showPwd =
    $("#showPwd");


function checkPwd() {

    if (!pwd || !bar || !res) {
        return;
    }


    const value =
        pwd.value;


    let strength = 0;


    if (value.length >= 8) {
        strength++;
    }


    if (
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value)
    ) {
        strength++;
    }


    if (/\d/.test(value)) {
        strength++;
    }


    if (
        /[^A-Za-z0-9]/.test(value)
    ) {
        strength++;
    }


    if (value.length >= 14) {
        strength++;
    }


    bar.style.width =
        (strength * 20) + "%";


    const names = [
        "Very weak",
        "Weak",
        "Fair",
        "Strong",
        "Very strong"
    ];


    res.textContent =
        value
            ? names[Math.max(0, strength - 1)]
              + " password"
            : "Start typing to check strength";

}


if (pwd) {

    pwd.addEventListener(
        "input",
        checkPwd
    );

}


if (showPwd) {

    showPwd.addEventListener(
        "click",
        () => {

            if (pwd.type === "password") {

                pwd.type = "text";

                showPwd.textContent =
                    "Hide";

            } else {

                pwd.type = "password";

                showPwd.textContent =
                    "Show";

            }

        }
    );

}


/* =========================================================
   SCAM DETECTOR
   ========================================================= */

const scanButton =
    $("#scanBtn");


if (scanButton) {

    scanButton.addEventListener(
        "click",
        () => {

            const text =
                $("#scamText").value.toLowerCase();


            let hits = 0;


            const words = [
                "urgent",
                "otp",
                "password",
                "verify",
                "click",
                "prize",
                "winner",
                "payment",
                "refund",
                "account blocked"
            ];


            words.forEach((word) => {

                if (text.includes(word)) {
                    hits++;
                }

            });


            const result =
                $("#scanResult");


            result.className =
                "result show";


            if (hits >= 3) {

                result.innerHTML =
                    "⚠️ <b>High warning signs:</b> " +
                    "the message contains several common scam patterns. " +
                    "Do not share sensitive information; " +
                    "verify through an official channel.";

            }

            else if (hits) {

                result.innerHTML =
                    "🟡 <b>Some warning signs:</b> " +
                    "slow down and verify the sender, " +
                    "link and request independently.";

            }

            else {

                result.innerHTML =
                    "🟢 <b>No obvious keyword warning found:</b> " +
                    "still verify the sender and context " +
                    "before taking action.";

            }

        }
    );

}


/* =========================================================
   URL CHECKER
   ========================================================= */

const urlButton =
    $("#urlBtn");


if (urlButton) {

    urlButton.addEventListener(
        "click",
        () => {

            const value =
                $("#urlInput").value.trim();


            const result =
                $("#urlResult");


            result.className =
                "result show";


            if (!value) {

                result.textContent =
                    "Enter a URL first.";

                return;
            }


            try {

                const url =
                    new URL(value);


                const warning =

                    ![
                        "http:",
                        "https:"
                    ].includes(
                        url.protocol
                    )

                    ||

                    url.hostname.includes("@")

                    ||

                    /\d{1,3}(\.\d{1,3}){3}/
                        .test(url.hostname);


                if (warning) {

                    result.innerHTML =
                        "⚠️ <b>Be careful:</b> " +
                        "this URL has warning signs. " +
                        "Do not enter passwords or payment details.";

                }

                else {

                    result.innerHTML =
                        "🟢 <b>Basic check passed:</b> " +
                        "the URL uses a normal web protocol. " +
                        "This does not guarantee that the site is safe.";

                }

            }

            catch (error) {

                result.textContent =
                    "⚠️ That does not look like a valid URL.";

            }

        }
    );

}


/* =========================================================
   SAFETY QUIZ
   ========================================================= */

const questions = [
    [
        "What should you do with an unexpected OTP request?",
        ["Share it", "Ignore/verify it", "Post it online", "Forward it"],
        1
    ],
    [
        "Which password is safer?",
        ["password123", "MyName2000", "A long unique passphrase", "12345678"],
        2
    ],
    [
        "What is 2FA used for?",
        ["Extra account protection", "Faster Wi-Fi", "More storage", "Screen brightness"],
        0
    ],
    [
        "A suspicious link asks you to act urgently. What is best?",
        ["Click quickly", "Verify independently", "Send it to friends", "Enter your OTP"],
        1
    ],
    [
        "What should you do before sharing personal information online?",
        ["Think about who needs it", "Share everything", "Use public Wi-Fi only", "Send it to strangers"],
        0
    ],
    [
        "What is phishing?",
        ["A fishing game", "Tricking you into revealing info", "Fixing a bug", "Upgrading software"],
        1
    ],
    [
        "Which of these is a sign of a fake website?",
        ["Poor spelling/grammar", "A padlock icon", "Clear contact info", "Fast loading speed"],
        0
    ],
    [
        "What does 'https' mean?",
        ["Happy To Talk", "Secure connection", "Fast internet", "Public network"],
        1
    ],
    [
        "How often should you update your software?",
        ["Never", "Once a year", "When prompted by official sources", "Only on new devices"],
        2
    ],
    [
        "What is malware?",
        ["Good hardware", "A type of firewall", "Malicious software", "A shopping site"],
        2
    ],
    [
        "Is it safe to use public Wi-Fi for banking?",
        ["Yes, always", "No, it's risky", "Only on weekends", "Yes, if it's free"],
        1
    ],
    [
        "What is social engineering?",
        ["Building bridges", "Tricking people into giving info", "A social media platform", "Networking events"],
        1
    ],
    [
        "Why should you avoid reusing passwords?",
        ["It uses more memory", "It's hard to type", "One breach compromises all", "It's illegal"],
        2
    ],
    [
        "What is a 'Digital Arrest' scam?",
        ["An online game", "A fake police threat over video call", "A court summons", "A new law"],
        1
    ],
    [
        "What should you do if a friend urgently asks for money via WhatsApp?",
        ["Send immediately", "Call them directly to verify", "Block them", "Forward to others"],
        1
    ],
    [
        "What is the safest way to store passwords?",
        ["On a sticky note", "In a text file", "In a password manager", "In your email draft"],
        2
    ],
    [
        "How do you identify a fake job offer?",
        ["It pays a fair wage", "Requires upfront payment", "Has an interview", "Checks your skills"],
        1
    ],
    [
        "What should you check before downloading an app?",
        ["App reviews and permissions", "The app icon color", "Nothing", "The phone's volume"],
        0
    ],
    [
        "Why do scammers create a sense of urgency?",
        ["To save time", "To make you panic and act without thinking", "To be efficient", "To help you"],
        1
    ],
    [
        "What is a deepfake?",
        ["A deep ocean dive", "AI-generated fake media", "A complex password", "A secure folder"],
        1
    ]
];


let questionIndex = 0;

let score = 0;


function renderQuestion() {

    const qText =
        $("#qText");

    const qOptions =
        $("#qOptions");

    const nextQ =
        $("#nextQ");


    if (!qText || !qOptions || !nextQ) {
        return;
    }


    const question =
        questions[questionIndex];


    qText.textContent =
        (questionIndex + 1)
        + ". "
        + question[0];


    qOptions.innerHTML =
        question[1]
            .map(
                (option, index) => `
                    <label>
                        <input
                            type="radio"
                            name="q"
                            value="${index}"
                        >
                        ${option}
                    </label>
                `
            )
            .join("");


    nextQ.textContent =
        questionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question →";

}


const nextQuestionButton =
    $("#nextQ");


if (nextQuestionButton) {

    nextQuestionButton.addEventListener(
        "click",
        () => {

            const answer =
                document.querySelector(
                    'input[name="q"]:checked'
                );


            if (!answer) {

                alert(
                    "Please select an answer."
                );

                return;
            }


            if (
                Number(answer.value)
                ===
                questions[questionIndex][2]
            ) {

                score++;

            }


            if (
                questionIndex
                <
                questions.length - 1
            ) {

                questionIndex++;

                renderQuestion();

            }

            else {

                $("#qText").textContent =
                    "Quiz completed!";


                $("#qOptions").innerHTML =
                    "";


                $("#nextQ").style.display =
                    "none";


                $("#quizResult").innerHTML = `
                    <div class="quizResult">
                        Your score:
                        ${score}/${questions.length}
                        —
                        ${
                            score >= 4
                                ? "Great job!"
                                : "Keep learning and try again."
                        }
                    </div>
                `;

            }

        }
    );

}


renderQuestion();


/* =========================================================
   LATEST NEWS LABEL
   ========================================================= */

const newsBadge =
    document.querySelector(".live-badge");


if (newsBadge) {

    newsBadge.title =
        "Verified awareness updates added on 7 September 2026";

}