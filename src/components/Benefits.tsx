import { Clock, Shield, Calendar, DollarSign, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

export const Benefits = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const columnWidth = container.clientWidth / 2; // Approximate width of one column
      const scrollAmount = direction === 'left' ? -columnWidth : columnWidth;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-navy mb-16">
          Why customers choose Forever Photos
        </h2>
        
        <div className="relative">
          {/* Scroll Arrows - Only show on mobile/tablet */}
          <div className="md:hidden flex justify-between absolute -left-4 -right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full bg-white shadow-lg pointer-events-auto ${!canScrollLeft ? 'opacity-50' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              style={{ backgroundColor: 'white' }}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full bg-white shadow-lg pointer-events-auto ${!canScrollRight ? 'opacity-50' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              style={{ backgroundColor: 'white' }}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Table Container with Horizontal Scroll */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 -mx-4 px-4"
            onScroll={checkScrollability}
          >
            <div className="inline-block min-w-full align-middle">
              <div className="rounded-lg border bg-white shadow-md">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-[100px]"></TableHead>
                      <TableHead className="text-navy font-semibold">Do It Yourself</TableHead>
                      <TableHead className="text-navy font-semibold border-4 border-navy bg-[#d1ecf7]">
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
                            <feature.icon size={24} className="text-navy" />
                            <span className="text-sm text-gray-600">{feature.label}</span>
                          </div>
                        </TableCell>
                        <TableCell className="min-w-[200px]">{feature.diy}</TableCell>
                        <TableCell className={`border-x-4 border-navy bg-[#d1ecf7] ${index === features.length - 1 ? 'border-b-4' : ''} ${index === 0 ? 'border-t-4' : ''}`}>
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
        </div>
      </div>
    </section>
  );
};