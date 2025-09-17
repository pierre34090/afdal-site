import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  height?: number;
};

export default function PageHeader({ title, subtitle, imageSrc, height = 320 }: Props) {
  return (
    <section className="relative w-full border-b" style={{ height }}>
      {/* Image */}
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Texte */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-white/90 text-base md:text-lg mt-2 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
