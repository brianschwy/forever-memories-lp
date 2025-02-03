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
      forever: "✓ 1-3 days, locally managed",
      competitors: "3-8 weeks",
    },
    {
      icon: DollarSign,
      label: "Cost",
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
                    <TableHead className="text-navy font-semibold border-x-4 border-t-4 border-navy">
                      Forever Photos
                    </TableHead>
                    <TableHead className="text-navy font-semibold">Our Competitors</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {features.map((feature, index) => (
                    <TableRow 
                      key={feature.name}
                      className="transition-colors hover:bg-gray-50/50"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <feature.icon size={24} className="text-gold" />
                          <span className="text-sm text-gray-600">{feature.label}</span>
                        </div>
                      </TableCell>
                      <TableCell className="min-w-[200px]">{feature.diy}</TableCell>
                      <TableCell className={`border-x-4 border-navy ${index === features.length - 1 ? 'border-b-4' : ''}`}>
                        <span className="text-navy font-bold">{feature.forever}</span>
                      </TableCell>
                      <TableCell className="min-w-[200px]">{feature.competitors}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Mobile version - shows up on small screens */}
        <div className="md:hidden mt-8 space-y-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center gap-2 mb-3">
                <feature.icon size={24} className="text-gold" />
                <span className="text-sm text-gray-600">{feature.label}</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Do It Yourself</h4>
                  <p className="mt-1">{feature.diy}</p>
                </div>
                
                <div className="border-2 border-navy p-3 rounded-md">
                  <h4 className="text-sm font-semibold text-navy">Forever Photos</h4>
                  <p className="mt-1 text-navy font-bold">{feature.forever}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Our Competitors</h4>
                  <p className="mt-1">{feature.competitors}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};