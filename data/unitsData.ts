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
    instagramUrl: "https://www.instagram.com/oboticario",
  },
  {
    id: "2",
    name: "Eudora - Shopping Maceió",
    location: "Av. Gustavo Paiva, 3031 - Cruz das Almas, Maceió - AL",
    imageUrl: "/images/stores/eudora-maceio.jpg",
    instagramUrl: "https://www.instagram.com/eudora",
  },
  {
    id: "3",
    name: "Quem Disse Berenice - Farol Shopping",
    location: "Av. Dr. Júlio Marques Luz, 1000 - Jatiúca, Maceió - AL",
    imageUrl: "/images/stores/qdb-farol.jpg",
    instagramUrl: "https://www.instagram.com/quemdisseberenice",
  },
  // Adicione mais unidades aqui seguindo o mesmo padrão
];
