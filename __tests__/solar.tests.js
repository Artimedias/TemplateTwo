import user from '../js/age.js';

describe('checkType', () => {
let Jermey;
  beforeEach(() => {
    Jermey = new user(42, "male");
  });
  test('Should be able to use checktype to return the users age and sex', () => {
    expect(Jermey.checktype(Jermey.user)[0]).toEqual(42);
    expect(Jermey.checktype(Jermey.user)[1]).toEqual("male");
  });
});

describe('ageConvert', () => {
  let Jane;
  beforeEach(() => {
    Jane = new user(20, "female");
  });
  test('Should be able to respond with the age on all the different planets', () => {
    expect(Jane.ageConvert(Jane.user)[0]).toEqual("83.20");
    expect(Jane.ageConvert(Jane.user)[1]).toEqual("32.40");
    expect(Jane.ageConvert(Jane.user)[2]).toEqual("20.00");
    expect(Jane.ageConvert(Jane.user)[3]).toEqual("10.60");
    expect(Jane.ageConvert(Jane.user)[4]).toEqual("1.68");
    expect(Jane.ageConvert(Jane.user)[5]).toEqual("0.68");
    expect(Jane.ageConvert(Jane.user)[6]).toEqual("0.24");
    expect(Jane.ageConvert(Jane.user)[7]).toEqual("0.12");
  });
});

describe('left', () => {
  let James;
  let Jessica;
  let Jenny;
  beforeEach(() => {
    James = new user(60, "male");
    Jessica = new user(120, "female");
    Jenny = new user(20, "female");
  });
  test('Should respond with the remaining life left for a 60 y/o male', () => {
    expect(James.lifeLeft(James.user)[0]).toEqual(66.97);
    expect(James.lifeLeft(James.user)[1]).toEqual(26.08);
    expect(James.lifeLeft(James.user)[2]).toEqual(16.1);
    expect(James.lifeLeft(James.user)[3]).toEqual(8.53);
    expect(James.lifeLeft(James.user)[4]).toEqual(1.35);
    expect(James.lifeLeft(James.user)[5]).toEqual(.54);
    expect(James.lifeLeft(James.user)[6]).toEqual(.19);
    expect(James.lifeLeft(James.user)[7]).toEqual(.09);
  });
  test('Should respond how much over the average lifespan a 120 y/o female is', () => {
    expect(Jessica.lifeLeft(Jessica.user)[0]).toEqual(161.83);
    expect(Jessica.lifeLeft(Jessica.user)[1]).toEqual(63.02);
    expect(Jessica.lifeLeft(Jessica.user)[2]).toEqual(38.90);
    expect(Jessica.lifeLeft(Jessica.user)[3]).toEqual(20.62);
    expect(Jessica.lifeLeft(Jessica.user)[4]).toEqual(3.27);
    expect(Jessica.lifeLeft(Jessica.user)[5]).toEqual(1.33);
    expect(Jessica.lifeLeft(Jessica.user)[6]).toEqual(0.47);
    expect(Jessica.lifeLeft(Jessica.user)[7]).toEqual(0.24);
  });
  test('Should respond with the remaining years to live for a 20 y/o female', () => {
    expect(Jenny.lifeLeft(Jenny.user)[0]).toEqual(254.17);
    expect(Jenny.lifeLeft(Jenny.user)[1]).toEqual(98.98);
    expect(Jenny.lifeLeft(Jenny.user)[2]).toEqual(61.1);
    expect(Jenny.lifeLeft(Jenny.user)[3]).toEqual(32.38);
    expect(Jenny.lifeLeft(Jenny.user)[4]).toEqual(5.13);
    expect(Jenny.lifeLeft(Jenny.user)[5]).toEqual(2.07);
    expect(Jenny.lifeLeft(Jenny.user)[6]).toEqual(0.73);
    expect(Jenny.lifeLeft(Jenny.user)[7]).toEqual(0.36);
  });
});

