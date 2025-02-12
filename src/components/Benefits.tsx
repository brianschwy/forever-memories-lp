import { Clock, Shield, Calendar, DollarSign } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRef } from "react";

export const Benefits = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Clock,
      label: "Time",
      name: "Time Required",
      diy: "20+ hours of manual work",
      forever: "✓ Minimal, we handle everything",
      competitors: "Packaging and shipping time",
    },
    {
      icon: Shield,
      label: "Risk",
      name: "Photo Safety",
      diy: "Safe at home",
      forever: "✓ Photos never leave your local area",
      competitors: "Ships cross-country or overseas",
    },
    {
      icon: Calendar,
      label: "Timeline",
      name: "Timeline",
      diy: "Days or weeks of personal time",
      forever: "✓ 1-3 days",
      competitors: "3-8 weeks",
    },
    {
      icon: DollarSign,
      label: "Cost",
      name: "Price",
      diy: "Your time plus equipment & software",
      forever: "✓ $0.30 to $0.50 / photo",
      competitors: "$0.30 to $0.60 / photo + packaging & shipping",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-navy mb-16">
          Why customers choose Forever Photos
        </h2>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 -mx-4 px-4"
          >
            <div className="inline-block min-w-full align-middle">
              <div className="rounded-lg border bg-white shadow-md">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-[80px] text-center"></TableHead>
                      <TableHead className="text-navy font-bold text-lg text-center w-[250px]">Do It Yourself</TableHead>
                      <TableHead className="text-navy font-bold text-lg border-x-4 border-t-4 border-navy bg-[#DFF2F9] text-center w-[300px]">
                        Forever Photos
                      </TableHead>
                      <TableHead className="text-navy font-bold text-lg text-center w-[250px]">Our Competitors</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {features.map((feature, index) => (
                      <TableRow 
                        key={feature.name}
                        className="transition-colors hover:bg-gray-50/50"
                      >
                        <TableCell className="font-medium">
                          <div className="flex flex-col items-center gap-1">
                            <feature.icon size={24} className="text-navy" />
                            <span className="text-xs text-gray-600">{feature.label}</span>
                          </div>
                        </TableCell>
                        <TableCell className="min-w-[250px] text-center border-t">{feature.diy}</TableCell>
                        <TableCell className={`border-x-4 border-navy bg-[#DFF2F9] min-w-[300px] text-center ${index === features.length - 1 ? 'border-b-4' : ''}`}>
                          <span className="text-navy font-bold">{feature.forever}</span>
                        </TableCell>
                        <TableCell className="min-w-[250px] text-center border-t">{feature.competitors}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};