
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  // Função para rolar suavemente até a seção de livro
  const scrollToBook = () => {
    document.getElementById('livro')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Função para rolar suavemente até a galeria
  const scrollToGallery = () => {
    document.getElementById('arte')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="heading-xl mb-6 text-foreground">
              <span className="block font-light">Arte e Poesia por</span>
              <span className="text-accent font-serif">Bia Ferrario</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              "Todos os dias abro o coração, me desfaço das travas, assumo que o erro é oportuno, estalo os ombros, respiro fundo e começo."
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-accent hover:bg-accent/90 text-white" 
                size="lg"
                onClick={scrollToBook}
              >
                O Guia do Palhaço Ilustrado
              </Button>
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-white" 
                size="lg"
                onClick={scrollToGallery}
              >
                Ver Galeria
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 -rotate-6 bg-accent/10 rounded-lg transform -z-10"></div>
              <img 
                src="/lovable-uploads/e1de8556-05dc-4666-bfaa-a5ca87105589.png" 
                alt="Bia Ferrario - Artista e Poetisa" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="h-8 w-8 text-accent opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
