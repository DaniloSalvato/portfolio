import { useCallback, useEffect } from "react";

function HeroBackgroundMd() {
  const handleAnimationEnd = useCallback(
    (element: Element, e: AnimationEvent) => {
      if (e.animationName === "fillSquare") {
        element.classList.remove("animate-fillSquare");
      }
    },
    []
  );

  const handleAnimationEndMove = useCallback((element: Element) => {
    element.classList.add("animate-fillSquare");
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".square");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", () =>
        handleAnimationEndMove(element)
      );

      element.addEventListener("animationend", (e) =>
        handleAnimationEnd(element, e as AnimationEvent)
      );

      element.addEventListener("touchmove", () =>
        handleAnimationEndMove(element)
      );
    });
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", () =>
          handleAnimationEndMove(element)
        );

        element.removeEventListener("animationend", (e) =>
          handleAnimationEnd(element, e as AnimationEvent)
        );

        element.removeEventListener("touchmove", () =>
          handleAnimationEndMove(element)
        );
      });
    };
  }, [handleAnimationEnd, handleAnimationEndMove]);
  return (
    <div className="absolute hidden md:block [&_.square]:fill-white pt-[60px] top-0 left-0 w-full overflow-hidden -z-10">
      <svg
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 2500 2873"
      >
        <g stroke="#F1F5F9">
          <g clipPath="url(#clip0_602_553)">
            <path className="square" d="M0.5 8.5H119.5V127.5H0.5z"></path>
            <path className="square" d="M0.5 127.5H119.5V246.5H0.5z"></path>
            <path className="square" d="M0.5 246.5H119.5V365.5H0.5z"></path>
            <path className="square" d="M0.5 365.5H119.5V484.5H0.5z"></path>
            <path className="square" d="M0.5 484.5H119.5V603.5H0.5z"></path>
            <path className="square" d="M0.5 603.5H119.5V722.5H0.5z"></path>
            <path className="square" d="M0.5 722.5H119.5V841.5H0.5z"></path>
            <path className="square" d="M0.5 841.5H119.5V960.5H0.5z"></path>
            <path className="square" d="M0.5 960.5H119.5V1079.5H0.5z"></path>
            <path className="square" d="M0.5 1079.5H119.5V1198.5H0.5z"></path>
            <path className="square" d="M0.5 1198.5H119.5V1317.5H0.5z"></path>
            <path className="square" d="M0.5 1317.5H119.5V1436.5H0.5z"></path>
            <path className="square" d="M0.5 1436.5H119.5V1555.5H0.5z"></path>
            <path className="square" d="M0.5 1555.5H119.5V1674.5H0.5z"></path>
            <path className="square" d="M0.5 1674.5H119.5V1793.5H0.5z"></path>
            <path className="square" d="M0.5 1793.5H119.5V1912.5H0.5z"></path>
            <path className="square" d="M0.5 1912.5H119.5V2031.5H0.5z"></path>
            <path className="square" d="M0.5 2031.5H119.5V2150.5H0.5z"></path>
            <path className="square" d="M0.5 2150.5H119.5V2269.5H0.5z"></path>
            <path className="square" d="M0.5 2269.5H119.5V2388.5H0.5z"></path>
            <path className="square" d="M0.5 2388.5H119.5V2507.5H0.5z"></path>
            <path className="square" d="M0.5 2507.5H119.5V2626.5H0.5z"></path>
            <path className="square" d="M0.5 2626.5H119.5V2745.5H0.5z"></path>
            <path className="square" d="M0.5 2745.5H119.5V2864.5H0.5z"></path>
          </g>
          <g clipPath="url(#clip1_602_553)">
            <path className="square" d="M119.5 8.5H238.5V127.5H119.5z"></path>
            <path className="square" d="M119.5 127.5H238.5V246.5H119.5z"></path>
            <path className="square" d="M119.5 246.5H238.5V365.5H119.5z"></path>
            <path className="square" d="M119.5 365.5H238.5V484.5H119.5z"></path>
            <path className="square" d="M119.5 484.5H238.5V603.5H119.5z"></path>
            <path className="square" d="M119.5 603.5H238.5V722.5H119.5z"></path>
            <path className="square" d="M119.5 722.5H238.5V841.5H119.5z"></path>
            <path className="square" d="M119.5 841.5H238.5V960.5H119.5z"></path>
            <path
              className="square"
              d="M119.5 960.5H238.5V1079.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 1079.5H238.5V1198.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 1198.5H238.5V1317.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 1317.5H238.5V1436.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 1436.5H238.5V1555.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 1555.5H238.5V1674.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 1674.5H238.5V1793.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 1793.5H238.5V1912.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 1912.5H238.5V2031.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 2031.5H238.5V2150.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 2150.5H238.5V2269.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 2269.5H238.5V2388.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 2388.5H238.5V2507.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 2507.5H238.5V2626.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 2626.5H238.5V2745.5H119.5z"
            ></path>
            <path
              className="square"
              d="M119.5 2745.5H238.5V2864.5H119.5z"
            ></path>
          </g>
          <g clipPath="url(#clip2_602_553)">
            <path className="square" d="M238.5 8.5H357.5V127.5H238.5z"></path>
            <path className="square" d="M238.5 127.5H357.5V246.5H238.5z"></path>
            <path className="square" d="M238.5 246.5H357.5V365.5H238.5z"></path>
            <path className="square" d="M238.5 365.5H357.5V484.5H238.5z"></path>
            <path className="square" d="M238.5 484.5H357.5V603.5H238.5z"></path>
            <path className="square" d="M238.5 603.5H357.5V722.5H238.5z"></path>
            <path className="square" d="M238.5 722.5H357.5V841.5H238.5z"></path>
            <path className="square" d="M238.5 841.5H357.5V960.5H238.5z"></path>
            <path
              className="square"
              d="M238.5 960.5H357.5V1079.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 1079.5H357.5V1198.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 1198.5H357.5V1317.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 1317.5H357.5V1436.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 1436.5H357.5V1555.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 1555.5H357.5V1674.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 1674.5H357.5V1793.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 1793.5H357.5V1912.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 1912.5H357.5V2031.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 2031.5H357.5V2150.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 2150.5H357.5V2269.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 2269.5H357.5V2388.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 2388.5H357.5V2507.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 2507.5H357.5V2626.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 2626.5H357.5V2745.5H238.5z"
            ></path>
            <path
              className="square"
              d="M238.5 2745.5H357.5V2864.5H238.5z"
            ></path>
          </g>
          <g clipPath="url(#clip3_602_553)">
            <path className="square" d="M357.5 8.5H476.5V127.5H357.5z"></path>
            <path className="square" d="M357.5 127.5H476.5V246.5H357.5z"></path>
            <path className="square" d="M357.5 246.5H476.5V365.5H357.5z"></path>
            <path className="square" d="M357.5 365.5H476.5V484.5H357.5z"></path>
            <path className="square" d="M357.5 484.5H476.5V603.5H357.5z"></path>
            <path className="square" d="M357.5 603.5H476.5V722.5H357.5z"></path>
            <path className="square" d="M357.5 722.5H476.5V841.5H357.5z"></path>
            <path className="square" d="M357.5 841.5H476.5V960.5H357.5z"></path>
            <path
              className="square"
              d="M357.5 960.5H476.5V1079.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 1079.5H476.5V1198.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 1198.5H476.5V1317.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 1317.5H476.5V1436.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 1436.5H476.5V1555.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 1555.5H476.5V1674.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 1674.5H476.5V1793.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 1793.5H476.5V1912.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 1912.5H476.5V2031.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 2031.5H476.5V2150.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 2150.5H476.5V2269.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 2269.5H476.5V2388.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 2388.5H476.5V2507.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 2507.5H476.5V2626.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 2626.5H476.5V2745.5H357.5z"
            ></path>
            <path
              className="square"
              d="M357.5 2745.5H476.5V2864.5H357.5z"
            ></path>
          </g>
          <g clipPath="url(#clip4_602_553)">
            <path className="square" d="M476.5 8.5H595.5V127.5H476.5z"></path>
            <path className="square" d="M476.5 127.5H595.5V246.5H476.5z"></path>
            <path className="square" d="M476.5 246.5H595.5V365.5H476.5z"></path>
            <path className="square" d="M476.5 365.5H595.5V484.5H476.5z"></path>
            <path className="square" d="M476.5 484.5H595.5V603.5H476.5z"></path>
            <path className="square" d="M476.5 603.5H595.5V722.5H476.5z"></path>
            <path className="square" d="M476.5 722.5H595.5V841.5H476.5z"></path>
            <path className="square" d="M476.5 841.5H595.5V960.5H476.5z"></path>
            <path
              className="square"
              d="M476.5 960.5H595.5V1079.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 1079.5H595.5V1198.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 1198.5H595.5V1317.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 1317.5H595.5V1436.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 1436.5H595.5V1555.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 1555.5H595.5V1674.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 1674.5H595.5V1793.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 1793.5H595.5V1912.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 1912.5H595.5V2031.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 2031.5H595.5V2150.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 2150.5H595.5V2269.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 2269.5H595.5V2388.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 2388.5H595.5V2507.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 2507.5H595.5V2626.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 2626.5H595.5V2745.5H476.5z"
            ></path>
            <path
              className="square"
              d="M476.5 2745.5H595.5V2864.5H476.5z"
            ></path>
          </g>
          <g clipPath="url(#clip5_602_553)">
            <path className="square" d="M595.5 8.5H714.5V127.5H595.5z"></path>
            <path className="square" d="M595.5 127.5H714.5V246.5H595.5z"></path>
            <path className="square" d="M595.5 246.5H714.5V365.5H595.5z"></path>
            <path className="square" d="M595.5 365.5H714.5V484.5H595.5z"></path>
            <path className="square" d="M595.5 484.5H714.5V603.5H595.5z"></path>
            <path className="square" d="M595.5 603.5H714.5V722.5H595.5z"></path>
            <path className="square" d="M595.5 722.5H714.5V841.5H595.5z"></path>
            <path className="square" d="M595.5 841.5H714.5V960.5H595.5z"></path>
            <path
              className="square"
              d="M595.5 960.5H714.5V1079.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 1079.5H714.5V1198.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 1198.5H714.5V1317.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 1317.5H714.5V1436.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 1436.5H714.5V1555.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 1555.5H714.5V1674.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 1674.5H714.5V1793.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 1793.5H714.5V1912.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 1912.5H714.5V2031.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 2031.5H714.5V2150.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 2150.5H714.5V2269.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 2269.5H714.5V2388.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 2388.5H714.5V2507.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 2507.5H714.5V2626.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 2626.5H714.5V2745.5H595.5z"
            ></path>
            <path
              className="square"
              d="M595.5 2745.5H714.5V2864.5H595.5z"
            ></path>
          </g>
          <g clipPath="url(#clip6_602_553)">
            <path className="square" d="M714.5 8.5H833.5V127.5H714.5z"></path>
            <path className="square" d="M714.5 127.5H833.5V246.5H714.5z"></path>
            <path className="square" d="M714.5 246.5H833.5V365.5H714.5z"></path>
            <path className="square" d="M714.5 365.5H833.5V484.5H714.5z"></path>
            <path className="square" d="M714.5 484.5H833.5V603.5H714.5z"></path>
            <path className="square" d="M714.5 603.5H833.5V722.5H714.5z"></path>
            <path className="square" d="M714.5 722.5H833.5V841.5H714.5z"></path>
            <path className="square" d="M714.5 841.5H833.5V960.5H714.5z"></path>
            <path
              className="square"
              d="M714.5 960.5H833.5V1079.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 1079.5H833.5V1198.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 1198.5H833.5V1317.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 1317.5H833.5V1436.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 1436.5H833.5V1555.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 1555.5H833.5V1674.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 1674.5H833.5V1793.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 1793.5H833.5V1912.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 1912.5H833.5V2031.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 2031.5H833.5V2150.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 2150.5H833.5V2269.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 2269.5H833.5V2388.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 2388.5H833.5V2507.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 2507.5H833.5V2626.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 2626.5H833.5V2745.5H714.5z"
            ></path>
            <path
              className="square"
              d="M714.5 2745.5H833.5V2864.5H714.5z"
            ></path>
          </g>
          <g clipPath="url(#clip7_602_553)">
            <path className="square" d="M833.5 8.5H952.5V127.5H833.5z"></path>
            <path className="square" d="M833.5 127.5H952.5V246.5H833.5z"></path>
            <path className="square" d="M833.5 246.5H952.5V365.5H833.5z"></path>
            <path className="square" d="M833.5 365.5H952.5V484.5H833.5z"></path>
            <path className="square" d="M833.5 484.5H952.5V603.5H833.5z"></path>
            <path className="square" d="M833.5 603.5H952.5V722.5H833.5z"></path>
            <path className="square" d="M833.5 722.5H952.5V841.5H833.5z"></path>
            <path className="square" d="M833.5 841.5H952.5V960.5H833.5z"></path>
            <path
              className="square"
              d="M833.5 960.5H952.5V1079.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 1079.5H952.5V1198.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 1198.5H952.5V1317.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 1317.5H952.5V1436.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 1436.5H952.5V1555.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 1555.5H952.5V1674.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 1674.5H952.5V1793.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 1793.5H952.5V1912.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 1912.5H952.5V2031.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 2031.5H952.5V2150.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 2150.5H952.5V2269.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 2269.5H952.5V2388.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 2388.5H952.5V2507.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 2507.5H952.5V2626.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 2626.5H952.5V2745.5H833.5z"
            ></path>
            <path
              className="square"
              d="M833.5 2745.5H952.5V2864.5H833.5z"
            ></path>
          </g>
          <g clipPath="url(#clip8_602_553)">
            <path className="square" d="M952.5 8.5H1071.5V127.5H952.5z"></path>
            <path
              className="square"
              d="M952.5 127.5H1071.5V246.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 246.5H1071.5V365.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 365.5H1071.5V484.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 484.5H1071.5V603.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 603.5H1071.5V722.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 722.5H1071.5V841.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 841.5H1071.5V960.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 960.5H1071.5V1079.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 1079.5H1071.5V1198.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 1198.5H1071.5V1317.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 1317.5H1071.5V1436.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 1436.5H1071.5V1555.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 1555.5H1071.5V1674.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 1674.5H1071.5V1793.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 1793.5H1071.5V1912.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 1912.5H1071.5V2031.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 2031.5H1071.5V2150.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 2150.5H1071.5V2269.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 2269.5H1071.5V2388.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 2388.5H1071.5V2507.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 2507.5H1071.5V2626.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 2626.5H1071.5V2745.5H952.5z"
            ></path>
            <path
              className="square"
              d="M952.5 2745.5H1071.5V2864.5H952.5z"
            ></path>
          </g>
          <g clipPath="url(#clip9_602_553)">
            <path
              className="square"
              d="M1071.5 8.5H1190.5V127.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 127.5H1190.5V246.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 246.5H1190.5V365.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 365.5H1190.5V484.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 484.5H1190.5V603.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 603.5H1190.5V722.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 722.5H1190.5V841.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 841.5H1190.5V960.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 960.5H1190.5V1079.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 1079.5H1190.5V1198.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 1198.5H1190.5V1317.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 1317.5H1190.5V1436.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 1436.5H1190.5V1555.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 1555.5H1190.5V1674.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 1674.5H1190.5V1793.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 1793.5H1190.5V1912.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 1912.5H1190.5V2031.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 2031.5H1190.5V2150.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 2150.5H1190.5V2269.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 2269.5H1190.5V2388.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 2388.5H1190.5V2507.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 2507.5H1190.5V2626.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 2626.5H1190.5V2745.5H1071.5z"
            ></path>
            <path
              className="square"
              d="M1071.5 2745.5H1190.5V2864.5H1071.5z"
            ></path>
          </g>
          <g clipPath="url(#clip10_602_553)">
            <path
              className="square"
              d="M1190.5 8.5H1309.5V127.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 127.5H1309.5V246.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 246.5H1309.5V365.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 365.5H1309.5V484.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 484.5H1309.5V603.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 603.5H1309.5V722.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 722.5H1309.5V841.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 841.5H1309.5V960.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 960.5H1309.5V1079.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 1079.5H1309.5V1198.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 1198.5H1309.5V1317.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 1317.5H1309.5V1436.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 1436.5H1309.5V1555.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 1555.5H1309.5V1674.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 1674.5H1309.5V1793.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 1793.5H1309.5V1912.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 1912.5H1309.5V2031.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 2031.5H1309.5V2150.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 2150.5H1309.5V2269.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 2269.5H1309.5V2388.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 2388.5H1309.5V2507.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 2507.5H1309.5V2626.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 2626.5H1309.5V2745.5H1190.5z"
            ></path>
            <path
              className="square"
              d="M1190.5 2745.5H1309.5V2864.5H1190.5z"
            ></path>
          </g>
          <g clipPath="url(#clip11_602_553)">
            <path
              className="square"
              d="M1309.5 8.5H1428.5V127.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 127.5H1428.5V246.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 246.5H1428.5V365.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 365.5H1428.5V484.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 484.5H1428.5V603.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 603.5H1428.5V722.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 722.5H1428.5V841.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 841.5H1428.5V960.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 960.5H1428.5V1079.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 1079.5H1428.5V1198.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 1198.5H1428.5V1317.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 1317.5H1428.5V1436.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 1436.5H1428.5V1555.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 1555.5H1428.5V1674.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 1674.5H1428.5V1793.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 1793.5H1428.5V1912.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 1912.5H1428.5V2031.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 2031.5H1428.5V2150.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 2150.5H1428.5V2269.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 2269.5H1428.5V2388.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 2388.5H1428.5V2507.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 2507.5H1428.5V2626.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 2626.5H1428.5V2745.5H1309.5z"
            ></path>
            <path
              className="square"
              d="M1309.5 2745.5H1428.5V2864.5H1309.5z"
            ></path>
          </g>
          <g clipPath="url(#clip12_602_553)">
            <path
              className="square"
              d="M1428.5 8.5H1547.5V127.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 127.5H1547.5V246.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 246.5H1547.5V365.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 365.5H1547.5V484.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 484.5H1547.5V603.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 603.5H1547.5V722.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 722.5H1547.5V841.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 841.5H1547.5V960.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 960.5H1547.5V1079.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 1079.5H1547.5V1198.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 1198.5H1547.5V1317.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 1317.5H1547.5V1436.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 1436.5H1547.5V1555.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 1555.5H1547.5V1674.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 1674.5H1547.5V1793.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 1793.5H1547.5V1912.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 1912.5H1547.5V2031.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 2031.5H1547.5V2150.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 2150.5H1547.5V2269.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 2269.5H1547.5V2388.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 2388.5H1547.5V2507.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 2507.5H1547.5V2626.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 2626.5H1547.5V2745.5H1428.5z"
            ></path>
            <path
              className="square"
              d="M1428.5 2745.5H1547.5V2864.5H1428.5z"
            ></path>
          </g>
          <g clipPath="url(#clip13_602_553)">
            <path
              className="square"
              d="M1547.5 8.5H1666.5V127.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 127.5H1666.5V246.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 246.5H1666.5V365.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 365.5H1666.5V484.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 484.5H1666.5V603.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 603.5H1666.5V722.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 722.5H1666.5V841.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 841.5H1666.5V960.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 960.5H1666.5V1079.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 1079.5H1666.5V1198.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 1198.5H1666.5V1317.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 1317.5H1666.5V1436.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 1436.5H1666.5V1555.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 1555.5H1666.5V1674.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 1674.5H1666.5V1793.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 1793.5H1666.5V1912.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 1912.5H1666.5V2031.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 2031.5H1666.5V2150.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 2150.5H1666.5V2269.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 2269.5H1666.5V2388.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 2388.5H1666.5V2507.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 2507.5H1666.5V2626.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 2626.5H1666.5V2745.5H1547.5z"
            ></path>
            <path
              className="square"
              d="M1547.5 2745.5H1666.5V2864.5H1547.5z"
            ></path>
          </g>
          <g clipPath="url(#clip14_602_553)">
            <path
              className="square"
              d="M1666.5 8.5H1785.5V127.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 127.5H1785.5V246.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 246.5H1785.5V365.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 365.5H1785.5V484.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 484.5H1785.5V603.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 603.5H1785.5V722.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 722.5H1785.5V841.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 841.5H1785.5V960.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 960.5H1785.5V1079.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 1079.5H1785.5V1198.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 1198.5H1785.5V1317.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 1317.5H1785.5V1436.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 1436.5H1785.5V1555.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 1555.5H1785.5V1674.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 1674.5H1785.5V1793.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 1793.5H1785.5V1912.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 1912.5H1785.5V2031.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 2031.5H1785.5V2150.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 2150.5H1785.5V2269.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 2269.5H1785.5V2388.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 2388.5H1785.5V2507.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 2507.5H1785.5V2626.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 2626.5H1785.5V2745.5H1666.5z"
            ></path>
            <path
              className="square"
              d="M1666.5 2745.5H1785.5V2864.5H1666.5z"
            ></path>
          </g>
          <g clipPath="url(#clip15_602_553)">
            <path
              className="square"
              d="M1785.5 8.5H1904.5V127.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 127.5H1904.5V246.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 246.5H1904.5V365.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 365.5H1904.5V484.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 484.5H1904.5V603.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 603.5H1904.5V722.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 722.5H1904.5V841.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 841.5H1904.5V960.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 960.5H1904.5V1079.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 1079.5H1904.5V1198.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 1198.5H1904.5V1317.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 1317.5H1904.5V1436.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 1436.5H1904.5V1555.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 1555.5H1904.5V1674.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 1674.5H1904.5V1793.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 1793.5H1904.5V1912.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 1912.5H1904.5V2031.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 2031.5H1904.5V2150.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 2150.5H1904.5V2269.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 2269.5H1904.5V2388.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 2388.5H1904.5V2507.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 2507.5H1904.5V2626.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 2626.5H1904.5V2745.5H1785.5z"
            ></path>
            <path
              className="square"
              d="M1785.5 2745.5H1904.5V2864.5H1785.5z"
            ></path>
          </g>
          <g clipPath="url(#clip16_602_553)">
            <path
              className="square"
              d="M1904.5 8.5H2023.5V127.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 127.5H2023.5V246.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 246.5H2023.5V365.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 365.5H2023.5V484.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 484.5H2023.5V603.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 603.5H2023.5V722.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 722.5H2023.5V841.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 841.5H2023.5V960.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 960.5H2023.5V1079.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 1079.5H2023.5V1198.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 1198.5H2023.5V1317.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 1317.5H2023.5V1436.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 1436.5H2023.5V1555.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 1555.5H2023.5V1674.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 1674.5H2023.5V1793.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 1793.5H2023.5V1912.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 1912.5H2023.5V2031.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 2031.5H2023.5V2150.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 2150.5H2023.5V2269.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 2269.5H2023.5V2388.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 2388.5H2023.5V2507.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 2507.5H2023.5V2626.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 2626.5H2023.5V2745.5H1904.5z"
            ></path>
            <path
              className="square"
              d="M1904.5 2745.5H2023.5V2864.5H1904.5z"
            ></path>
          </g>
          <g clipPath="url(#clip17_602_553)">
            <path
              className="square"
              d="M2023.5 8.5H2142.5V127.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 127.5H2142.5V246.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 246.5H2142.5V365.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 365.5H2142.5V484.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 484.5H2142.5V603.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 603.5H2142.5V722.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 722.5H2142.5V841.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 841.5H2142.5V960.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 960.5H2142.5V1079.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 1079.5H2142.5V1198.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 1198.5H2142.5V1317.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 1317.5H2142.5V1436.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 1436.5H2142.5V1555.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 1555.5H2142.5V1674.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 1674.5H2142.5V1793.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 1793.5H2142.5V1912.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 1912.5H2142.5V2031.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 2031.5H2142.5V2150.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 2150.5H2142.5V2269.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 2269.5H2142.5V2388.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 2388.5H2142.5V2507.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 2507.5H2142.5V2626.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 2626.5H2142.5V2745.5H2023.5z"
            ></path>
            <path
              className="square"
              d="M2023.5 2745.5H2142.5V2864.5H2023.5z"
            ></path>
          </g>
          <g clipPath="url(#clip18_602_553)">
            <path
              className="square"
              d="M2142.5 8.5H2261.5V127.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 127.5H2261.5V246.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 246.5H2261.5V365.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 365.5H2261.5V484.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 484.5H2261.5V603.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 603.5H2261.5V722.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 722.5H2261.5V841.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 841.5H2261.5V960.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 960.5H2261.5V1079.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 1079.5H2261.5V1198.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 1198.5H2261.5V1317.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 1317.5H2261.5V1436.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 1436.5H2261.5V1555.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 1555.5H2261.5V1674.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 1674.5H2261.5V1793.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 1793.5H2261.5V1912.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 1912.5H2261.5V2031.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 2031.5H2261.5V2150.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 2150.5H2261.5V2269.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 2269.5H2261.5V2388.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 2388.5H2261.5V2507.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 2507.5H2261.5V2626.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 2626.5H2261.5V2745.5H2142.5z"
            ></path>
            <path
              className="square"
              d="M2142.5 2745.5H2261.5V2864.5H2142.5z"
            ></path>
          </g>
          <g clipPath="url(#clip19_602_553)">
            <path
              className="square"
              d="M2261.5 8.5H2380.5V127.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 127.5H2380.5V246.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 246.5H2380.5V365.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 365.5H2380.5V484.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 484.5H2380.5V603.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 603.5H2380.5V722.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 722.5H2380.5V841.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 841.5H2380.5V960.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 960.5H2380.5V1079.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 1079.5H2380.5V1198.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 1198.5H2380.5V1317.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 1317.5H2380.5V1436.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 1436.5H2380.5V1555.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 1555.5H2380.5V1674.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 1674.5H2380.5V1793.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 1793.5H2380.5V1912.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 1912.5H2380.5V2031.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 2031.5H2380.5V2150.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 2150.5H2380.5V2269.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 2269.5H2380.5V2388.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 2388.5H2380.5V2507.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 2507.5H2380.5V2626.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 2626.5H2380.5V2745.5H2261.5z"
            ></path>
            <path
              className="square"
              d="M2261.5 2745.5H2380.5V2864.5H2261.5z"
            ></path>
          </g>
          <g clipPath="url(#clip20_602_553)">
            <path
              className="square"
              d="M2380.5 8.5H2499.5V127.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 127.5H2499.5V246.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 246.5H2499.5V365.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 365.5H2499.5V484.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 484.5H2499.5V603.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 603.5H2499.5V722.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 722.5H2499.5V841.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 841.5H2499.5V960.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 960.5H2499.5V1079.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 1079.5H2499.5V1198.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 1198.5H2499.5V1317.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 1317.5H2499.5V1436.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 1436.5H2499.5V1555.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 1555.5H2499.5V1674.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 1674.5H2499.5V1793.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 1793.5H2499.5V1912.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 1912.5H2499.5V2031.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 2031.5H2499.5V2150.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 2150.5H2499.5V2269.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 2269.5H2499.5V2388.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 2388.5H2499.5V2507.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 2507.5H2499.5V2626.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 2626.5H2499.5V2745.5H2380.5z"
            ></path>
            <path
              className="square"
              d="M2380.5 2745.5H2499.5V2864.5H2380.5z"
            ></path>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(0 8)"
            ></path>
          </clipPath>
          <clipPath id="clip1_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(119 8)"
            ></path>
          </clipPath>
          <clipPath id="clip2_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(238 8)"
            ></path>
          </clipPath>
          <clipPath id="clip3_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(357 8)"
            ></path>
          </clipPath>
          <clipPath id="clip4_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(476 8)"
            ></path>
          </clipPath>
          <clipPath id="clip5_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(595 8)"
            ></path>
          </clipPath>
          <clipPath id="clip6_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(714 8)"
            ></path>
          </clipPath>
          <clipPath id="clip7_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(833 8)"
            ></path>
          </clipPath>
          <clipPath id="clip8_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(952 8)"
            ></path>
          </clipPath>
          <clipPath id="clip9_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(1071 8)"
            ></path>
          </clipPath>
          <clipPath id="clip10_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(1190 8)"
            ></path>
          </clipPath>
          <clipPath id="clip11_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(1309 8)"
            ></path>
          </clipPath>
          <clipPath id="clip12_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(1428 8)"
            ></path>
          </clipPath>
          <clipPath id="clip13_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(1547 8)"
            ></path>
          </clipPath>
          <clipPath id="clip14_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(1666 8)"
            ></path>
          </clipPath>
          <clipPath id="clip15_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(1785 8)"
            ></path>
          </clipPath>
          <clipPath id="clip16_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(1904 8)"
            ></path>
          </clipPath>
          <clipPath id="clip17_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(2023 8)"
            ></path>
          </clipPath>
          <clipPath id="clip18_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(2142 8)"
            ></path>
          </clipPath>
          <clipPath id="clip19_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(2261 8)"
            ></path>
          </clipPath>
          <clipPath id="clip20_602_553">
            <path
              fill="#fff"
              d="M0 0H120V2857H0z"
              transform="translate(2380 8)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default HeroBackgroundMd;
