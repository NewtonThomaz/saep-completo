export interface Estoque {
  id: number;
  localizacao: string;
  quantidade: number;
  produto: { 
    id: number;
    nome?: string; 
    estoqueMinimo: number;
  };
  ultimaMovimentacao?: Movimentacao | null;
}

export interface Movimentacao {
  tipo: 'ENTRADA' | 'SAIDA';
  quantidade: number;
  data: string;
}