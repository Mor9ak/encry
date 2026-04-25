import CaesarMech from "./CaesarMech";
import MirrorMech from "./MirrorMech";
import IndexMech from "./IndexMech";
import IndexDecoderMech from './IndexDecoderMech';
import AtbashMech from "./AtbashMech";
import OneTwoMech from "./OneTwoMech";
import {test, expect, describe} from 'vitest';

describe('Ciphers tests', () => {
    describe('Ciphers test (abc, english alphabet)', () => {

        const engAlphabet='abcdefghijklmnopqrstuvwxyz';

        test('Caesar test; abc -> cdf', () => {
            expect(CaesarMech({text:'abc', alphabet: engAlphabet, key: 2})).toMatch(/cde/);
        });
        test('Mirror test; abc -> cba', () => {
            expect(MirrorMech({text:'abc'})).toMatch(/cba/);
        });
        test('Index coder test; abc -> 000102', () => {
            expect(IndexMech({text: 'abc', alphabet: engAlphabet})).toMatch(/000102/);
        });
        test('Index decoder test; 000102 -> abc', () => {
            expect(IndexDecoderMech({text: '000102', alphabet: engAlphabet})).toMatch(/abc/);
        });
        test('Atbash test; abc -> zyx', () => {
            expect(AtbashMech({text: 'abc', alphabet: engAlphabet})).toMatch(/zyx/);
        })
        test('OneTwoMech test: abc -> bac', () => {
            expect(OneTwoMech({text: 'abc'})).toMatch(/bac/);
        })
    });
    describe('Ciphers test (абв, russian alphabet)', () => {

        const rusAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

        test('Caesar test; абв -> вгд', () => {
            expect(CaesarMech({text:'абв', alphabet: rusAlphabet, key: 2})).toMatch(/вгд/);
        });
        test('Mirror test; абв -> вба', () => {
            expect(MirrorMech({text:'абв'})).toMatch(/вба/);
        });
        test('Index coder test; абв -> 000102', () => {
            expect(IndexMech({text: 'абв', alphabet: rusAlphabet})).toMatch(/000102/);
        });
        test('Index decoder test; 000102 -> абв', () => {
            expect(IndexDecoderMech({text: '000102', alphabet: rusAlphabet})).toMatch(/абв/);
        });
        test('Atbash test; абв -> яюэ', () => {
            expect(AtbashMech({text: 'абв', alphabet: rusAlphabet})).toMatch(/яюэ/);
        })
        test('OneTwoMech test: абв -> бав', () => {
            expect(OneTwoMech({text: 'абв'})).toMatch(/бав/);
        })
    })
})
