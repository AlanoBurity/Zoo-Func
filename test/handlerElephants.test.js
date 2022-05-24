const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Sem receber nenhum parametro a função deve retornar "undefined" ', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5;', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
