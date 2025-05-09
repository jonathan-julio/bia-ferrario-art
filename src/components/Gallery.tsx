
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ArtPiece {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const artPieces: ArtPiece[] = [
  {
    id: 1,
    title: "Luz do Amanhecer",
    description: "Pintura que captura os tons quentes do nascer do sol refletidos em paisagem serena.",
    imageUrl: "https://source.unsplash.com/photo-1482938289607-e9573fc25ebb"
  },
  {
    id: 2,
    title: "Reflexões",
    description: "Obra abstrata que convida à contemplação e mergulha o espectador em camadas de significado.",
    imageUrl: "https://source.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: 3,
    title: "Montanhas do Pensamento",
    description: "Série de montanhas em técnica impressionista que simboliza a jornada interior.",
    imageUrl: "https://source.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: 4,
    title: "Arquitetura da Mente",
    description: "Estruturas geométricas em contraste com elementos orgânicos, representando o equilíbrio entre razão e emoção.",
    imageUrl: "https://source.unsplash.com/photo-1527576539890-dfa815648363"
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
            Cada pintura é uma expressão de emoções e percepções únicas, 
            capturadas através de cores e formas que convidam à contemplação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
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
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
            Ver Mais Obras
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
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="p-6">
              {selectedArt && (
                <>
                  <h3 className="heading-md mb-4 font-serif">{selectedArt.title}</h3>
                  <p className="text-muted-foreground mb-6">{selectedArt.description}</p>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      Técnica: Óleo sobre tela
                    </p>
                    <p className="text-sm text-foreground/80">
                      Dimensões: 60 x 80 cm
                    </p>
                    <p className="text-sm text-foreground/80">
                      Ano: 2023
                    </p>
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
