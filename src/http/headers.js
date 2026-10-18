import { defaults } from '../config/defaults.js';

export function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': defaults.cors.origin,
    'Access-Control-Allow-Methods': defaults.cors.methods,
    'Access-Control-Allow-Headers': defaults.cors.headers,
  };
}

export function jsonHeaders() {
  return {
    'Content-Type': 'application/json',
    ...corsHeaders(),
  };
}
