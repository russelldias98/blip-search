import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { TrainingDataType } from '@/app/api/train/types'
import CryptoJS from 'crypto-js'

/**
 * This function takes any number of class values as input and merges them into a single class string.
 * It uses the 'clsx' function to combine the class values and the 'twMerge' function to merge the resulting classes.
 *
 * @param {...ClassValue[]} inputs - The class values to be merged.
 * @returns {string} The merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * This function formats an array of training data into a string.
 * Each element in the array is transformed into a string in the format "Q: question \n A: answer".
 * The transformed elements are then joined together with "\n - " in between each element.
 *
 * @param {TrainingDataType} input - The array of training data to be formatted.
 * @returns {string} The formatted string.
 */
export function formatQsAndAs(input: TrainingDataType) {
  return input.map((el) => `Q: ${el.question} \n A: ${el.answer}`).join('\n - ')
}

/**
 * This function generates a SHA-256 hash for a given question and answer.
 * The question and answer are concatenated and then hashed using the CryptoJS library.
 * The resulting hash is then converted to a hexadecimal string.
 *
 * @param {string} question - The question to be hashed.
 * @param {string} answer - The answer to be hashed.
 * @returns {string} The hexadecimal representation of the SHA-256 hash.
 */
export function generateHash(question: string, answer: string): string {
  return CryptoJS.SHA256(question + answer).toString(CryptoJS.enc.Hex)
}

/**
 * This function takes a string as input and replaces all newline characters (\n) with a space.
 *
 * @param {string} input - The string to be cleaned.
 * @returns {string} The cleaned string with all newline characters replaced by a space.
 */
export function cleanString(input: string): string {
  return input.replace(/\n/g, ' ')
}
