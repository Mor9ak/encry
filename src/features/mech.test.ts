import CaesarMech from "./CaesarMech";
import MirrorMech from "./MirrorMech";
import IndexMech from "./IndexMech";
import IndexDecoderMech from './IndexDecoderMech';
import AtbashMech from "./AtbashMech";
import OneTwoMech from "./OneTwoMech";
import { test, expect, describe } from 'vitest';

describe('Ciphers tests', () => {
    const engAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const rusAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

    describe('English alphabet (abcdefghijklmnopqrstuvwxyz)', () => {
        test('Caesar: encrypts "abc" to "cde" with key 2', () => {
            expect(CaesarMech({ text: 'abc', alphabet: engAlphabet, key: 2 })).toBe('cde');
        });

        test('Caesar: handles negative key', () => {
            expect(CaesarMech({ text: 'cde', alphabet: engAlphabet, key: -2 })).toBe('abc');
        });

        test('Mirror: reverses "abc" to "cba"', () => {
            expect(MirrorMech({ text: 'abc' })).toBe('cba');
        });

        test('Mirror: handles palindrome', () => {
            expect(MirrorMech({ text: 'racecar' })).toBe('racecar');
        });

        test('Index: encodes "abc" to "000102"', () => {
            expect(IndexMech({ text: 'abc', alphabet: engAlphabet })).toBe('000102');
        });

        test('Index: encodes text with spaces', () => {
            const result = IndexMech({ text: 'a b', alphabet: engAlphabet });
            expect(result).toContain('26'); // space index
        });

        test('IndexDecoder: decodes "000102" to "abc"', () => {
            expect(IndexDecoderMech({ text: '000102', alphabet: engAlphabet })).toBe('abc');
        });

        test('IndexDecoder: handles unknown codes as "?"', () => {
            expect(IndexDecoderMech({ text: '999', alphabet: engAlphabet })).toBe('??');
        });

        test('Index: encode + decode = original', () => {
            const original = 'hello world';
            const encoded = IndexMech({ text: original, alphabet: engAlphabet });
            const decoded = IndexDecoderMech({ text: encoded, alphabet: engAlphabet });
            expect(decoded).toBe(original);
        });

        test('Atbash: encrypts "abc" to "zyx"', () => {
            expect(AtbashMech({ text: 'abc', alphabet: engAlphabet })).toBe('zyx');
        });

        test('OneTwo: swaps pairs in "abc" to "bac"', () => {
            expect(OneTwoMech({ text: 'abc' })).toBe('bac');
        });

        test('OneTwo: swaps pairs in "abcdef" to "badcfe"', () => {
            expect(OneTwoMech({ text: 'abcdef' })).toBe('badcfe');
        });
    });

    describe('Russian alphabet (абвгдеёжзийклмнопрстуфхцчшщъыьэюя)', () => {
        test('Caesar: encrypts "абв" to "вгд" with key 2', () => {
            expect(CaesarMech({ text: 'абв', alphabet: rusAlphabet, key: 2 })).toBe('вгд');
        });

        test('Mirror: reverses "абв" to "вба"', () => {
            expect(MirrorMech({ text: 'абв' })).toBe('вба');
        });

        test('Index: encodes "абв" to "000102"', () => {
            expect(IndexMech({ text: 'абв', alphabet: rusAlphabet })).toBe('000102');
        });

        test('IndexDecoder: decodes "000102" to "абв"', () => {
            expect(IndexDecoderMech({ text: '000102', alphabet: rusAlphabet })).toBe('абв');
        });

        test('Atbash: encrypts "абв" to "яюэ"', () => {
            expect(AtbashMech({ text: 'абв', alphabet: rusAlphabet })).toBe('яюэ');
        });

        test('OneTwo: swaps pairs in "абв" to "бав"', () => {
            expect(OneTwoMech({ text: 'абв' })).toBe('бав');
        });
    });

    describe('Edge cases and error handling', () => {
        test('All ciphers handle empty text', () => {
            expect(CaesarMech({ text: '', alphabet: engAlphabet, key: 1 })).toBe('');
            expect(MirrorMech({ text: '' })).toBe('');
            expect(IndexMech({ text: '', alphabet: engAlphabet })).toBe('');
            expect(IndexDecoderMech({ text: '', alphabet: engAlphabet })).toBe('');
            expect(AtbashMech({ text: '', alphabet: engAlphabet })).toBe('');
            expect(OneTwoMech({ text: '' })).toBe('');
        });

        test('All ciphers preserve unknown characters', () => {
            const text = 'hello world!';
            expect(CaesarMech({ text, alphabet: engAlphabet, key: 1 })).toContain('!');
            expect(AtbashMech({ text, alphabet: engAlphabet })).toContain('!');
            expect(OneTwoMech({ text })).toContain('!');
        });

        test('IndexDecoder: replaces unknown codes with "?"', () => {
            const result = IndexDecoderMech({
                text: '000102999',
                alphabet: engAlphabet
            });
            expect(result).toBe('abc??');
        });

        test('Caesar: handles key larger than alphabet', () => {
            expect(CaesarMech({ text: 'abc', alphabet: engAlphabet, key: 28 }))
                .toBe('cde'); // 28 % 26 = 2
        });
    });

    describe('Integration tests', () => {
        test('Index: full cycle with unknown characters', () => {
            const original = 'hello world!';
            const encoded = IndexMech({ text: original, alphabet: engAlphabet });
            // '!' не в алфавите, будет добавлен в Map
            const decoded = IndexDecoderMech({ text: encoded, alphabet: engAlphabet });
            // '!' не может быть декодирован, станет '?'
            expect(decoded).toBe('hello world?');
        });

        test('Caesar + Mirror + Atbash produce different results', () => {
            const text = 'abc';
            const caesar = CaesarMech({ text, alphabet: engAlphabet, key: 1 });
            const mirror = MirrorMech({ text });
            const atbash = AtbashMech({ text, alphabet: engAlphabet });

            expect(caesar).not.toBe(mirror);
            expect(caesar).not.toBe(atbash);
            expect(mirror).not.toBe(atbash);
        });
    });
});