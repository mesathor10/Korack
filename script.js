
function animateValue1(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj1 = document.getElementById("value1");
  // animateValue1(obj1, 5000, 14800, 9500);

function animateValue2(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj2 = document.getElementById("value2");
  // animateValue2(obj2, 4000, 10500, 9500);

function animateValue3(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  
  // animateValue3(obj3, 10000, 25000, 9500);

//   arr = [animateValue1(), animateValue2(), animateValue3()]
//   for (n in arr){
//       String(n).replace(/(.)(?=(\d{3})+$)/g,'$1,')
//   }
// "1,234,567,890"


        // Function to be triggered when scrolling to a certain height
        function myFunction() {
            // Your code here
            console.log("Function triggered!");
        }

        // Calculate the position of the element you want to trigger the function at
        const element = document.getElementById("cout");
        const triggerHeight = element.offsetTop;

        // Function to check if the user has scrolled to the trigger height
        function checkScrollPosition() {
            const scrollPosition = window.scrollY || window.pageYOffset;

            if (scrollPosition >= triggerHeight) {
              const obj3 = document.getElementById("value3");
                animateValue3(obj3, 10000, 25000, 5500);
               const obj2 = document.getElementById("value2");
                animateValue2(obj2, 4000, 10500, 5500);
              const obj1 = document.getElementById("value1");
                animateValue1(obj1, 5000, 14800, 5500);
              
                // Remove the event listener after the function is triggered
                window.removeEventListener("scroll", checkScrollPosition);
            }
        }

        // Add a scroll event listener to the window
        window.addEventListener("scroll", checkScrollPosition);
