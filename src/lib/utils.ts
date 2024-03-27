import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
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

interface SendResponseParams {
  success: boolean
  data?: any
}

/**
 * Sends a response with the specified success status and data.
 *
 * @param success - Indicates whether the response was successful.
 * @param data - The data to be included in the response.
 * @returns The JSON response object.
 */
export function SendResponse({ success, data }: SendResponseParams) {
  const responseObj: SendResponseParams = {
    success,
  }

  if (data) {
    responseObj.data = data
  }

  return Response.json(responseObj)
}
