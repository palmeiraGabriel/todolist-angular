export interface Tarefa{
    feita:boolean,
    texto:string,
    prioridade: Prioridade,
}

export enum Prioridade{
    Baixa=1,
    Media=2,
    Alta=3
}