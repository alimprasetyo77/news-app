import SectionContent from "./section/SectionContent";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component*/}
      <SectionContent />
    </div>
  );
}
