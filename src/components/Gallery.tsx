
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

interface ArtPiece {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  year?: string;
  technique?: string;
  dimensions?: string;
}

const artPieces: ArtPiece[] = [
  {
    id: 1,
    title: "Pensar em Lar",
    description: "Uma obra que ilustra a reflexão sobre o conceito de lar, representado pela tenda de circo.",
    imageUrl: "/lovable-uploads/c332e9ef-9a2e-4e7c-b53c-676c035832a6.png",
    year: "2024",
    technique: "Aquarela sobre papel",
    dimensions: "21 x 29.7 cm"
  },
  {
    id: 2,
    title: "Depois da Última Vez",
    description: "Obra que explora a transformação após experiências profundas, com simbolismo através da romã e lua.",
    imageUrl: "/lovable-uploads/353fb5d4-1f38-4ec7-9f7e-9cbad3dc612b.png",
    year: "2023",
    technique: "Aquarela sobre papel",
    dimensions: "21 x 29.7 cm"
  },
  {
    id: 3,
    title: "Personagens de Circo",
    description: "Série de personagens circenses que representam diferentes faces da vida e da experiência humana.",
    imageUrl: "/lovable-uploads/e1de8556-05dc-4666-bfaa-a5ca87105589.png",
    year: "2024",
    technique: "Aquarela sobre papel",
    dimensions: "Diversas"
  },
  {
    id: 4,
    title: "Diálogo",
    description: "Obra que captura um momento de intimidade e troca entre gerações.",
    imageUrl: "/lovable-uploads/2b0a47b7-0eeb-4ef8-9fef-2536bdd1a707.png",
    year: "2023", 
    technique: "Fotografia",
    dimensions: "Digital"
  },
  {
    id: 5,
    title: "De Há Guerra",
    description: "Uma reflexão visual sobre os conflitos internos e externos, combinando elementos de texto e pintura.",
    imageUrl: "/lovable-uploads/40bed54e-9fcc-4ce5-9eef-b29a215b0869.png",
    year: "2024",
    technique: "Técnica mista sobre papel",
    dimensions: "30 x 30 cm"
  },
];

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  
  return (
    <section id="arte" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Arte Visual</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada obra é uma expressão de emoções e percepções únicas, 
            capturadas através de cores e formas que convidam à contemplação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {artPieces.map((piece) => (
            <div 
              key={piece.id} 
              className="art-card group cursor-pointer"
              onClick={() => setSelectedArt(piece)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={piece.imageUrl} 
                  alt={piece.title}
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif text-xl mb-2">{piece.title}</h3>
                  <p className="text-white/80 text-sm">{piece.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-accent text-accent hover:bg-accent hover:text-white"
            onClick={() => window.open("https://www.instagram.com/biaferrario/", "_blank")}
          >
            Ver Mais Obras no Instagram <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Dialog open={!!selectedArt} onOpenChange={(open) => !open && setSelectedArt(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full">
              {selectedArt && (
                <img 
                  src={selectedArt.imageUrl} 
                  alt={selectedArt.title}
                  className="h-full w-full object-contain bg-black/5"
                />
              )}
            </div>
            <div className="p-6">
              {selectedArt && (
                <>
                  <h3 className="heading-md mb-4 font-serif">{selectedArt.title}</h3>
                  <p className="text-muted-foreground mb-6">{selectedArt.description}</p>
                  <div className="space-y-4">
                    {selectedArt.technique && (
                      <p className="text-sm text-foreground/80">
                        Técnica: {selectedArt.technique}
                      </p>
                    )}
                    {selectedArt.dimensions && (
                      <p className="text-sm text-foreground/80">
                        Dimensões: {selectedArt.dimensions}
                      </p>
                    )}
                    {selectedArt.year && (
                      <p className="text-sm text-foreground/80">
                        Ano: {selectedArt.year}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
