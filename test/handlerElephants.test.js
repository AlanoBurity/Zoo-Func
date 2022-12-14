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
  it('Testa caso o parametro não seja uma string;', () => {
    expect(handlerElephants(20)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5;', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('testa se a função getElephants com o parametro "location" retorna o esperado', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Passando por argumento um objeto vazio ({}) deve retornar a string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Ausencia de parametro no objeto elephant', () => {
    expect(handlerElephants('')).toBeNull();
  });
});
