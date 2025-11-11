export interface ProdutoForm {
  id?:Number;
  nome: string;
  material: string;
  tamanho: number | string;
  peso: number | string;
  estoqueMinimo: number | string;
  marca: string;
  modelo: string;
  anoFabricacao: number | string;
  especificacoes: string;
}
