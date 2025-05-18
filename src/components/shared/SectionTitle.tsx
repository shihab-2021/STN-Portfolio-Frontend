export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-3xl md:text-4xl font-sansita font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primaryColor1)] to-[var(--primaryColor2)] underline decoration-[var(--primaryColor2)] decoration-2 underline-offset-3">
        {title}
      </h1>
      <span className="mt-1 flex-grow h-[2px] bg-gradient-to-r from-[var(--primaryColor2)] to-transparent"></span>
    </div>
  );
}
