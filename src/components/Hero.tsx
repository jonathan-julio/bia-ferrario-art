
import { Button } from "@/components/ui/button";

const Hero = () => {
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
              Artista visual e poetisa, criando obras que combinam sensibilidade e expressão através de pinturas e palavras.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-white" size="lg">
                Conheça o Livro
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white" size="lg">
                Ver Galeria
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 -rotate-6 bg-accent/10 rounded-lg transform -z-10"></div>
              <img 
                src="https://source.unsplash.com/photo-1578301978693-85fa9c0320b9" 
                alt="Bia Ferrario - Artista e Poetisa" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
