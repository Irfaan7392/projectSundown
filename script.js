const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const pageFourLink = () => {
    let linkContent = document.querySelectorAll(".page4-link");
    console.log(linkContent)
    linkContent.forEach(element => {
        element.addEventListener("mouseenter", (event) => {
            let imageAndVideoLink = event.currentTarget.getAttribute("link-content");
            if (imageAndVideoLink.includes(".mp4")) {
                event.currentTarget.querySelector("a").innerHTML += `<div class="image-container" style="z-index: 50;"><video autoplay muted loop src=${imageAndVideoLink}> </video></div>`;
            } else {
                event.currentTarget.querySelector("a").innerHTML += `<div class="image-container" style="background-image: url(${imageAndVideoLink});"></div>`;

            }
            console.log(a)
        })

        element.addEventListener("mouseleave", (event) => {
            let anchorTag = event.currentTarget.querySelector("a");
            let imageContainer = anchorTag.querySelector(".image-container");
            if (imageContainer) {
                anchorTag.removeChild(imageContainer)
            }
        })
    });
}
pageFourLink();
// page5
const pageFive = () => {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("#heading1").classList.add("clickable-heading");
        document.querySelector(".heading-discription span").innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";

        let headingArray = [...document.querySelectorAll(".heading")];
        headingArray.forEach((element, index, array) => {
            element.addEventListener("click", (e) => {
                let textContent = e.currentTarget.getAttribute("text-content");
                let imageLink = e.currentTarget.getAttribute("image-link");
                e.currentTarget.classList.add("clickable-heading");
                document.querySelector(".heading-discription span").innerHTML = textContent;
                document.querySelector("#page5-heading-image img").setAttribute("src", `${imageLink}`);
                // console.log(`text=> ${textContent} \nl image=> ${imageLink}`);
                console.log(index)
                handleClick(index, array);
            })
        })
    })

    const handleClick = (index, array) => {
        currentIteration = { index, value: array[index] };
        array.slice(0, index).forEach((elem) => {
            console.log(elem)
            elem.classList.remove("clickable-heading");
        })
        array.slice(index + 1).forEach((elem) => {
            elem.classList.remove("clickable-heading");
        })
    }
}
pageFive();

// chat gpt generated code for page5
// const pageFive = () => {
//     const headings = document.querySelectorAll(".heading");
//     const descriptionSpan = document.querySelector(".heading-discription span");
//     const imageElement = document.querySelector("#page5-heading-image img");

//     const handleClick = (index) => {
//         headings.forEach((elem, i) => {
//             elem.classList.remove("clickable-heading", i === index);
//         });
//         elem[index].classList.add("clickable-heading")
//     };

//     headings.forEach((element, index) => {
//         element.addEventListener("click", (e) => {
//             const textContent = e.currentTarget.getAttribute("text-content");
//             const imageLink = e.currentTarget.getAttribute("image-link");

//             descriptionSpan.innerHTML = textContent;
//             imageElement.setAttribute("src", imageLink);

//             handleClick(index);
//         });
//     });

//     // Initial setup for the first heading
//     headings[0].classList.add("clickable-heading");
//     descriptionSpan.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
// };

// document.addEventListener("DOMContentLoaded", pageFive);
 
// page6

    let isMouseDown = false;
    let startX;
    let scrollLeft;

    const individualWraper = document.getElementById('individual-wraper');

    individualWraper.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - individualWraper.offsetLeft;
        console.log(e.pageX, individualWraper.offsetLeft)
        scrollLeft = individualWraper.scrollLeft;
        document.querySelector("#page6-circle").style.scale = "1.2"
        // individualWraper.style.cursor = 'grabbing';
    });

    individualWraper.addEventListener('mouseup', () => {
        isMouseDown = false;
        document.querySelector("#page6-circle").style.scale = "1"
        // individualWraper.style.cursor = 'grab';
    });

    individualWraper.addEventListener('mouseenter', () => {
        isMouseDown = false;
        // individualWraper.style.cursor = 'grab';
        document.querySelector("#page6-circle").style.opacity = "1";
    });
    individualWraper.addEventListener('mouseleave', () => {
        isMouseDown = false;
        // individualWraper.style.cursor = 'grab';
        document.querySelector("#page6-circle").style.opacity = "0";
    });

    individualWraper.addEventListener('mousemove', (e) => {

        individualWraper.style.cursor = "none";
        document.querySelector("#page6-circle").style.top = `${e.clientY-200}px`;
        document.querySelector("#page6-circle").style.left = `${e.clientX-100}px`;
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - individualWraper.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the multiplier for desired sensitivity
        individualWraper.scrollLeft = scrollLeft - walk;
    });

const emailValidation = ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.querySelector("#email-box").value;
    const emailFormateValidation = emailRegex.test(email);
    
    const hasAtleastOneDot = email.indexOf(".") !== -1;
    const hasAtleastOneAtSymbol = email.indexOf("@") !== -1;
    if(emailFormateValidation && hasAtleastOneDot && hasAtleastOneAtSymbol){
        document.querySelector(".email-box").innerHTML = '<div class="thanks"><span>Great! Thank you for Subscribe</span></div>'
    }else{
        alert("Invalid Email")
    }
    console.log(emailFormateValidation);
    console.log(email)
}

document.querySelector("#arrow-image").addEventListener('click',()=>{
    emailValidation();
})
document.querySelector("#email-box").addEventListener('keypress',(event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        emailValidation();
    }
})

// bottom Animation
// let isBeforeContainerInRight = false;
const bottomAnimation = () => {
    let bottomElem = document.querySelector(".bottom-animation");

    bottomElem.addEventListener("mouseenter", () => {
        // Use style property to modify the pseudo-element's style
        bottomElem.style.setProperty("--before-right", "0%");
    });

    bottomElem.addEventListener("mouseleave", () => {
        // Use style property to modify the pseudo-element's style
        bottomElem.style.setProperty("--before-right", "-100%");
    });
    // bottomElem.addEventListener("transitionend", () => {
    //     bottomElem.style.setProperty("--before-right", "100%");
    // });
};

bottomAnimation();


// // Import the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Create a GSAP timeline
// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page4-link a", // Replace with your element's selector
//         start: "top center", // Adjusted trigger point
//         end: "bottom center", // Adjusted end point
//         scrub: true, // Smoothly scrubs the animation in sync with the scrollbar
//         duratoion:"3s"
//     },
// });

// // Define the animation on the timeline
// tl.from(".page4-link a", {
//    y:"-100%",
//    stagger:1,
// });
// gsap.to(".image-container",100,{

//     rotate:360
// })

