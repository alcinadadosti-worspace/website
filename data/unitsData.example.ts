export interface StoreUnit {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  instagramUrl: string;
}

export const unitsData: StoreUnit[] = [
  {
    id: "1",
    name: "O Boticário - Shopping Pátio Maceió",
    location: "Av. Comendador Gustavo Paiva, 2990 - Mangabeiras, Maceió - AL",
    imageUrl: "/images/stores/boticario-patio.jpg",
    instagramUrl: "https://www.instagram.com/oboticariopatiomc",
  },
  {
    id: "2",
    name: "Eudora - Shopping Maceió",
    location: "Av. Gustavo Paiva, 3031 - Cruz das Almas, Maceió - AL",
    imageUrl: "/images/stores/eudora-maceio.jpg",
    instagramUrl: "https://www.instagram.com/eudoramaceio",
  },
  {
    id: "3",
    name: "Quem Disse Berenice - Farol Shopping",
    location: "Av. Dr. Júlio Marques Luz, 1000 - Jatiúca, Maceió - AL",
    imageUrl: "/images/stores/qdb-farol.jpg",
    instagramUrl: "https://www.instagram.com/qdbfarolshopping",
  },
  {
    id: "4",
    name: "O Boticário - Farol Shopping",
    location: "Av. Dr. Júlio Marques Luz, 1000 - Jatiúca, Maceió - AL",
    imageUrl: "/images/stores/boticario-farol.jpg",
    instagramUrl: "https://www.instagram.com/oboticariofarol",
  },
  {
    id: "5",
    name: "Niina Secrets - Shopping Maceió",
    location: "Av. Gustavo Paiva, 3031 - Cruz das Almas, Maceió - AL",
    imageUrl: "/images/stores/niina-maceio.jpg",
    instagramUrl: "https://www.instagram.com/niinasecretsmaceio",
  },
  {
    id: "6",
    name: "O Boticário - Parque Shopping Maceió",
    location: "Av. Menino Marcelo, 7200 - Serraria, Maceió - AL",
    imageUrl: "/images/stores/boticario-parque.jpg",
    instagramUrl: "https://www.instagram.com/oboticarioparque",
  },
  // Adicione mais lojas seguindo o mesmo padrão
  // Para cada loja, não esqueça de:
  // 1. Incrementar o ID
  // 2. Adicionar a foto em /public/images/stores/
  // 3. Colocar o link correto do Instagram
];
