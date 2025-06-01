// SubLayout.tsx
import { HeaderComponent } from "@/layout/header";

type Props = {
  children: React.ReactNode;
};

const SubLayout = ({ children }: Props) => {
  return (
    <section className="relative min-h-screen">
      <HeaderComponent />
      <div>{children}</div>
    </section>
  );
};

export default SubLayout;
