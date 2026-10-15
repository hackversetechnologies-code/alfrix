import Image from "next/image";

export default function Logo({ showIcon = true, size = "md" }: { showIcon?: boolean; size?: "sm" | "md" | "lg" }) {
  const imgSize = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";

  return (
    <div className="flex items-center gap-2.5">
      {showIcon && (
        <div className="relative overflow-hidden rounded-lg border border-lime/30 bg-bg3/80 p-1 shadow-[0_0_15px_rgba(181,243,106,0.15)]">
          <Image
            src="/images/logo.png"
            alt="ALFRIX TECH Logo"
            width={imgSize}
            height={imgSize}
            className="h-auto w-auto object-contain"
            priority
          />
        </div>
      )}
      <span className={`font-display font-bold tracking-tight text-soft ${textSize}`}>
        ALFRIX<span className="text-lime"> TECH</span>
      </span>
    </div>
  );
}
