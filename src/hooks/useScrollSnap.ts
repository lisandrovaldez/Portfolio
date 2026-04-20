import { useEffect } from "react";

const SECTIONS = ["hero", "about", "stack", "projects", "contact"];

export function useScrollSnap() {
  useEffect(() => {
    if (window.innerWidth <= 768) return;
    let isScrolling = false;

    const getSection = (id: string) => document.getElementById(id);

    const isTallerThanViewport = (el: HTMLElement) =>
      el.getBoundingClientRect().height > window.innerHeight * 1.1;

    const getCurrentIndex = () => {
      const middle = window.innerHeight / 2;
      return SECTIONS.findIndex((id) => {
        const el = getSection(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= middle && bottom > middle;
      });
    };

    const scrollToIndex = (index: number) => {
      const el = getSection(SECTIONS[index]);
      if (!el) return;
      isScrolling = true;
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const currentIndex = getCurrentIndex();
      if (currentIndex === -1) return;

      const currentEl = getSection(SECTIONS[currentIndex]);
      if (!currentEl) return;

      if (isTallerThanViewport(currentEl)) {
        const { top, bottom } = currentEl.getBoundingClientRect();
        const scrollingDown = e.deltaY > 0;
        const scrollingUp = e.deltaY < 0;

        if (scrollingDown && bottom > window.innerHeight + 10) return;
        if (scrollingUp && top < -10) return;
      }

      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        SECTIONS.length - 1,
      );
      if (nextIndex !== currentIndex) scrollToIndex(nextIndex);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      const currentIndex = getCurrentIndex();
      if (currentIndex === -1) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToIndex(Math.min(currentIndex + 1, SECTIONS.length - 1));
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToIndex(Math.max(currentIndex - 1, 0));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
