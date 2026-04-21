import { FileText, FileSpreadsheet, ShoppingBag, Coffee } from "lucide-react";

const resources = [
  {
    title: "Strategic Matrix",
    description: "Matrix with all the decisions taken",
    href: "/Strategic_Matrices_JuanValdez.pdf",
    icon: FileText,
    type: "PDF",
  },
  {
    title: "Strategic Proposal",
    description: "Detailed strategic proposal",
    href: "/Origen_JuanValdez_Global_Strategy_2023.pdf",
    icon: FileText,
    type: "PDF",
  },
  {
    title: "Financial Indicators",
    description: "Key financial indicators",
    href: "/Procafecol_Indicadores_Financieros.xlsx",
    icon: FileSpreadsheet,
    type: "XLSX",
  },
  {
    title: "E-commerce",
    description: "Visit our e-commerce",
    href: "https://juanvaldez.vercel.app/",
    icon: ShoppingBag,
    type: "LINK",
    external: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="container mx-auto px-6 py-12 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary-foreground/15 flex items-center justify-center">
            <Coffee className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Juan Valdez</h1>
            
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-2">Resources</h2>
          <p className="text-muted-foreground">
            All the documents
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <a
                key={r.title}
                href={r.href}
                target={r.external ? "_blank" : "_blank"}
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)] hover:border-primary transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-card-foreground">
                        {r.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-coffee text-primary-foreground">
                        {r.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>

    </div>
  );
};

export default Index;
