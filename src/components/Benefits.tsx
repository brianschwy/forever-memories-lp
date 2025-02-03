import { Clock, Shield, Calendar, DollarSign } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Benefits = () => {
  const features = [
    {
      icon: Clock,
      name: "Time Required",
      diy: "20+ hours of manual work",
      forever: "✓ Minimal, we handle everything",
      competitors: "Packaging and shipping time",
    },
    {
      icon: Shield,
      name: "Photo Safety",
      diy: "Safe at home",
      forever: "✓ Photos never leave your local area",
      competitors: "Ships cross-country or overseas",
    },
    {
      icon: Calendar,
      name: "Timeline",
      diy: "Days or weeks of personal time",
      forever: "✓ 1-3 days, locally managed",
      competitors: "3-8 weeks",
    },
    {
      icon: DollarSign,
      name: "Price",
      diy: "Cost of your time plus equipment & software",
      forever: "✓ $0.30 to $0.50 per photo",
      competitors: "$0.30 to $0.60 per photo plus packaging & shipping",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-navy mb-16">
          Why customers choose Forever Photos
        </h2>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg border bg-white shadow-md">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead className="text-navy font-semibold">Do It Yourself</TableHead>
                    <TableHead className="bg-navy/5 text-navy font-semibold">
                      Forever Photos
                    </TableHead>
                    <TableHead className="text-navy font-semibold">Our Competitors</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {features.map((feature) => (
                    <TableRow 
                      key={feature.name}
                      className="transition-colors hover:bg-gray-50/50"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <feature.icon size={24} className="text-gold" />
                        </div>
                      </TableCell>
                      <TableCell>{feature.diy}</TableCell>
                      <TableCell className="bg-navy/5">
                        <span className="text-gold font-medium">{feature.forever}</span>
                      </TableCell>
                      <TableCell>{feature.competitors}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};