
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Book = () => {
  return (
    <section id="livro" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="heading-lg mb-6 font-serif text-accent">Novo Livro</h2>
            <h3 className="heading-md mb-8">Uma jornada através de palavras e sentimentos</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tenho o prazer de apresentar meu novo livro, uma coleção de poemas e reflexões que representam 
              minha jornada artística e pessoal. Cada página revela um pedaço da minha alma, 
              convidando o leitor a embarcar nessa viagem de autodescoberta e contemplação.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Este trabalho é o resultado de anos de observação, sentimento e criação, reunidos 
              em uma obra que espero que toque seu coração tanto quanto tocou o meu ao criá-la.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white" 
              size="lg"
              onClick={() => window.open("https://pubhtml5.com/abdfk/jykn/", "_blank")}
            >
              <BookOpen className="mr-2 h-4 w-4" /> Ler Agora
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rotate-3 bg-accent/10 rounded-lg transform -z-10"></div>
              <img 
                src="https://source.unsplash.com/photo-1544947950-fa07a98d237f" 
                alt="Livro de Bia Ferrario" 
                className="max-w-sm w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-lg">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center text-white font-serif text-lg">
                  Novo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
