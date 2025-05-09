
import { Instagram, Mail, Book } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-serif mb-4">Bia Ferrario</h3>
            <p className="text-white/70 mb-6">
              Artista visual e poetisa, explorando a interseção entre palavras e imagens para criar experiências únicas e emocionantes.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-serif mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#inicio" className="block text-white/70 hover:text-white transition-colors">
                Início
              </a>
              <a href="#arte" className="block text-white/70 hover:text-white transition-colors">
                Arte
              </a>
              <a href="#poemas" className="block text-white/70 hover:text-white transition-colors">
                Poemas
              </a>
              <a href="#livro" className="block text-white/70 hover:text-white transition-colors">
                Livro
              </a>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-serif mb-4">Contato</h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/biaferrario/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @biaferrario
              </a>
              <a 
                href="mailto:contato@biaferrario.com" 
                className="flex items-center text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                contato@biaferrario.com
              </a>
              <a 
                href="https://pubhtml5.com/abdfk/jykn/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center text-white/70 hover:text-white transition-colors"
              >
                <Book className="h-5 w-5 mr-2" />
                Meu Livro
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/50 text-sm">
          &copy; {currentYear} Bia Ferrario. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
