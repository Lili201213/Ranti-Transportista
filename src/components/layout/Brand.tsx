import Link from "next/link";

type BrandProps = {
  onClick?: () => void;
};

export default function Brand({ onClick }: BrandProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2 font-semibold tracking-tight"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-lg text-brand-foreground shadow-sm">
        🚚
      </span>
      <span className="text-lg">
        Ranti<span className="text-brand"> Transportista</span>
      </span>
    </Link>
  );
}
