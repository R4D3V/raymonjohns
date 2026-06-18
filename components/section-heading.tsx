type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-ink-muted leading-relaxed ${
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
