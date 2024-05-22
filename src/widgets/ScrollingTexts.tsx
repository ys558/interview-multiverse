import { useEffect, useRef, useState } from "react";

const ScrollableSubtitle = () => {
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [initialSubtitleHeight, setInitialSubtitleHeight] = useState(0);

  useEffect(() => {
    // 计算所有子标题的总高度
    const subtitleNodesArray = Array.from(
      document.querySelectorAll(".scrollable-credits p")
    );
    const subtitleHeight = subtitleNodesArray.reduce(
      (acc, current) => acc + parseFloat(getComputedStyle(current).height),
      0
    );

    setInitialSubtitleHeight(subtitleHeight);
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      let newTranslateY = translateY - event.deltaY; // 计算新的滚动位置

      // 当滚轮向上滚动时，限制最大滚动范围
      if (event.deltaY < 0) {
        newTranslateY = Math.min(newTranslateY, window.innerHeight);
      }
      // 当向下滚动时，确保所有字幕都显示时停止滚动
      else if (event.deltaY > 0 && translateY <= 0) {
        newTranslateY = 0 - initialSubtitleHeight; // 已经在最底部，不再减少
      }

      setTranslateY(newTranslateY);
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [initialSubtitleHeight, translateY]);

  useEffect(() => {
    // 初始时将子标题置于屏幕中央
    const windowHeight = window.innerHeight;
    setTranslateY(windowHeight / 2 - initialSubtitleHeight / 2);
  }, [initialSubtitleHeight]);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        height: "100vh",
        position: "relative",
      }}
      className="scrollable-credits"
    >
      <div
        style={{
          position: "absolute",
          top: `${translateY}px`,
          willChange: "transform",
          color: "#fff",
          left: "40%",
          display: "inline-block", // 添加display: inline-block
          textAlign: "center", // 添加text-align: center
          whiteSpace: "nowrap", // 添加white-space: nowrap
        }}
      >
        {/* 子标题内容... */}
        <p>When you want something,</p>
        <p>When you want something,</p>
        <p>Wheng,</p>
        <p>When you want something,</p>
        <p>When you wng,</p>
        <p>all the universe conspires</p>
        <p>in helping you to achieve it.</p>
        {/* ... */}
      </div>
    </div>
  );
};

export default ScrollableSubtitle;
