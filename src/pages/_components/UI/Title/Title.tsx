type TitleProps = {
  title: string;
  subtitle?: string;
};

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div>
      <h3 className="text-uppercase title">{title}</h3>
      {subtitle && <p className="text-uppercase color-orange">{subtitle}</p>}
    </div>
  );
}
