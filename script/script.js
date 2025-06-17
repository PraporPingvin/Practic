document.querySelector(".burger-menu").addEventListener("click", function () {
  document.querySelector(".menu-header").classList.toggle("active");
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((section) => {
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  observer.observe(section);
});

// ------------
document.querySelectorAll(".accordion-hover-item").forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(".accordion-hover-item")
      .forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
  });

  item.addEventListener("focus", () => {
    document
      .querySelectorAll(".accordion-hover-item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// -----------------

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isActive = item.classList.contains("active");

    document
      .querySelectorAll(".accordion-item")
      .forEach((i) => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// ---------------------

document.querySelectorAll(".question-all").forEach((wrapper) => {
  const question = wrapper.querySelector(".questions");

  question.addEventListener("click", () => {
    const isActive = wrapper.classList.contains("active");

    document.querySelectorAll(".question-all").forEach((w) => {
      w.classList.remove("active");
    });

    if (!isActive) {
      wrapper.classList.add("active");
    }
  });
});

// ----------

function animateNumbers() {
  const numbers = document.querySelectorAll(".text-number");
  numbers.forEach((number) => {
    const target = parseInt(number.getAttribute("data-target"));
    let start = 0;
    const increment = Math.ceil(target / 100);

    const timer = setInterval(() => {
      if (start >= target) {
        clearInterval(timer);
        number.textContent = `${target}`;
      } else {
        start += increment;
        number.textContent = `${start}`;
      }
    }, 10);
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", () => {
  const statisticsSection = document.querySelector(".section.statistics");
  if (isElementInViewport(statisticsSection)) {
    animateNumbers();
    window.removeEventListener("scroll", arguments.callee);
  }
});

if (isElementInViewport(document.querySelector(".section.statistics"))) {
  animateNumbers();
}
