/* =====================================================
   HAPPY BIRTHDAY BEST FRIEND WEBSITE
   JAVASCRIPT
===================================================== */


/* =====================================================
   START WEBSITE
===================================================== */

function startWebsite() {

    const intro =
        document.getElementById("intro");

    const main =
        document.getElementById("mainContent");


    intro.style.display = "none";

    main.style.display = "block";


    createConfetti();

    createHearts();

}


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText =
    document.getElementById("typingText");


const messages = [

    "You are not just a best friend... 🫶",

    "You are one of my favourite people. ❤️",

    "Thank you for every beautiful memory. ✨",

    "Thank you for every laugh. 😂",

    "Thank you for always being there. 💖",

    "Happy Birthday, Best Friend! 🎂",

    "Here's to many more memories together! 🥳"

];


let messageIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingAnimation() {

    if (!typingText) {
        return;
    }


    const currentMessage =
        messages[messageIndex];


    if (!deleting) {

        typingText.textContent =
            currentMessage.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentMessage.length
        ) {

            deleting = true;

            setTimeout(
                typingAnimation,
                1800
            );

            return;

        }

    }

    else {

        typingText.textContent =
            currentMessage.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            messageIndex++;

            if (
                messageIndex >=
                messages.length
            ) {

                messageIndex = 0;

            }

        }

    }


    setTimeout(

        typingAnimation,

        deleting ? 50 : 80

    );

}


typingAnimation();


/* =====================================================
   CREATE ONE FLOATING HEART
===================================================== */

function createHeart() {

    const heart =
        document.createElement("div");


    const icons = [

        "❤️",
        "💖",
        "💕",
        "💗",
        "✨",
        "🫶",
        "🌸",
        "⭐",
        "💫"

    ];


    heart.textContent =
        icons[
            Math.floor(
                Math.random() *
                icons.length
            )
        ];


    heart.style.position =
        "fixed";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.bottom =
        "-50px";


    heart.style.fontSize =
        Math.random() * 25 + 20 + "px";


    heart.style.zIndex =
        "10000";


    heart.style.pointerEvents =
        "none";


    document.body.appendChild(
        heart
    );


    const duration =
        Math.random() * 5000 + 5000;


    heart.animate(

        [

            {
                transform:
                    "translateY(0) rotate(0deg)",
                opacity: 1
            },

            {
                transform:
                    "translateY(-110vh) rotate(360deg)",
                opacity: 0
            }

        ],

        {

            duration: duration,

            easing: "linear"

        }

    );


    setTimeout(

        function () {

            heart.remove();

        },

        duration

    );

}


/* =====================================================
   CONTINUOUS HEARTS
===================================================== */

let heartsStarted = false;


function createHearts() {

    if (heartsStarted) {

        return;

    }


    heartsStarted = true;


    setInterval(

        function () {

            createHeart();

        },

        700

    );

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const icons = [

        "🎉",
        "🎊",
        "❤️",
        "💖",
        "💕",
        "✨",
        "🎂",
        "🎈",
        "🥳",
        "🫶",
        "⭐"

    ];


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.textContent =
            icons[
                Math.floor(
                    Math.random() *
                    icons.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-50px";


        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";


        confetti.style.zIndex =
            "20000";


        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const duration =
            Math.random() * 2500 + 2000;


        confetti.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }

            ],

            {

                duration: duration,

                easing: "linear"

            }

        );


        setTimeout(

            function () {

                confetti.remove();

            },

            duration

        );

    }

}


/* =====================================================
   PHOTO POPUP
===================================================== */

const photos =
    document.querySelectorAll(
        ".photo-card img"
    );


const modal =
    document.getElementById(
        "imageModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


photos.forEach(

    function (photo) {

        photo.addEventListener(

            "click",

            function () {

                modalImage.src =
                    photo.src;

                modal.classList.add(
                    "show"
                );

            }

        );

    }

);


/* =====================================================
   CLOSE PHOTO
===================================================== */

function closeImage() {

    modal.classList.remove(
        "show"
    );

}


/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE IMAGE
===================================================== */

modal.addEventListener(

    "click",

    function (event) {

        if (
            event.target === modal
        ) {

            closeImage();

        }

    }

);


/* =====================================================
   ESC KEY CLOSES PHOTO
===================================================== */

document.addEventListener(

    "keydown",

    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeImage();

        }

    }

);


/* =====================================================
   FINAL SURPRISE
===================================================== */

function finalSurprise() {

    const message =
        document.getElementById(
            "finalMessage"
        );


    message.classList.add(
        "show"
    );


    createConfetti();


    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(

            function () {

                createHeart();

            },

            i * 100

        );

    }


    setTimeout(

        function () {

            message.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        },

        300

    );

}


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "🎂 Happy Birthday Best Friend!"
);

console.log(
    "📅 5th October 2026"
);

console.log(
    "📸 20 Photos Loaded"
);

console.log(
    "🎥 7 Videos Loaded"
);

console.log(
    "🫶 Best Friends Forever!"
);