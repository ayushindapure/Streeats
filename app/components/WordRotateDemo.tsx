import WordRotate from "@/components/ui/word-rotate";

export function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Word", "Rotate", "Good", "Nice"]}
    />
  );
}
