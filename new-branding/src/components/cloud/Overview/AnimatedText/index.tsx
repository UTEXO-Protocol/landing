import "./index.scss";

export const AnimatedText: React.FC<{ text: string; bold?: boolean; groupSize: number; visible: boolean }> = ({ text, bold, groupSize, visible }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => {
        const groupIndex = Math.floor(i / groupSize);
        return (
          <span
            key={i}
            className={`animated-text${bold ? " animated-text--bold" : ""}${visible ? " animated-text--visible" : ""}`}
            style={{ "--delay": `${groupIndex * 0.4}s` } as React.CSSProperties}
          >
            {word}{" "}
          </span>
        );
      })}
    </>
  );
};
