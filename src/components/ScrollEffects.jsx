import { useEffect } from "react";
import "../scroll-effects.css";

function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const progress = document.createElement("div");
    progress.id = "fx-progress";
    document.body.appendChild(progress);

    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      progress.style.transform = `scaleX(${percentage})`;

      const waves = document.querySelector("#waves");

      if (waves) {
        waves.style.transform = `translateY(${scrollTop * 0.12}px)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    const revealElements = document.querySelectorAll(
      "section h2, .lead, .sd, .ph, .ig article, .hzc, .apf, .imb, .ftt > *"
    );

    revealElements.forEach((element, index) => {
      element.classList.add("fx-reveal");
      element.style.setProperty(
        "--fx-delay",
        `${(index % 4) * 100}ms`
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fx-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    const magneticButtons = document.querySelectorAll(
      ".btn, .gh, .top"
    );

    const magneticHandlers = [];

    magneticButtons.forEach((button) => {
      const handleMove = (event) => {
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        button.style.setProperty("--mag-x", `${x * 0.12}px`);
        button.style.setProperty("--mag-y", `${y * 0.12}px`);
      };

      const handleLeave = () => {
        button.style.setProperty("--mag-x", "0px");
        button.style.setProperty("--mag-y", "0px");
      };

      button.addEventListener("mousemove", handleMove);
      button.addEventListener("mouseleave", handleLeave);

      magneticHandlers.push({
        button,
        handleMove,
        handleLeave,
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      progress.remove();

      magneticHandlers.forEach(
        ({ button, handleMove, handleLeave }) => {
          button.removeEventListener("mousemove", handleMove);
          button.removeEventListener("mouseleave", handleLeave);
        }
      );
    };
  }, []);

  return null;
}

export default ScrollEffects;